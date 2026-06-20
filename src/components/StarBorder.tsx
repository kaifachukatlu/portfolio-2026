import React from "react";

interface StarBorderProps {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  children: React.ReactNode;
  [key: string]: any;
}

const StarBorder: React.FC<StarBorderProps> = ({
  as: Component = "button",
  className = "",
  color = "magenta",
  speed = "5s",
  children,
  ...props
}) => {
  const Tag = Component as any;
  return (
    <Tag
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] ${className}`}
      {...props}
    >
      <span
        className="absolute inset-[-1000%] animate-[spin_auto_linear_infinite]"
        style={{
          animationDuration: speed,
          background: `conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 80%, ${color} 100%)`,
        }}
      />
      <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[#0a0a0a]/90 px-8 py-3 text-sm font-bold text-white backdrop-blur-3xl transition-colors hover:bg-black/50">
        {children}
      </span>
    </Tag>
  );
};

export default StarBorder;
