/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import {
  ShowreelModal,
  ProjectModal,
  StudioDrawer,
  MobileNavDrawer,
} from './components/Modals';
import { ArrowUpRight } from './components/Icons';

export default function App() {
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showShowreelModal, setShowShowreelModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Design');
  const [activeDrawer, setActiveDrawer] = useState<
    'work' | 'studio' | 'journal' | null
  >(null);

  const handleStartProject = (service?: string) => {
    if (service) setSelectedService(service);
    setShowProjectModal(true);
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative font-body selection:bg-white/20 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onStartProject={() => handleStartProject()}
        onOpenWork={() => setActiveDrawer('work')}
        onOpenStudio={() => setActiveDrawer('studio')}
        onOpenServices={() => handleScrollToSection('capabilities')}
        onOpenJournal={() => setActiveDrawer('journal')}
        onOpenContact={() => handleStartProject()}
        onMobileMenuToggle={() => setMobileMenuOpen(true)}
      />

      {/* Main Page: Exactly Two Full-Screen Sections */}
      <main className="w-full">
        {/* Section 1: Hero */}
        <HeroSection
          onStartProject={() => handleStartProject()}
          onWatchShowreel={() => setShowShowreelModal(true)}
        />

        {/* Section 2: Capabilities */}
        <CapabilitiesSection
          onSelectService={(service) => handleStartProject(service)}
          onStartProject={() => handleStartProject()}
        />
      </main>

      {/* Modals & Interactive Drawers */}
      <ShowreelModal
        isOpen={showShowreelModal}
        onClose={() => setShowShowreelModal(false)}
      />

      <ProjectModal
        isOpen={showProjectModal}
        onClose={() => setShowProjectModal(false)}
        defaultService={selectedService}
      />

      <MobileNavDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onSelect={(item) => {
          if (item === 'Work') setActiveDrawer('work');
          else if (item === 'Studio') setActiveDrawer('studio');
          else if (item === 'Services') handleScrollToSection('capabilities');
          else if (item === 'Journal') setActiveDrawer('journal');
          else if (item === 'Contact' || item === 'Start a Project')
            handleStartProject();
        }}
      />

      {/* Work Portfolio Drawer */}
      <StudioDrawer
        isOpen={activeDrawer === 'work'}
        onClose={() => setActiveDrawer(null)}
        title="Selected Client Engagements"
        subtitle="Archival Index"
      >
        <div className="space-y-6">
          <p className="text-sm text-white/80 font-light leading-relaxed">
            A small sampling of digital experiences shipped across robotics,
            consumer hardware, autonomous compute, and luxury ventures.
          </p>

          <div className="space-y-4">
            {[
              {
                brand: 'Aeon',
                sector: 'Autonomous Compute',
                deliverables: 'Brand System · 3D WebGL · Next.js',
                result: '+340% Inbound Pipeline',
              },
              {
                brand: 'Vela',
                sector: 'Acoustic Hardware',
                deliverables: 'Flagship E-Commerce · Custom Typography',
                result: 'Red Dot Best of 2026',
              },
              {
                brand: 'Apex',
                sector: 'Industrial Robotics',
                deliverables: 'Realtime Telemetry UI · Motion Architecture',
                result: 'Series B Flagship Site',
              },
              {
                brand: 'Orbit',
                sector: 'Deeptech Venture Fund',
                deliverables: 'Editorial Identity · Archival Showcase',
                result: 'Zero-Latency Experience',
              },
              {
                brand: 'Zeno',
                sector: 'Genomics Platform',
                deliverables: 'Interactive Molecular Visuals · Edge Deploy',
                result: 'Industry Benchmark',
              },
            ].map((work) => (
              <div
                key={work.brand}
                className="liquid-glass p-4 rounded-xl space-y-2 hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading italic text-2xl text-white">
                    {work.brand}
                  </span>
                  <span className="text-[11px] liquid-glass rounded-full px-2.5 py-0.5 text-white/90">
                    {work.sector}
                  </span>
                </div>
                <div className="text-xs text-white/70 font-light">
                  {work.deliverables}
                </div>
                <div className="text-xs text-white/90 font-medium pt-1 border-t border-white/5 flex items-center justify-between">
                  <span>{work.result}</span>
                  <span className="text-[11px] text-white/50">2026</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setActiveDrawer(null);
                handleStartProject();
              }}
              className="w-full liquid-glass-strong py-2.5 rounded-full text-xs font-semibold text-white flex items-center justify-center gap-1.5 hover:bg-white/15 transition-all cursor-pointer"
            >
              <span>Commission a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </StudioDrawer>

      {/* Studio Philosophy Drawer */}
      <StudioDrawer
        isOpen={activeDrawer === 'studio'}
        onClose={() => setActiveDrawer(null)}
        title="Studio Craft & Ethos"
        subtitle="About Atelier"
      >
        <div className="space-y-5 text-sm text-white/80 font-light leading-relaxed">
          <p>
            Atelier is an independent digital practice operating between design
            direction and systems engineering. We believe modern interfaces have
            suffered from hyper-standardized templates and transient design
            fads.
          </p>
          <div className="liquid-glass p-4 rounded-xl space-y-2 my-4">
            <div className="text-xs uppercase tracking-widest text-white/60 font-medium">
              The Three Tenets
            </div>
            <ul className="space-y-2 text-xs text-white/90 list-disc list-inside">
              <li>
                <strong className="text-white font-medium">
                  Typographic Rigor:
                </strong>{' '}
                Proportion and negative space outlast trendy novelty.
              </li>
              <li>
                <strong className="text-white font-medium">
                  Cinematic Atmosphere:
                </strong>{' '}
                Video, glass morphism, and measured motion establish deep brand
                presence.
              </li>
              <li>
                <strong className="text-white font-medium">
                  Production Engineering:
                </strong>{' '}
                Zero layout jank, sub-100ms feedback, and clean, resilient code.
              </li>
            </ul>
          </div>
          <p>
            We take on at most 3 client partnerships per quarter to ensure senior
            attention from the first typographic sketch to the final edge deploy.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setActiveDrawer(null);
                handleStartProject();
              }}
              className="w-full bg-white text-black py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-white/90 transition-all cursor-pointer"
            >
              <span>Work With Our Studio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </StudioDrawer>

      {/* Journal Dispatch Drawer */}
      <StudioDrawer
        isOpen={activeDrawer === 'journal'}
        onClose={() => setActiveDrawer(null)}
        title="Dispatches & Research"
        subtitle="Journal"
      >
        <div className="space-y-5">
          <p className="text-sm text-white/80 font-light leading-relaxed">
            Field notes on digital craft, interface physics, and the permanence
            of visual systems.
          </p>

          <div className="space-y-4">
            {[
              {
                title: 'The Texture of Liquid Glass Interfaces',
                date: 'June 2026',
                read: '5 min read',
                excerpt:
                  'How subtle optical depth, luminance blend modes, and CSS mask gradient strokes create tactile digital materials.',
              },
              {
                title: 'Typography as Structural Architecture',
                date: 'May 2026',
                read: '4 min read',
                excerpt:
                  'Pairing characterful display serifs with utilitarian sans-serif bodies without falling into aesthetic clichés.',
              },
              {
                title: 'Engineering for Latency Zero in Web Animation',
                date: 'April 2026',
                read: '7 min read',
                excerpt:
                  'Compositor-only transitions, requestAnimationFrame video fades, and fluid perceptual performance.',
              },
            ].map((article) => (
              <div
                key={article.title}
                className="liquid-glass p-4 rounded-xl space-y-2 hover:bg-white/[0.04] transition-colors cursor-pointer"
              >
                <div className="text-[11px] text-white/60 flex items-center gap-2">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.read}</span>
                </div>
                <h4 className="font-heading italic text-xl text-white">
                  {article.title}
                </h4>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </StudioDrawer>
    </div>
  );
}
