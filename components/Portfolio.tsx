'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';

// Get basePath for GitHub Pages - use environment variable or default to /portfolio for production
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (typeof window !== 'undefined' && window.location.pathname.includes('/portfolio') ? '/portfolio' : '');

// Diagram Components
const MicroservicesDiagram = () => (
  <svg className="w-full h-full" viewBox="0 0 120 80">
    <rect x="10" y="10" width="30" height="25" fill="#3B82F6" opacity="0.6" rx="2" />
    <rect x="45" y="10" width="30" height="25" fill="#3B82F6" opacity="0.6" rx="2" />
    <rect x="80" y="10" width="30" height="25" fill="#3B82F6" opacity="0.6" rx="2" />
    <rect x="27" y="45" width="66" height="25" fill="#8B5CF6" opacity="0.6" rx="2" />
    <line x1="25" y1="35" x2="60" y2="45" stroke="#64748B" strokeWidth="1.5" />
    <line x1="60" y1="35" x2="60" y2="45" stroke="#64748B" strokeWidth="1.5" />
    <line x1="95" y1="35" x2="60" y2="45" stroke="#64748B" strokeWidth="1.5" />
  </svg>
);

const WorkflowDiagram = () => (
  <svg className="w-full h-full" viewBox="0 0 120 80">
    <circle cx="30" cy="40" r="12" fill="#10B981" opacity="0.6" />
    <rect x="50" y="28" width="20" height="24" fill="#3B82F6" opacity="0.6" rx="2" />
    <circle cx="90" cy="40" r="12" fill="#8B5CF6" opacity="0.6" />
    <line x1="42" y1="40" x2="50" y2="40" stroke="#64748B" strokeWidth="2" />
    <line x1="70" y1="40" x2="78" y2="40" stroke="#64748B" strokeWidth="2" />
  </svg>
);

const EventDiagram = () => (
  <svg className="w-full h-full" viewBox="0 0 120 80">
    <rect x="45" y="10" width="30" height="20" fill="#3B82F6" opacity="0.6" rx="2" />
    <circle cx="30" cy="50" r="10" fill="#10B981" opacity="0.6" />
    <circle cx="60" cy="50" r="10" fill="#10B981" opacity="0.6" />
    <circle cx="90" cy="50" r="10" fill="#10B981" opacity="0.6" />
    <line x1="60" y1="30" x2="30" y2="40" stroke="#64748B" strokeWidth="1.5" />
    <line x1="60" y1="30" x2="60" y2="40" stroke="#64748B" strokeWidth="1.5" />
    <line x1="60" y1="30" x2="90" y2="40" stroke="#64748B" strokeWidth="1.5" />
  </svg>
);

