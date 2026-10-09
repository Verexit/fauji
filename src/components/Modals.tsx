import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CloseIcon, PlayIcon } from './Icons';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShowreelModal({ isOpen, onClose }: ShowreelModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, filter: 'blur(8px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            exit={{ scale: 0.95, opacity: 0, filter: 'blur(8px)' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="liquid-glass-strong w-full max-w-4xl rounded-2xl overflow-hidden flex flex-col shadow-2xl relative"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="font-heading italic text-xl text-white">
                  Studio Showreel 2026
                </span>
                <span className="liquid-glass rounded-full px-2.5 py-0.5 text-[11px] text-white/80 font-body">
                  Volume IV
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="liquid-glass h-8 w-8 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video bg-black flex items-center justify-center group">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
                autoPlay
                playsInline
                loop
                muted={isMuted}
                className="w-full h-full object-cover"
                ref={(el) => {
                  if (el) {
                    if (isPlaying) el.play().catch(() => {});
                    else el.pause();
                  }
                }}
              />

              {/* In-video Overlay Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="liquid-glass-strong px-3 py-1.5 rounded-full text-xs font-body flex items-center gap-1.5 text-white cursor-pointer hover:bg-white/20 transition-colors"
                  >
                    {isPlaying ? 'Pause' : 'Play'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsMuted(!isMuted)}
                    className="liquid-glass-strong px-3 py-1.5 rounded-full text-xs font-body text-white cursor-pointer hover:bg-white/20 transition-colors"
                  >
                    {isMuted ? 'Unmute Audio' : 'Mute'}
                  </button>
                </div>
                <div className="liquid-glass px-3 py-1 rounded-full text-[11px] font-body text-white/80">
                  4K 60fps · Sound Design: Atelier Labs
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function ProjectModal({
  isOpen,
  onClose,
  defaultService,
}: ProjectModalProps) {
  const [services, setServices] = useState<string[]>(
    defaultService ? [defaultService] : ['Design']
  );
  const [budget, setBudget] = useState('$50k - $100k');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleService = (s: string) => {
    if (services.includes(s)) {
      if (services.length > 1) {
        setServices(services.filter((item) => item !== s));
      }
    } else {
      setServices([...services, s]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setDetails('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, filter: 'blur(8px)', y: 20 }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)', y: 0 }}
            exit={{ scale: 0.95, opacity: 0, filter: 'blur(8px)', y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="liquid-glass-strong w-full max-w-xl rounded-[1.5rem] p-6 md:p-8 shadow-2xl relative my-auto border border-white/10"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-xs uppercase font-body text-white/70 tracking-widest">
                  Inquire Engagement
                </span>
                <h3 className="font-heading italic text-3xl md:text-4xl text-white mt-1 leading-tight">
                  Start a Project
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="liquid-glass h-8 w-8 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            {isSubmitted ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="liquid-glass h-16 w-16 rounded-full flex items-center justify-center mb-4 text-emerald-400">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="font-heading italic text-2xl text-white mb-2">
                  Inquiry Received
                </h4>
                <p className="text-sm font-body text-white/80 max-w-sm leading-relaxed mb-6">
                  Thank you, {name || 'there'}. Our studio partners review every
                  submission carefully and will respond with our Q3 availability
                  within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="liquid-glass-strong px-5 py-2.5 rounded-full text-xs font-semibold text-white hover:bg-white/15 transition-colors cursor-pointer"
                >
                  Return to Studio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Discipline select */}
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-2">
                    Scope of Engagement
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['Design', 'Engineering', 'Growth', 'Full-Service'].map(
                      (service) => {
                        const active = services.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-body transition-all cursor-pointer ${
                              active
                                ? 'bg-white text-black font-medium'
                                : 'liquid-glass text-white/80 hover:text-white'
                            }`}
                          >
                            {service}
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>

                {/* Budget selection */}
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-2">
                    Target Investment Range
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['$25k - $50k', '$50k - $100k', '$100k+'].map((tier) => (
                      <button
                        type="button"
                        key={tier}
                        onClick={() => setBudget(tier)}
                        className={`py-2 px-2 text-center rounded-xl text-xs font-body transition-all cursor-pointer ${
                          budget === tier
                            ? 'bg-white text-black font-semibold'
                            : 'liquid-glass text-white/80 hover:text-white'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Elena Vance"
                      className="w-full liquid-glass rounded-xl px-3.5 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="elena@company.com"
                      className="w-full liquid-glass rounded-xl px-3.5 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-white/50"
                    />
                  </div>
                </div>

                {/* Message notes */}
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1.5">
                    Project Vision & Objectives
                  </label>
                  <textarea
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Briefly tell us about your brand, what you are building, and timeline goals..."
                    className="w-full liquid-glass rounded-xl px-3.5 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-white/50 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-white text-black font-body text-sm font-semibold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-white/90 transition-all cursor-pointer"
                  >
                    <span>Submit Inquiry</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-white/50 mt-2 font-body">
                    We take on a maximum of 3 concurrent client engagements per
                    quarter.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function StudioDrawer({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
}: DrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="liquid-glass-strong w-full max-w-lg h-full overflow-y-auto p-6 md:p-8 flex flex-col justify-between border-l border-white/10"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <div className="text-xs uppercase font-body text-white/60 tracking-widest">
                    {subtitle}
                  </div>
                  <h3 className="font-heading italic text-3xl text-white mt-1">
                    {title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="liquid-glass h-8 w-8 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close drawer"
                >
                  <CloseIcon className="w-4 h-4" />
                </button>
              </div>

              <div className="py-6">{children}</div>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs font-body text-white/60 flex items-center justify-between">
              <span>Atelier Studio © 2026</span>
              <button
                type="button"
                onClick={onClose}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (item: string) => void;
}

export function MobileNavDrawer({
  isOpen,
  onClose,
  onSelect,
}: MobileNavDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl p-6"
          onClick={onClose}
        >
          <div className="flex items-center justify-between mb-12">
            <span className="font-heading italic text-3xl text-white">
              atelier
            </span>
            <button
              type="button"
              onClick={onClose}
              className="liquid-glass h-10 w-10 rounded-full flex items-center justify-center text-white cursor-pointer"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-6 text-left my-auto">
            {['Work', 'Studio', 'Services', 'Journal', 'Contact'].map(
              (item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => {
                    onSelect(item);
                    onClose();
                  }}
                  className="font-heading italic text-4xl text-white/90 hover:text-white text-left transition-colors cursor-pointer"
                >
                  {item}
                </button>
              )
            )}
          </div>

          <div className="mt-auto pt-8 border-t border-white/10">
            <button
              type="button"
              onClick={() => {
                onSelect('Start a Project');
                onClose();
              }}
              className="w-full bg-white text-black font-body text-sm font-semibold py-3.5 rounded-full flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
