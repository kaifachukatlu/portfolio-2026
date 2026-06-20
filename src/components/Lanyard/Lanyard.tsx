import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer, RoundedBox, Html } from '@react-three/drei'
import { Physics, RigidBody, useRopeJoint } from '@react-three/rapier'

// A simplified, physics-based swinging card component
const Card = () => {
  const cardRef = useRef<any>(null)
  const fixedRef = useRef<any>(null)

  // Rope joint connecting the fixed point to the card
  useRopeJoint(fixedRef, cardRef, [[0, 0, 0], [0, 2, 0], 4])

  useFrame((state) => {
    if (cardRef.current) {
      // Add slight gentle sway
      cardRef.current.applyImpulse({ 
        x: Math.sin(state.clock.elapsedTime) * 0.1, 
        y: 0, 
        z: Math.cos(state.clock.elapsedTime) * 0.05 
      }, true)
    }
  })

  return (
    <group>
      {/* Anchor Point */}
      <RigidBody ref={fixedRef} type="fixed" position={[0, 4, 0]} />

      {/* The Swinging Card */}
      <RigidBody ref={cardRef} colliders="cuboid" position={[0, -2, 0]} mass={2} linearDamping={2} angularDamping={2}>
        <RoundedBox args={[2.5, 3.8, 0.1]} radius={0.1} smoothness={4}>
          <meshPhysicalMaterial 
            color="#111" 
            metalness={0.8}
            roughness={0.2}
            clearcoat={1}
          />
        </RoundedBox>
        
        {/* Card Content HTML overlay */}
        <Html transform position={[0, 0, 0.06]} distanceFactor={4}>
          <div className="w-[200px] h-[320px] bg-black/80 backdrop-blur-md rounded-xl border border-white/20 p-4 flex flex-col justify-between select-none">
            <div>
              <div className="text-xl font-bold text-white mb-1">Kaif</div>
              <div className="text-xs text-indigo-400 font-mono">AI & IoT Engineer</div>
            </div>
            
            <div className="flex-1 flex items-center justify-center">
              {/* QR Code Mock */}
              <div className="w-24 h-24 bg-white/10 rounded-lg p-2 border border-white/20">
                <div className="w-full h-full border-2 border-dashed border-white/40" />
              </div>
            </div>
            
            <div className="text-[10px] text-gray-500 text-center uppercase tracking-widest border-t border-white/10 pt-2">
              Patent Holder 2024
            </div>
          </div>
        </Html>
      </RigidBody>
    </group>
  )
}

export const Lanyard = () => {
  return (
    <div className="lanyard-container absolute right-0 top-0 w-full md:w-1/2 h-screen z-10 hidden md:block">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={Math.PI} />
        <Environment preset="city">
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
        <Physics gravity={[0, -20, 0]} timeStep="vary">
          <Card />
        </Physics>
      </Canvas>
    </div>
  )
}

export default Lanyard;