const MassiveArchitectureDiagram = () => (
  <svg className="w-full h-full" viewBox="0 0 1400 400" preserveAspectRatio="xMidYMid meet">
    {/* Stage 1: Constraints */}
    <g>
      <text x="150" y="40" fill="#60A5FA" fontSize="20" fontWeight="600">1. Constraints</text>
      <rect x="50" y="60" width="280" height="280" fill="#1E3A8A" opacity="0.3" stroke="#3B82F6" strokeWidth="2" rx="12" />
      <rect x="70" y="100" width="240" height="60" fill="#3B82F6" opacity="0.4" stroke="#60A5FA" strokeWidth="1.5" rx="8" />
      <text x="190" y="135" textAnchor="middle" fill="#93C5FD" fontSize="16" fontWeight="500">Business Goals</text>
      <rect x="70" y="170" width="240" height="60" fill="#3B82F6" opacity="0.4" stroke="#60A5FA" strokeWidth="1.5" rx="8" />
      <text x="190" y="205" textAnchor="middle" fill="#93C5FD" fontSize="16" fontWeight="500">Technical Reality</text>
      <rect x="70" y="240" width="240" height="60" fill="#3B82F6" opacity="0.4" stroke="#60A5FA" strokeWidth="1.5" rx="8" />
      <text x="190" y="275" textAnchor="middle" fill="#93C5FD" fontSize="16" fontWeight="500">Human Factors</text>
    </g>

    {/* Arrow 1 */}
    <path d="M 340 200 L 400 200" stroke="#94A3B8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#94A3B8" />
      </marker>
    </defs>

    {/* Stage 2: Questions */}
    <g>
      <text x="500" y="40" fill="#A78BFA" fontSize="20" fontWeight="600">2. Questions</text>
      <rect x="450" y="60" width="280" height="280" fill="#6B21A8" opacity="0.3" stroke="#8B5CF6" strokeWidth="2" rx="12" />
      <ellipse cx="590" cy="130" rx="100" ry="35" fill="#8B5CF6" opacity="0.4" stroke="#A78BFA" strokeWidth="1.5" />
      <text x="590" y="135" textAnchor="middle" fill="#C4B5FD" fontSize="16" fontWeight="500">What's critical?</text>
      <ellipse cx="590" cy="200" rx="100" ry="35" fill="#8B5CF6" opacity="0.4" stroke="#A78BFA" strokeWidth="1.5" />
      <text x="590" y="205" textAnchor="middle" fill="#C4B5FD" fontSize="16" fontWeight="500">What can wait?</text>
      <ellipse cx="590" cy="270" rx="100" ry="35" fill="#8B5CF6" opacity="0.4" stroke="#A78BFA" strokeWidth="1.5" />
      <text x="590" y="275" textAnchor="middle" fill="#C4B5FD" fontSize="16" fontWeight="500">Who decides?</text>
    </g>

    {/* Arrow 2 */}
    <path d="M 740 200 L 800 200" stroke="#94A3B8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />

    {/* Stage 3: Implementation */}
    <g>
      <text x="900" y="40" fill="#34D399" fontSize="20" fontWeight="600">3. Implementation</text>
      <rect x="850" y="60" width="280" height="280" fill="#065F46" opacity="0.3" stroke="#10B981" strokeWidth="2" rx="12" />
      <rect x="870" y="100" width="240" height="60" fill="#10B981" opacity="0.4" stroke="#34D399" strokeWidth="1.5" rx="8" />
      <text x="990" y="135" textAnchor="middle" fill="#6EE7B7" fontSize="16" fontWeight="500">Event Streams</text>
      <rect x="870" y="170" width="240" height="60" fill="#10B981" opacity="0.4" stroke="#34D399" strokeWidth="1.5" rx="8" />
      <text x="990" y="205" textAnchor="middle" fill="#6EE7B7" fontSize="16" fontWeight="500">Control APIs</text>
      <rect x="870" y="240" width="240" height="60" fill="#10B981" opacity="0.4" stroke="#34D399" strokeWidth="1.5" rx="8" />
      <text x="990" y="275" textAnchor="middle" fill="#6EE7B7" fontSize="16" fontWeight="500">User Interfaces</text>
    </g>

    {/* Arrow 3 */}
    <path d="M 1140 200 L 1200 200" stroke="#94A3B8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />

    {/* Stage 4: Live System */}
    <g>
      <text x="1270" y="40" fill="#FCD34D" fontSize="20" fontWeight="600">Live System</text>
      <rect x="1250" y="60" width="280" height="280" fill="#92400E" opacity="0.3" stroke="#F59E0B" strokeWidth="2" rx="12" />
      <rect x="1330" y="140" width="120" height="120" fill="#F59E0B" opacity="0.4" stroke="#FCD34D" strokeWidth="2" rx="12" />
      <circle cx="1390" cy="200" r="50" fill="#F59E0B" opacity="0.6" stroke="#FCD34D" strokeWidth="2" />
    </g>
  </svg>
);

const ArticleLink = ({ title, summary }: { title: string; summary: string }) => (
  <div className="border-l-4 border-blue-500 pl-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer group">
    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
      {title}
    </h3>
    <p className="text-gray-600">{summary}</p>
  </div>
);

