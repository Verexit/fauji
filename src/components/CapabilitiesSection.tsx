import { motion } from 'framer-motion';
import { FadingVideo } from './FadingVideo';
import { ImageIcon, LightbulbIcon, MovieIcon } from './Icons';

interface CapabilitiesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
  onStartProject?: () => void;
}

interface CapabilityItem {
  id: string;
  title: string;
  icon: typeof ImageIcon;
  tags: string[];
  body: string;
}

const capabilitiesData: CapabilityItem[] = [
  {
    id: 'design',
    title: 'Design',
    icon: ImageIcon,
    tags: ['Brand Systems', 'Art Direction', 'Visual Identity', 'Motion'],
    body: 'We shape identities and interfaces that feel unmistakably yours -- typographic systems, component libraries, and art-directed pages that scale without losing soul.',
  },
  {
    id: 'engineering',
    title: 'Engineering',
    icon: MovieIcon,
    tags: ['React', 'Next.js', 'Headless CMS', 'Edge-Ready'],
    body: 'Production-grade front-ends built on modern stacks. Performant, accessible, and instrumented -- with code your team will enjoy extending long after launch.',
  },
  {
    id: 'growth',
    title: 'Growth',
    icon: LightbulbIcon,
    tags: ['SEO', 'Analytics', 'A/B Testing', 'Retention'],
    body: 'Launch is the starting line. We partner with your team on conversion, content, and iteration loops that turn a beautiful site into a compounding asset.',
  },
];

export function CapabilitiesSection({
  onSelectService,
  onStartProject,
}: CapabilitiesSectionProps) {
  return (
    <section
      id="capabilities"
      className="relative min-h-screen overflow-hidden bg-black flex flex-col justify-between"
    >
      {/* Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_093722_ccfc7ebf-182f-419f-8a62-2dc02db7dd9d.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
      />

      {/* Atmospheric Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/70 z-[1] pointer-events-none" />

      {/* Section Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen justify-between max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-body text-white/80 mb-6 tracking-wide"
          >
            // Capabilities
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, filter: 'blur(8px)', y: 30 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-heading italic text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px] text-white whitespace-pre-line"
          >
            {'Studio craft,\nend to end'}
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilitiesData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: 'easeOut',
                }}
                onClick={() => onSelectService?.(item.title)}
                className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col cursor-pointer transition-all duration-300 hover:scale-[1.015] hover:bg-white/[0.03] group"
              >
                {/* Top Row: nested icon square + right-aligned tags */}
                <div className="flex items-start justify-between gap-3">
                  {/* Icon in nested liquid-glass h-11 w-11 rounded-[0.75rem] square */}
                  <div className="liquid-glass h-11 w-11 rounded-[0.75rem] flex items-center justify-center shrink-0 text-white/90 group-hover:text-white transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 min-h-[70px]" />

                {/* Bottom: title + body */}
                <div className="mt-auto">
                  <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none mb-3 text-white group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quiet Footer Strip */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-white/60">
          <div>
            © 2026 Atelier Digital Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Back to Top ↑
            </button>
            <button
              type="button"
              onClick={onStartProject}
              className="text-white/90 hover:text-white transition-colors cursor-pointer"
            >
              Inquire Project →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
