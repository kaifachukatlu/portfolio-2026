import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiLinkedin, FiMapPin, FiPhone, FiUser, FiMessageSquare, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';
import StrandsRaw from './Strands';
const Strands = StrandsRaw as any;

// ─── EmailJS config ────────────────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Create a service (Gmail) → copy Service ID below
// 3. Create a template → copy Template ID below
// 4. Copy your Public Key from Account → API Keys
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
// ───────────────────────────────────────────────────────────────────────────────

type Status = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ from_name: '', reply_to: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.from_name || !form.reply_to || !form.message) return;
    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ from_name: '', reply_to: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClass = `
    w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white
    placeholder:text-white/30 focus:outline-none focus:border-violet-500/60
    focus:bg-violet-500/5 transition-all duration-300 text-sm
    hover:border-white/20
  `;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Strands background */}
      <div
        className="absolute inset-0 z-0 opacity-60 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
        }}
      >
        <Strands
          colors={["#7c3aed", "#06d6d6", "#e040fb"]}
          count={5}
          speed={0.3}
          amplitude={1.2}
          waviness={0.8}
          thickness={1}
          glow={3}
          taper={2}
          spread={1.5}
          intensity={0.4}
          saturation={1.8}
          opacity={0.8}
          scale={1.2}
          glass={false}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 inline-block mb-4">
            Let's build something incredible
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Open to internships, collaborations, and exciting projects in AI & IoT.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ── Left: Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Quick action buttons */}
            <a
              href="mailto:kaifachukatlu@gmail.com"
              className="interactive flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-violet-500/50 hover:bg-violet-500/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-500/30 transition-all shrink-0">
                <FiMail size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-0.5">Email</div>
                <div className="text-sm text-white font-medium break-all">kaifachukatlu@gmail.com</div>
              </div>
            </a>

            <a
              href="tel:9441205786"
              className="interactive flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/30 transition-all shrink-0">
                <FiPhone size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-0.5">Phone</div>
                <div className="text-sm text-white font-medium">+91 9441205786</div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/achukatulu-kaif-33146b35b"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 group-hover:bg-fuchsia-500/30 transition-all shrink-0">
                <FiLinkedin size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-0.5">LinkedIn</div>
                <div className="text-sm text-white font-medium">Achukatulu Kaif</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 bg-white/5 border border-white/5 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <FiMapPin size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-0.5">Location</div>
                <div className="text-sm text-white font-medium">Adoni, Kurnool, AP</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 bg-white/5 border border-white/5 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <FaGraduationCap size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-0.5">University</div>
                <div className="text-sm text-white font-medium">Vel Tech R&D · 2027</div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden"
            >
              {/* Glass glint */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/5 to-transparent pointer-events-none rounded-3xl" />

              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Send a Message</h3>

              <div className="space-y-4 relative z-10">
                {/* Name */}
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                  <input
                    type="text"
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className={inputClass + ' pl-11'}
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                  <input
                    type="email"
                    name="reply_to"
                    value={form.reply_to}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className={inputClass + ' pl-11'}
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <FiMessageSquare className="absolute left-4 top-5 text-white/30" size={16} />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    className={inputClass + ' pl-11 resize-none'}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="interactive w-full flex items-center justify-center gap-3 py-4 px-8 rounded-2xl font-bold text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 shadow-[0_0_30px_rgba(124,58,237,0.35)] hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] hover:-translate-y-0.5"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <FiSend size={18} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Feedback */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-sm"
                    >
                      <FiCheckCircle size={18} />
                      Message sent! I'll get back to you soon.
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3 p-4 rounded-2xl bg-red-500/15 border border-red-500/30 text-red-400 text-sm"
                    >
                      <FiAlertCircle size={18} />
                      Failed to send. Please email me directly at kaifachukatlu@gmail.com
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