const ContactLink = ({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) => (
  <a
    href={href}
    className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-700 hover:text-blue-600"
  >
    {icon}
    <span className="font-medium">{label}</span>
  </a>
);

const SocialLink = ({ icon, href, label }: { icon: React.ReactNode; href: string; label?: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-blue-400 transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

const Portfolio = () => {
  const name = 'Ehsan Mahmood'; // TODO: Replace with your name
  const profession = 'Full Stack Engineer'; // TODO: Replace with your profession
  const [activeSection, setActiveSection] = useState('hero');
  const [showNav, setShowNav] = useState(false);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100);

      const sections = Object.entries(sectionsRef.current);
      for (let [id, element] of sections) {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = sectionsRef.current[id];
    if (element) {
      const navHeight = 64; // Approximate nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-semibold text-gray-900">{name}</div>
          <div className="flex gap-8">
            {['systems', 'architecture', 'ux', 'writing', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors ${activeSection === section ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section - Portfolio Landing */}
      <section
        ref={(el) => { sectionsRef.current['hero'] = el; }}
        className="h-screen flex items-center px-6 md:px-12 lg:px-16 relative overflow-hidden bg-white pt-16"
      >
        <div className="max-w-7xl mx-auto w-full py-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center h-full">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-600 bg-clip-text text-transparent block">Building</span>
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-600 bg-clip-text text-transparent block">Real-World Products & Systems</span>
                </h1>
              </div>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl font-light">
                I build products and systems that operate in the real world — where software meets logistics, commerce, automation, and physical constraints.
              </p>
            </div>

            {/* Right Profile Picture */}
            <div className="lg:col-span-6 relative flex flex-col justify-center lg:justify-center h-full">
              <div className="relative w-full max-w-md lg:max-w-lg flex flex-col items-center">
                <div className="relative w-full max-h-[75vh] rounded-2xl overflow-hidden">
                  <img
                    src={`${basePath}/pro-pic-3.png`}
                    alt={name}
                    className="w-full h-full object-contain"
                    style={{
                      filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.1))',
                    }}
                  />
                </div>
                {/* Name and Profession - below image */}
                <div className="mt-4 text-center">
                  <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-1">{name}</h2>
                  <p className="text-lg lg:text-xl text-gray-600">{profession}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Deep Dive - ANCHOR MOMENT - Edge to edge, massive */}
      <section
        ref={(el) => { sectionsRef.current['architecture'] = el; }}
        className="h-screen bg-slate-950 text-white py-12 px-6 relative overflow-hidden flex flex-col"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 flex-1 flex flex-col max-w-[1920px] mx-auto w-full">
          <div className="mb-6">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">How Systems Take Shape</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl">
              I start with business intent and operational reality, then let architecture emerge through constraints and trade-offs.
            </p>
          </div>
          
          <div className="flex-1 w-full mb-6 flex items-center min-h-0" style={{ minHeight: 0 }}>
            <div className="w-full h-full" style={{ maxHeight: 'calc(100vh - 420px)' }}>
              <MassiveArchitectureDiagram />
            </div>
          </div>
          
          <div className="w-full flex-shrink-0">
            <p className="text-base md:text-lg text-gray-300 text-center leading-relaxed mb-6 max-w-3xl mx-auto">
              Architecture is an outcome, not a template. Systems evolve through decisions and trade-offs, not by following patterns.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 pt-4 border-t border-gray-800 max-w-5xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-200">Explicit Workflows</h3>
                <p className="text-sm md:text-base text-gray-400">
                  Choosing explicit workflows over implicit behaviour
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-200">Isolated Rules</h3>
                <p className="text-sm md:text-base text-gray-400">
                  Isolating business rules from execution logic
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-200">Visible Failures</h3>
                <p className="text-sm md:text-base text-gray-400">
                  Designing systems that fail visibly rather than silently
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern Break - Almost Empty, Negative Space */}
      <section className="h-screen flex items-center justify-center px-6 bg-white">
        <div className="text-center max-w-4xl">
          <p className="text-4xl md:text-5xl font-light leading-relaxed text-gray-900 italic">
            "My work sits across the full lifecycle: understanding a business problem, designing the system that solves it, and shipping something that people actually use under real conditions."
          </p>
        </div>
      </section>

      {/* Systems Section - Inline, No Cards, Asymmetric */}
      <section
        ref={(el) => { sectionsRef.current['systems'] = el; }}
        className="py-32 px-6 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-24">Systems & Products I've Built and Worked On</h2>
          
          <div className="space-y-20">
            {/* System 1 - QR Code Menu & Ordering Platform */}
            <div className="grid md:grid-cols-5 gap-8 items-start bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="md:col-span-3 space-y-4">
                <h3 className="text-2xl font-bold">
                  <a 
                    href="https://ehsan-mahmood.github.io/qr-menu/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    QR Code Menu & Ordering Platform (SMB SaaS)
                  </a>
                </h3>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Problem</p>
                  <p className="text-lg text-gray-600">
                    Small restaurants needed a fast way to publish menus and accept orders without complex POS systems.
                  </p>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Constraint</p>
                  <p className="text-lg text-gray-600">
                    Non-technical owners, mobile-first usage, low tolerance for setup friction.
                  </p>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Outcome</p>
                  <p className="text-lg text-gray-600">
                    Designed a QR-based menu and ordering system focused on clarity, fast onboarding, and easy content updates.
                  </p>
                  <div className="pt-3 space-y-2">
                    <p className="text-sm font-semibold text-gray-700">What I focused on:</p>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                      <li>Reducing setup to minutes, not hours</li>
                      <li>Designing menus that work in noisy, real environments</li>
                      <li>Balancing flexibility with simplicity for non-technical users</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-500 italic pt-2">
                    This project pushed me deeper into product UX, merchant workflows, and customer adoption — not just implementation.
                  </p>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="relative" style={{ minHeight: '720px' }}>
                  {/* Dashboard - Large, Top Right */}
                  <div className="absolute -top-4 right-0 z-10" style={{ width: '105%' }}>
                    <div className="relative rounded-lg overflow-hidden border border-gray-200 bg-gray-50 shadow-2xl scale-105 origin-top-right" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)' }}>
                      <div className="absolute top-3 left-3 z-20">
                        <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide bg-white/90 backdrop-blur-sm px-2 py-1 rounded">
                          Merchant Dashboard
                        </span>
                      </div>
                      <Image
                        src={`${basePath}/dashboard_qr.png`}
                        alt="QR Menu - Merchant Dashboard"
                        width={1200}
                        height={900}
                        className="w-full h-auto object-contain"
                        style={{ maxHeight: '520px' }}
                      />
                    </div>
                  </div>
                  {/* QR Code - Larger, Left of Mobile, top aligned with middle of phone screen, bottom aligned with phone frame */}
                  <div className="absolute bottom-24 right-[200px] z-30" style={{ width: '220px', transform: 'translateY(-120px)' }}>
                    <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-blue-500">
                      <div className="text-center mb-3 bg-blue-500 rounded-lg py-2 px-3">
                        <p className="text-sm font-bold text-white">Scan to Order</p>
                      </div>
                      <div className="bg-white p-2 rounded-lg">
                        <Image
                          src={`${basePath}/menu_qr_scan.png`}
                          alt="QR Code - Scan to Order"
                          width={200}
                          height={200}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Mobile Customer Menu - Medium, Bottom Right, slight overlap with dashboard */}
                  <div className="absolute bottom-24 right-0 z-20">
                    <div className="relative bg-black rounded-[2rem] p-1.5 shadow-2xl w-[180px]">
                      <div className="bg-white rounded-[1.5rem] overflow-hidden">
                        {/* Notch */}
                        <div className="bg-black h-5 w-20 mx-auto rounded-b-2xl" />
                        {/* Screen Content */}
                        <div className="relative">
                          <Image
                            src={`${basePath}/qr-menu-customer_menu.png`}
                            alt="QR Menu - Customer Mobile View"
                            width={300}
                            height={600}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* System 2 - Scheduling & Booking System */}
            <div className="grid md:grid-cols-5 gap-8 items-start bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="md:col-span-3 md:col-start-1 space-y-4">
                <h3 className="text-2xl font-bold">
                  <a 
                    href="https://ehsan-mahmood.github.io/scheduler_app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Scheduling & Booking System for Service Businesses
                  </a>
                </h3>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Problem</p>
                  <p className="text-lg text-gray-600">
                    Manual scheduling caused double bookings, missed lessons, and payment confusion.
                  </p>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Constraint</p>
                  <p className="text-lg text-gray-600">
                    SMS-heavy communication, instructor availability rules, tight margins.
                  </p>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Outcome</p>
                  <p className="text-lg text-gray-600">
                    Built a scheduler that aligned bookings, notifications, and payments into a single operational flow.
                  </p>
                  <div className="pt-3 space-y-2">
                    <p className="text-sm font-semibold text-gray-700">Key product considerations:</p>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                      <li>Designing for operational edge cases, not happy paths</li>
                      <li>Understanding cost drivers (SMS, hosting, support)</li>
                      <li>Pricing the product based on unit economics, not features</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-500 italic pt-2">
                    This project sharpened my thinking around sustainable SaaS pricing and operational cost control.
                  </p>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="relative space-y-4">
                  {/* Booking Page - Bottom Layer */}
                  <div className="relative z-10 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 shadow-sm">
                    <div className="absolute top-3 left-3 z-20">
                      <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide bg-white/90 backdrop-blur-sm px-2 py-1 rounded">Booking Page</span>
                    </div>
                    <Image
                      src={`${basePath}/shchedueler-1.png`}
                      alt="Scheduler App - Booking Interface"
                      width={500}
                      height={375}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  {/* Admin Dashboard - Slight Corner Overlay */}
                  <div className="relative -mt-6 ml-auto w-[92%] z-20 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 shadow-sm">
                    <div className="absolute top-3 left-3 z-20">
                      <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide bg-white/90 backdrop-blur-sm px-2 py-1 rounded">Admin Dashboard</span>
                    </div>
                    <Image
                      src={`${basePath}/shchedueler-2.png`}
                      alt="Scheduler App - Dashboard"
                      width={500}
                      height={375}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* System 3 - Operational Software for Physical Commerce */}
            <div className="grid md:grid-cols-5 gap-8 items-start bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="md:col-span-2">
                <div className="h-48 flex items-center justify-center">
                  <MicroservicesDiagram />
                </div>
              </div>
              <div className="md:col-span-3 space-y-4">
                <h3 className="text-2xl font-bold">Operational Software for Physical Commerce</h3>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Problem</p>
                  <p className="text-lg text-gray-600">
                    Digital systems often break down when they meet physical operations — inventory, packing, scanning, and human workflows.
                  </p>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Constraint</p>
                  <p className="text-lg text-gray-600">
                    Real-time decisions, imperfect data, and users working under pressure.
                  </p>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Outcome</p>
                  <p className="text-lg text-gray-600">
                    Designed systems that align software workflows with physical reality, reducing friction between digital intent and operational execution.
                  </p>
                </div>
              </div>
            </div>

            {/* System 4 - Warehouse & Fulfilment Systems */}
            <div className="grid md:grid-cols-5 gap-8 items-start bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="md:col-span-3 md:col-start-1 space-y-4">
                <h3 className="text-2xl font-bold">Warehouse & Fulfilment Systems</h3>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Problem</p>
                  <p className="text-lg text-gray-600">
                    Packing and fulfilment logic became hard to change as business rules evolved.
                  </p>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Constraint</p>
                  <p className="text-lg text-gray-600">
                    Live operations, shared workflows, and zero tolerance for downtime.
                  </p>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Outcome</p>
                  <p className="text-lg text-gray-600">
                    Refactored tightly coupled logic into clearer, independently evolving systems that improved reliability and operational confidence.
                  </p>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="h-48 flex items-center justify-center">
                  <WorkflowDiagram />
                </div>
              </div>
            </div>

            {/* System 5 - E-commerce Adjacent Workflow Automation */}
            <div className="grid md:grid-cols-5 gap-8 items-start bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="md:col-span-2">
                <div className="h-48 flex items-center justify-center">
                  <EventDiagram />
                </div>
              </div>
              <div className="md:col-span-3 space-y-4">
                <h3 className="text-2xl font-bold">E-commerce Adjacent Workflow Automation</h3>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Problem</p>
                  <p className="text-lg text-gray-600">
                    Business teams needed faster iteration on fulfilment and order-handling rules without destabilising operations.
                  </p>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Constraint</p>
                  <p className="text-lg text-gray-600">
                    Legacy interfaces, stateful workflows, and integration-heavy environments.
                  </p>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Outcome</p>
                  <p className="text-lg text-gray-600">
                    Built abstractions that allowed rules to change without rewriting core flows, supporting faster experimentation at the business level.
                  </p>
                </div>
              </div>
            </div>

            {/* System 6 - Robotics & Automation Exploration */}
            <div className="grid md:grid-cols-5 gap-8 items-start bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="md:col-span-3 md:col-start-1 space-y-4">
                <h3 className="text-2xl font-bold">Robotics & Automation Exploration</h3>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Problem</p>
                  <p className="text-lg text-gray-600">
                    Consumer robotics projects often fail due to poor system integration rather than hardware limitations.
                  </p>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Constraint</p>
                  <p className="text-lg text-gray-600">
                    Limited compute, sensor noise, and real-world unpredictability.
                  </p>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Outcome</p>
                  <p className="text-lg text-gray-600">
                    Prototyped ROS-based systems and simulations to explore navigation, control, and system coordination in constrained environments.
                  </p>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="h-48 flex items-center justify-center">
                  <MicroservicesDiagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UX Section - Full Width, Bold */}
      <section
        ref={(el) => { sectionsRef.current['ux'] = el; }}
        className="py-32 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-24">Designing for Humans in High-Friction Environments</h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="text-sm font-bold text-red-600 mb-4 tracking-wider">BEFORE</div>
                <div className="bg-gray-100 p-8 rounded-lg border-2 border-gray-300">
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                    <div className="grid grid-cols-3 gap-3 mt-6">
                      <div className="h-20 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500 p-3 text-center">Confusing flows</div>
                      <div className="h-20 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500 p-3 text-center">Unclear errors</div>
                      <div className="h-20 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500 p-3 text-center">Slow throughput</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="text-sm font-bold text-green-600 mb-4 tracking-wider">AFTER</div>
                <div className="bg-white p-8 rounded-lg border-2 border-blue-600 shadow-xl">
                  <div className="space-y-4">
                    <div className="h-4 bg-blue-100 rounded w-1/2"></div>
                    <div className="h-12 bg-blue-600 rounded flex items-center px-4 text-white font-semibold text-lg">
                      Clear Intent
                    </div>
                    <div className="bg-green-50 border-2 border-green-300 rounded p-4 text-green-800 font-medium">
                      ✓ Simplified decision points — faster throughput
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <p>
                Many of the users I design for are not "users" in the product sense — they are operators, staff, or customers trying to get something done quickly.
              </p>
              <p className="text-lg text-gray-600">
                In warehouse and e-commerce operations, small UX decisions compound into real cost. A confusing scan flow or unclear error message doesn't just annoy — it slows throughput.
              </p>
              <p className="text-2xl font-medium text-gray-900">
                By simplifying decision points and surfacing intent clearly, I've seen systems become faster not because they were optimised, but because people trusted them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Section - Compressed, Fast Scroll */}
      <section
        ref={(el) => { sectionsRef.current['writing'] = el; }}
        className="py-24 px-6 bg-gray-50"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Thoughts on Products, Systems & Automation</h2>
          
          <div className="space-y-6">
            <ArticleLink
              title="Products Are Systems First"
              summary="Features matter less than how the system behaves under stress."
            />
            <ArticleLink
              title="Physical Reality Always Wins"
              summary="Inventory, robots, and humans don't behave like clean data models — good products respect that."
            />
            <ArticleLink
              title="E-commerce Is an Operations Problem"
              summary="The best customer experiences are built on boring, reliable backend systems."
            />
          </div>
        </div>
      </section>

      {/* Capabilities Section - Grid Cards */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Capabilities & Tools</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product & Systems Design */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Product & Systems Design</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Designing software by working backwards from business intent, operational reality, and human constraints.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Constraint-driven system design</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>End-to-end workflow and process modelling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Trade-off analysis under real operational pressure</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Designing for operational variance, not ideal paths</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Building feedback loops between systems and operators</span>
                </li>
              </ul>
            </div>

            {/* Operational Systems & Workflows */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Operational Systems & Workflows</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Owning complex, stateful systems that must survive real-world failure modes.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Long-running and resumable workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Back-order, exception, and recovery flows</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Human-in-the-loop operational processes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Auditability, traceability, and system transparency</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Debugging and stabilising live production systems</span>
                </li>
              </ul>
            </div>

            {/* Backend & Integration */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Backend & Integration</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Building backend systems that prioritise correctness, clarity, and evolvability.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>API design for stateful and operational systems</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Business rule isolation from execution logic</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Integration with legacy and third-party systems</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>SQL-heavy transactional data modelling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Idempotency, consistency, and failure-aware design</span>
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-gray-200">
                <strong className="text-gray-600">Languages & Tools:</strong> PHP, C++, Python , Node.js 
              </p>
            </div>

            {/* Cloud & Infrastructure */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Cloud & Infrastructure</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Supporting production systems with pragmatic, reliability-first infrastructure.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Production deployments and environment management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Understanding and designing for failure modes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Observability, logging, and operational visibility</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Cost-aware infrastructure decisions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Incremental improvements to existing cloud systems</span>
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-gray-200">
                <strong className="text-gray-600">Platforms:</strong> AWS (EC2, RDS, containerised services)
              </p>
            </div>

            {/* Interfaces, Robotics & Physical Systems */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold text-gray-900">Interfaces, Robotics & Physical Systems</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Designing software that interfaces with humans, machines, and constrained environments.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Workflow-first interface design</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Interfaces for operational and constrained devices</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Warehouse Management ↔ Control System integration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Robot coordination and telemetry fundamentals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span>Hardware–software boundary design</span>
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-gray-200">
                <strong className="text-gray-600">Tools & Frameworks:</strong> Vue.js, ROS fundamentals, Gazebo simulation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Spacious, Calm */}
      <section
        ref={(el) => { sectionsRef.current['contact'] = el; }}
        className="min-h-screen flex items-center px-6 py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      >
        <div className="max-w-4xl mx-auto w-full text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold">What I'm Building Towards</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              I'm interested in products that sit at the intersection of e-commerce and fulfilment, automation and robotics, and marketplaces and real-world logistics.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              I'm particularly drawn to problems where software directly shapes physical outcomes.
            </p>
          </div>
          
          <div className="pt-8 border-t border-gray-300">
            <h3 className="text-3xl font-bold mb-6">Let's Build Something Meaningful</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">
              I enjoy working with people who care about shipping real products — not just writing code.
            </p>
            <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
              If you're exploring ideas in e-commerce, automation, robotics, or operational software, I'm always open to thoughtful conversations and collaborations.
            </p>
            
            <div className="flex gap-8 justify-center pt-4">
              <ContactLink icon={<Mail />} label="Email" href="mailto:hello@example.com" />
              <ContactLink icon={<Linkedin />} label="LinkedIn" href="#" />
              <ContactLink icon={<Github />} label="GitHub" href="#" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

