import React, { useState } from "react";
import { motion } from "motion/react";
import { Leaf, MapPin, Globe, CheckCircle2, Mail, Linkedin, ArrowRight, Menu, X, Award, Languages, Cpu, Calendar } from "lucide-react";
import { PopupModal } from "react-calendly";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  // Replace this with your actual Calendly URL
  const calendlyUrl = "https://calendly.com/natalia-korelina/15min";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const services = [
    {
      title: "Natural Fabric Sourcing",
      description: "Finding eco-friendly and natural fabrics across the EU. Specializing in ramie, lyocell, organic cotton, and linen.",
      icon: <Leaf className="w-6 h-6" />,
      tag: "EU-wide"
    },
    {
      title: "Manufacturer Search",
      description: "Identifying Portuguese clothing manufacturers that accept small-batch production (low Minimum Order Quantities).",
      icon: <MapPin className="w-6 h-6" />,
      tag: "Portugal"
    },
    {
      title: "Trimmings & Hardware",
      description: "Sourcing sustainable buttons, zippers, labels, and packaging that align with your brand's ethical values.",
      icon: <Cpu className="w-6 h-6" />,
      tag: "Accessories"
    },
    {
      title: "Full Support & QC",
      description: "End-to-end production management, from supplier lists to final quality control inspections on-site.",
      icon: <CheckCircle2 className="w-6 h-6" />,
      tag: "Full Cycle"
    }
  ];

  const materials = [
    "Ramie", "Lyocell (Tencel)", "Organic Cotton", "Linen", "Hemp", "SeaCell", "Piñatex (Pineapple)", "Banana Fiber",
    "Kapok", "Biodegradable Interlining", "Plastic-Free Vegan Leather", "Mushroom Leather", "Deadstock Fabrics",
    "Corozo Buttons", "Bio-resin Buttons", "Recycled Metal Zippers", "Organic Cotton Labels", "Natural Rubber Elastics"
  ];

  const skills = {
    fashion: ["Sustainable sourcing", "Fabric technical specs", "Production coordination", "Supplier auditing"],
    business: ["Supply chain analysis", "Cost optimization", "Quality control", "Logistics management"],
    digital: ["Tech Packs", "Production Tracking", "Excel", "Notion"]
  };

  const languages = [
    { name: "Russian", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Portuguese", level: "B2" }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-600 selection:text-white" style={{fontFamily: "'Inter', sans-serif"}}>
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-8 h-24 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight" style={{fontFamily: "'Playfair Display', serif"}}>NATALIA KORELINA</span>
          </div>

          <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-wide">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="px-6 py-3 bg-black text-white hover:bg-blue-600 transition-all">Contact</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 bg-black text-white pt-32 px-8 flex flex-col gap-8"
        >
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold hover:text-blue-600 transition-colors" style={{fontFamily: "'Playfair Display', serif"}}>Services</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold hover:text-blue-600 transition-colors" style={{fontFamily: "'Playfair Display', serif"}}>About</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold hover:text-blue-600 transition-colors" style={{fontFamily: "'Playfair Display', serif"}}>Contact</a>
          <button
            onClick={() => { setIsCalendlyOpen(true); setIsMenuOpen(false); }}
            className="mt-8 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all text-lg font-semibold"
          >
            Book Call
          </button>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="/natalia-professional.jpg"
            alt="Natalia Korelina"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="mb-6 text-sm tracking-[0.3em] uppercase font-medium">
              Lisbon • Portugal • EU
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9]" style={{fontFamily: "'Playfair Display', serif"}}>
              Sourcing<br/>Natural<br/>Fabrics
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Your bridge to ethical production in Portugal and across Europe
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#contact" className="px-10 py-5 bg-white text-black font-semibold hover:bg-blue-600 hover:text-white transition-all text-lg">
                Start Project
              </a>
              <button
                onClick={() => setIsCalendlyOpen(true)}
                className="px-10 py-5 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-all text-lg"
              >
                Book Call
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <ArrowRight className="w-6 h-6 rotate-90" />
        </div>
      </section>

      {/* Materials Keywords Section */}
      <section className="py-20 bg-gray-50 px-8">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase mb-12 text-center text-black/40 font-medium">Specialized Materials</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {materials.map((item, idx) => (
              <span key={idx} className="text-lg font-medium text-black/70 hover:text-blue-600 transition-colors cursor-default">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
            <div className="text-sm tracking-[0.3em] uppercase mb-4 text-black/60">What I Do</div>
            <h2 className="text-6xl md:text-7xl font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>Services</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="border-l-4 border-black pl-8 hover:border-blue-600 transition-all"
              >
                <div className="text-xs tracking-[0.3em] uppercase mb-4 text-black/40">{service.tag}</div>
                <h3 className="text-3xl font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>{service.title}</h3>
                <p className="text-lg text-black/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-32 bg-gray-50 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
            <div className="text-sm tracking-[0.3em] uppercase mb-4 text-black/60">Recent Work</div>
            <h2 className="text-6xl md:text-7xl font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>Projects</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div whileHover={{ y: -10 }} className="bg-white overflow-hidden">
              <div className="p-10">
                <div className="text-xs tracking-[0.3em] uppercase mb-4 text-black/40">Fashion Brand</div>
                <h3 className="text-3xl font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>SE VISTA</h3>
                <p className="text-lg text-black/70 leading-relaxed mb-6">
                  Premium ramie & lyocell sourcing. Low MOQ manufacturing. Full production cycle.
                </p>
                <div className="flex flex-wrap gap-3 text-sm font-medium">
                  <span className="text-black/50">Ramie</span>
                  <span className="text-black/50">•</span>
                  <span className="text-black/50">MOQ 50-100</span>
                </div>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-white overflow-hidden">
              <div className="p-10">
                <div className="text-xs tracking-[0.3em] uppercase mb-4 text-black/40">Hospitality</div>
                <h3 className="text-3xl font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>Restaurant</h3>
                <p className="text-lg text-black/70 leading-relaxed mb-6">
                  Custom cushions, Lisbon. Local manufacturers, turnkey delivery.
                </p>
                <div className="flex flex-wrap gap-3 text-sm font-medium">
                  <span className="text-black/50">Turnkey</span>
                  <span className="text-black/50">•</span>
                  <span className="text-black/50">Local</span>
                </div>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-white overflow-hidden">
              <div className="p-10">
                <div className="text-xs tracking-[0.3em] uppercase mb-4 text-black/40">Creative</div>
                <h3 className="text-3xl font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>Photo Shoots</h3>
                <p className="text-lg text-black/70 leading-relaxed mb-6">
                  Natural fabrics €2-5/m for florist. Wholesale access, EU-wide.
                </p>
                <div className="flex flex-wrap gap-3 text-sm font-medium">
                  <span className="text-black/50">Wholesale</span>
                  <span className="text-black/50">•</span>
                  <span className="text-black/50">€2-5/m</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-[#F5F5F0] border-t border-[#5A5A40]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif italic mb-4">Sourcing Packages</h2>
            <p className="text-[#5A5A40]/60 uppercase tracking-widest text-xs font-bold">Transparent pricing for your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white p-10 rounded-[40px] border border-[#5A5A40]/10 relative">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#5A5A40]/40 mb-2">Basic</div>
              <div className="mb-6">
                <span className="text-5xl font-serif italic text-[#5A5A40]">€30</span>
                <span className="text-[#5A5A40]/60 ml-2">per request</span>
              </div>
              <h3 className="font-serif text-2xl italic mb-6">Contact List</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5A5A40] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#5A5A40]/70">3-5 verified supplier contacts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5A5A40] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#5A5A40]/70">Composition & MOQ verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5A5A40] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#5A5A40]/70">You handle communication</span>
                </li>
              </ul>
              <a href="#contact" className="block w-full py-4 text-center border border-[#5A5A40] text-[#5A5A40] rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#5A5A40] hover:text-white transition-all">
                Get Started
              </a>
            </div>

            {/* Standard Package */}
            <div className="bg-[#5A5A40] text-white p-10 rounded-[40px] relative transform md:scale-105 shadow-xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-[#5A5A40] rounded-full text-[10px] font-bold uppercase tracking-widest">
                Most Popular
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Standard</div>
              <div className="mb-6">
                <span className="text-5xl font-serif italic">€70</span>
                <span className="text-white/60 ml-2">per request</span>
              </div>
              <h3 className="font-serif text-2xl italic mb-6">Full Research & Communication</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90">3-5 tailored supplier options</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90">I handle all communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90">Pricing, MOQ, lead times clarified</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90">Detailed report delivered</span>
                </li>
              </ul>
              <a href="#contact" className="block w-full py-4 text-center bg-white text-[#5A5A40] rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#F5F5F0] transition-all">
                Start Sourcing
              </a>
            </div>

            {/* Full Service */}
            <div className="bg-white p-10 rounded-[40px] border border-[#5A5A40]/10 relative">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#5A5A40]/40 mb-2">Full Service</div>
              <div className="mb-6">
                <span className="text-5xl font-serif italic text-[#5A5A40]">+10%</span>
                <span className="text-[#5A5A40]/60 ml-2">of order value</span>
              </div>
              <h3 className="font-serif text-2xl italic mb-6">End-to-End Management</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5A5A40] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#5A5A40]/70">Everything in Standard +</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5A5A40] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#5A5A40]/70">Order placement & tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5A5A40] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#5A5A40]/70">Quality control coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5A5A40] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#5A5A40]/70">Delivery management</span>
                </li>
              </ul>
              <a href="#contact" className="block w-full py-4 text-center border border-[#5A5A40] text-[#5A5A40] rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#5A5A40] hover:text-white transition-all">
                Let's Talk
              </a>
            </div>
          </div>
          <p className="text-center text-sm text-[#5A5A40]/60 mt-12 italic">Custom projects and retainers available — let's discuss your needs.</p>
        </div>
      </section>

      {/* Featured Materials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Featured Materials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sourcing the finest sustainable fabrics directly from ethical producers in Portugal and beyond.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Premium Ramie",
                desc: "A durable, natural fiber with a silk-like luster, perfect for breathable summer collections.",
                img: "https://lh3.googleusercontent.com/d/1ta63uQL4qdzsbK0k7UzPbhAHKyIXnmy7"
              },
              {
                name: "Eco-Tencel (Lyocell)",
                desc: "Soft, biodegradable fiber made from sustainably harvested wood pulp.",
                img: "/lyocell-fabric-1.jpg"
              },
              {
                name: "Organic Linen",
                desc: "Classic sustainable choice, sourced for its texture and longevity.",
                img: "/linen-fabric.jpg"
              }
            ].map((material, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-3xl mb-6">
                  <img
                    src={material.img.startsWith('/') || material.img.includes('unsplash') ? material.img : `https://images.weserv.nl/?url=${material.img}&w=800`}
                    alt={material.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2">{material.name}</h3>
                <p className="text-gray-600 text-sm">{material.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img src="https://images.weserv.nl/?url=https://lh3.googleusercontent.com/d/1ta63uQL4qdzsbK0k7UzPbhAHKyIXnmy7&w=600" className="rounded-3xl aspect-[3/4] object-cover" referrerPolicy="no-referrer" alt="Ramie Fabric Detail" />
              <img src="https://images.weserv.nl/?url=https://lh3.googleusercontent.com/d/11_UR3ERzCi2L5qAQWpmakzX1qVBJMGnt&w=600" className="rounded-3xl aspect-square object-cover" referrerPolicy="no-referrer" alt="Sustainable Production" />
            </div>
            <div className="space-y-4">
              <img src="https://images.weserv.nl/?url=https://lh3.googleusercontent.com/d/1BZ_1YUMHIj0fB-7uY9tKLydxpUY2Xnvh&w=600" className="rounded-3xl aspect-square object-cover" referrerPolicy="no-referrer" alt="Natural Textiles" />
              <img src="https://images.weserv.nl/?url=https://lh3.googleusercontent.com/d/1ta63uQL4qdzsbK0k7UzPbhAHKyIXnmy7&w=600" className="rounded-3xl aspect-[3/4] object-cover" referrerPolicy="no-referrer" alt="Ethical Manufacturing" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-4xl lg:text-5xl italic mb-8">Why Work With Me</h2>
            <div className="space-y-10">
                <div className="relative pl-8 border-l border-[#5A5A40]/20">
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-[#5A5A40]" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#5A5A40]/60">4 Years in Portugal</span>
                  <h3 className="font-serif text-2xl mt-2 italic">Local Expertise & Connections</h3>
                  <p className="mt-4 text-[#5A5A40]/70 leading-relaxed">
                    Living in Lisbon since 2021. I regularly attend textile trade shows and have established relationships with manufacturers, fabric agents, and suppliers across Portugal.
                  </p>
                  <p className="mt-3 text-[#5A5A40]/70 leading-relaxed">
                    <strong className="text-[#5A5A40]">Why this matters:</strong> Portuguese suppliers are notoriously slow with emails and often don't speak English. They prefer phone calls and personal relationships. I have direct phone numbers of managers and agents — access you won't find online.
                  </p>
                </div>
                <div className="relative pl-8 border-l border-[#5A5A40]/20">
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-[#5A5A40]" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#5A5A40]/60">2023 — Present</span>
                  <h3 className="font-serif text-2xl mt-2 italic">Founder & Sourcing Lead</h3>
                  <p className="font-medium text-[#5A5A40]">SE VISTA Sustainable Fashion Brand</p>
                  <p className="mt-4 text-[#5A5A40]/70 leading-relaxed">
                    Managing the end-to-end supply chain for my own sustainable brand. I've navigated the exact challenges you're facing — finding biodegradable fabrics, negotiating low MOQ, coordinating production with ethical Portuguese manufacturers.
                  </p>
                </div>
                <div className="relative pl-8 border-l border-[#5A5A40]/20">
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-[#5A5A40]/30" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#5A5A40]/60">Wholesale Access</span>
                  <h3 className="font-serif text-2xl mt-2 italic">Suppliers Who Accept Small Orders</h3>
                  <p className="mt-4 text-[#5A5A40]/70 leading-relaxed">
                    Access to EU-wide fabric wholesalers who accept orders from 1-2 meters. This is incredibly hard to find on your own — most require business registration or high minimums.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#FDFCFB] px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-5xl lg:text-6xl italic mb-8">Let's build your supply chain.</h2>
              <p className="text-xl text-[#5A5A40]/70 mb-12 leading-relaxed">
                Ready to find the perfect materials or the right manufacturer in Portugal? Send me a request or book a call to discuss your project.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:n.korelina21@gmail.com" className="flex items-center gap-4 text-xl font-serif italic text-[#5A5A40] hover:opacity-70 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-[#5A5A40]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  n.korelina21@gmail.com
                </a>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/natalia-korelina-13975a24a/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[#5A5A40]/20 flex items-center justify-center hover:bg-[#5A5A40] hover:text-white transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="mt-12 p-8 bg-[#5A5A40] text-white rounded-[32px]">
                <h3 className="font-serif text-2xl italic mb-4 text-center">Free Discovery Call</h3>
                <p className="text-sm text-white/70 mb-6 text-center">A 15-minute introductory call to understand your sourcing needs and how I can help.</p>
                <button 
                  onClick={() => setIsCalendlyOpen(true)}
                  className="w-full py-4 bg-white text-[#5A5A40] rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#F5F5F0] transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" /> Book My 15-min Slot
                </button>
              </div>
            </div>

            <div className="bg-[#F5F5F0] p-10 rounded-[40px] border border-[#5A5A40]/10 relative overflow-hidden">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-[#F5F5F0] flex flex-col items-center justify-center p-10 text-center z-10"
                >
                  <div className="w-16 h-16 bg-[#5A5A40]/10 rounded-full flex items-center justify-center text-[#5A5A40] mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl italic mb-4">Request Sent!</h3>
                  <p className="text-[#5A5A40]/70">Thank you for reaching out. I'll get back to you within 24-48 hours.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-xs font-bold uppercase tracking-widest text-[#5A5A40] hover:underline"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : null}
              <h3 className="font-serif text-2xl italic mb-8">Send a Request</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#5A5A40]/50 ml-2">Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-[#5A5A40]/10 focus:outline-none focus:border-[#5A5A40] transition-all" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#5A5A40]/50 ml-2">Email</label>
                    <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white border border-[#5A5A40]/10 focus:outline-none focus:border-[#5A5A40] transition-all" placeholder="email@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#5A5A40]/50 ml-2">Project Type</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-white border border-[#5A5A40]/10 focus:outline-none focus:border-[#5A5A40] transition-all appearance-none">
                    <option>Fabric Sourcing</option>
                    <option>Manufacturer Search (Portugal)</option>
                    <option>Trimmings & Hardware</option>
                    <option>Full Production Management</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#5A5A40]/50 ml-2">Message</label>
                  <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-white border border-[#5A5A40]/10 focus:outline-none focus:border-[#5A5A40] transition-all" placeholder="Tell me about your sourcing needs..."></textarea>
                </div>
                <button className="w-full py-5 bg-[#5A5A40] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#4A4A35] transition-all shadow-lg shadow-[#5A5A40]/20">
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#5A5A40]/50">
          © {new Date().getFullYear()} Natalia Korelina. Sustainable Fashion Operations.
        </p>
      </footer>

      {/* Calendly Modal */}
      <PopupModal
        url={calendlyUrl}
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root")!}
      />
    </div>
  );
}
