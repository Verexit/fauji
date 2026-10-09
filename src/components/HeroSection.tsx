import { motion } from 'framer-motion';
import { BlurText } from './BlurText';
import { FadingVideo } from './FadingVideo';
import { ArrowUpRight, ClockIcon, GlobeIcon, PlayIcon } from './Icons';

interface HeroSectionProps {
  onStartProject: () => void;
  onWatchShowreel: () => void;
}

const sharedMotionProps = (delay: number) => ({
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: 'easeOut' as const },
});

export function HeroSection({ onStartProject, onWatchShowreel }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden bg-black flex flex-col"
    >
      {/* Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0 pointer-events-none select-none"
        style={{ width: '120%', height: '120%' }}
      />

      {/* Atmospheric Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 z-[1] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col h-full max-w-7xl mx-auto w-full">
        {/* Main centered content */}
        <div className="flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center">
          {/* Badge */}
          <motion.div
            {...sharedMotionProps(0.4)}
            className="liquid-glass rounded-full px-3 py-1 flex items-center gap-2.5"
          >
            <span className="bg-white text-black font-body text-[11px] font-semibold px-2 py-0.5 rounded-full">
              New
            </span>
            <span className="text-xs md:text-sm text-white/90 font-body">
              Booking Q3 2026 engagements -- limited capacity
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mt-6 max-w-3xl">
            <BlurText
              text="Crafted Digital Experiences Built to Outlast Trends"
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.85] tracking-[-4px]"
            />
          </div>

          {/* Subtext */}
          <motion.p
            {...sharedMotionProps(0.8)}
            className="text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight mt-4 text-balance"
          >
            We are a small studio of designers and engineers shaping
            brand-defining websites for ambitious companies. Precise
            typography, cinematic motion, and code you can be proud of.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...sharedMotionProps(1.1)}
            className="flex gap-6 items-center mt-6"
          >
            <button
              type="button"
              onClick={onStartProject}
              className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-sm font-medium text-white hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              type="button"
              onClick={onWatchShowreel}
              className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors cursor-pointer"
            >
              <PlayIcon className="w-3.5 h-3.5 fill-current" />
              <span>Watch Showreel</span>
            </button>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            {...sharedMotionProps(1.3)}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {/* Card 1 */}
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left flex flex-col justify-between">
              <div className="flex items-center text-white/80">
                <ClockIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4 text-white">
                  6 Weeks
                </div>
                <div className="text-xs text-white/80 font-body mt-2 leading-tight">
                  Average End-to-End Launch Time
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left flex flex-col justify-between">
              <div className="flex items-center text-white/80">
                <GlobeIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4 text-white">
                  140+
                </div>
                <div className="text-xs text-white/80 font-body mt-2 leading-tight">
                  Brands Shipped Across Four Continents
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom trust bar */}
        <motion.div
          {...sharedMotionProps(1.4)}
          className="flex flex-col items-center gap-4 pb-8 px-4"
        >
          <div className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/80 font-body text-center">
            Trusted by founders, operators, and creative directors worldwide
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {['Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno'].map((logo) => (
              <span
                key={logo}
                className="font-heading italic text-2xl md:text-3xl tracking-tight text-white/70 hover:text-white transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
