import React, { useState } from "react";
import { motion } from "motion/react";
import { Leaf, MapPin, Globe, Mail, Linkedin, Menu, X, Calendar, CheckCircle2, Cpu } from "lucide-react";
import { PopupModal } from "react-calendly";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const calendlyUrl = "https://calendly.com/natalia-k-sevista/new-meeting";

  const services = [
    {
      title: "Fabric & Trims Sourcing",
      description: "Natural and innovative fabrics, trims and packaging from suppliers across the EU. Low-MOQ options from 1–12 metres, depending on the material and supplier.",
      icon: <Leaf className="w-6 h-6" />,
      tag: "EU-wide"
    },
    {
      title: "Manufacturer Search",
      description: "Find Portuguese manufacturers and ateliers suited to your product, budget and production volume, including small-batch options.",
      icon: <MapPin className="w-6 h-6" />,
      tag: "Portugal"
    },
    {
      title: "Tech Packs",
      description: "Factory-ready product documentation covering materials, measurements, trims and construction details. Available as a standalone service or as part of a full-cycle project.",
      icon: <Cpu className="w-6 h-6" />,
      tag: "Product Development"
    },
    {
      title: "Production, QC & Logistics",
      description: "Production coordination, quality control and delivery support, with supplier communication in English and Portuguese. One point of contact from sampling to shipment.",
      icon: <CheckCircle2 className="w-6 h-6" />,
      tag: "Full Cycle"
    }
  ];

  const materials = [
    "Ramie", "Lyocell (Tencel)", "Organic Cotton", "Linen", "Hemp", "SeaCell", "Piñatex (Pineapple)", "Banana Fiber",
    "Kapok", "Biodegradable Interlining", "Plastic-Free Vegan Leather", "Mushroom Leather", "Deadstock Fabrics",
    "Corozo Buttons", "Organic Cotton Labels", "Natural Rubber Elastics"
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
    <div className="min-h-screen bg-white text-black font-sans selection:bg-gray-900 selection:text-white" style={{fontFamily: "'Inter', sans-serif"}}>
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-[1120px] mx-auto px-5 sm:px-8 h-20 gap-4 flex items-center justify-between">
          <div className="flex flex-col min-w-0">
            <span className="text-lg font-bold tracking-tight" style={{fontFamily: "'Playfair Display', serif"}}>NATALIA KORELINA</span>
            <span className="text-xs tracking-wider text-black/50 uppercase">Sourcing & Product Services • Portugal & EU</span>
          </div>

          <div className="hidden md:flex items-center gap-6 md:gap-8 text-sm font-medium tracking-wide">
            <a href="#services" className="hover:text-gray-600 transition-colors">Services</a>
            <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
            <a href="#contact" className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-all">Contact</a>
          </div>

          <button aria-label={isMenuOpen ? "Close navigation" : "Open navigation"} aria-expanded={isMenuOpen} className="md:hidden shrink-0 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold hover:text-gray-400 transition-colors" style={{fontFamily: "'Playfair Display', serif"}}>Services</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold hover:text-gray-400 transition-colors" style={{fontFamily: "'Playfair Display', serif"}}>About</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold hover:text-gray-400 transition-colors" style={{fontFamily: "'Playfair Display', serif"}}>Contact</a>
          <button
            onClick={() => { setIsCalendlyOpen(true); setIsMenuOpen(false); }}
            className="mt-8 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all text-base font-semibold"
          >
            Book Call
          </button>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[560px] md:min-h-[620px] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <motion.div
          initial={false}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.weserv.nl/?url=https://lh3.googleusercontent.com/d/11_UR3ERzCi2L5qAQWpmakzX1qVBJMGnt&w=1600"
            alt=""
            fetchPriority="high"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </motion.div>

        <div className="relative z-10 max-w-[1120px] mx-auto px-8 text-center text-white">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="mb-6 text-sm tracking-[0.3em] uppercase font-medium">
              Lisbon • Portugal • EU
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-[1.05]" style={{fontFamily: "'Playfair Display', serif"}}>
              Sustainable Sourcing<br/>&amp; Product Services
            </h1>
            <p className="text-base md:text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Fabric sourcing in Portugal and the EU, tech packs, small-batch production, quality control and logistics. Based in Lisbon, working with international fashion, home and hospitality brands.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#contact" className="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-100 transition-all text-lg">
                Start Project
              </a>
              <button
                onClick={() => setIsCalendlyOpen(true)}
                className="px-6 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-all text-lg"
              >
                Book 15-min Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <main>
      {/* Materials Keywords Section */}
      <section className="py-20 bg-[#F5EFE7] px-5 sm:px-8 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-10 right-20 w-64 h-64 bg-[#D4A574] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#A8B5A0] rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-[1120px] mx-auto relative z-10">
          <p className="text-xs tracking-[0.3em] uppercase mb-8 text-center text-black/40 font-medium">Materials Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{fontFamily: "'Playfair Display', serif"}}>
            I know where to find:
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base md:text-lg text-center leading-relaxed text-black/70">
              {materials.join(", ")}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 bg-white px-5 sm:px-8 relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#D4A5A5] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#A8B5A0] rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-[1120px] mx-auto relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <div className="text-sm tracking-[0.3em] uppercase mb-4 text-black/60">What I Do</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>Sourcing &amp; Product Development Services</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const colors = ['#F5EFE7', '#D4A574', '#A8B5A0', '#D4A5A5'];
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="relative p-6 md:p-8 rounded-3xl overflow-hidden"
                  style={{backgroundColor: colors[idx]}}
                >
                  <div className="relative z-10">
                    <div className="mb-6 opacity-70">{service.icon}</div>
                    <div className="text-xs tracking-[0.3em] uppercase mb-4 text-black/50">{service.tag}</div>
                    <h3 className="text-2xl font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>{service.title}</h3>
                    <p className="text-base text-black/80 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="projects" className="py-16 md:py-20 bg-[#F5EFE7] px-5 sm:px-8">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-10">
            <div className="text-sm tracking-widest uppercase mb-3 text-black/60">Selected Work</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{fontFamily: "'Playfair Display', serif"}}>Sourcing Projects in Portugal &amp; the EU</h2>
            <p className="text-base text-black/60">Explore a project to see the brief, the work and the result.</p>
          </div>
          <div className="space-y-3">
            {[
  {
    "title": "Premium Basics Manufacturing",
    "category": "Fashion · Portugal",
    "summary": "Manufacturers identified for 100–300 pieces per colour, with fabric sourcing handled by the factory.",
    "challenge": "Find Portuguese manufacturers for elevated basic layers in premium fabrics, with a manageable minimum order per colour.",
    "work": "Identified manufacturers offering 100–300 pieces per colour and in-house fabric sourcing, bringing fabric selection and garment production together.",
    "result": "The client received manufacturing options in Portugal that matched the premium positioning and required order volumes."
  },
  {
    "title": "Embroidered Company Merchandise",
    "category": "Corporate Merchandise · Portugal",
    "summary": "100% cotton shirts with embroidery at €9 each, from 10 pieces, with quality checks and international shipping.",
    "challenge": "Deliver branded merchandise on a tight timeline when the factories did not ship internationally.",
    "work": "Coordinated production in Portugal and personally checked quality before dispatch. Returned defective items to the factory, secured a full refund for those items and arranged shipping to the international client.",
    "result": "The client had production, quality control, defect resolution and international shipping coordinated through one contact. The €9 unit price and 10-piece minimum relate to this project; future quotes depend on the specification."
  },
  {
    "title": "SE VISTA",
    "category": "Selected Project",
    "summary": "Built a working supply chain for 25+ garment styles across 5–6 collections, with three Portuguese ateliers and access to low-MOQ materials.",
    "challenge": "Launch sustainable fashion brand with natural fabrics and ethical production in Portugal",
    "work": "Sourced 10+ suppliers across EU and Portugal for ramie, lyocell, organic cotton, hemp, deadstock fabrics. Found specialized suppliers for plastic-free threads, corozo/shell/metal buttons, organic labels. Coordinated production with 3 main manufacturers accepting 1-5 piece MOQs. Developed 25+ garment styles across 5–6 collections.",
    "result": "Built a working supply chain for 25+ garment styles across 5–6 collections, with three Portuguese ateliers and access to low-MOQ materials."
  },
  {
    "title": "Restaurant Outdoor Seating",
    "category": "Selected Project",
    "summary": "40 custom waterproof cushions delivered in 2 weeks with full specifications",
    "challenge": "Find custom cushions for outdoor use — waterproof, quick-drying, removable covers, minimal cost",
    "work": "Researched Lisbon manufacturers. Coordinated communication between client and supplier. Organized calls, emails, fabric selection. Arranged samples and custom quotes. Created unified aesthetic solution within budget.",
    "result": "40 custom waterproof cushions delivered in 2 weeks with full specifications"
  },
  {
    "title": "Event Decorations",
    "category": "Selected Project",
    "summary": "Enabled independent repeat purchasing from EU fabric wholesalers at €2–5/m, with minimum orders from 1–2 metres.",
    "challenge": "Connect creative professional with affordable fabric suppliers for event decoration",
    "work": "Showed fabric samples and possibilities. Provided consultation on materials for weddings/events. Connected client with wholesale suppliers. Passed verified contacts.",
    "result": "Enabled independent repeat purchasing from EU fabric wholesalers at €2–5/m, with minimum orders from 1–2 metres."
  }
].map((project) => (
              <details key={project.title} className="case-study group bg-white rounded-xl border border-black/10">
                <summary className="flex cursor-pointer items-start justify-between gap-4 p-5 sm:p-6 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4">
                  <div className="min-w-0">
                    <span className="block text-xs tracking-widest uppercase text-black/50 mb-2">{project.category}</span>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2" style={{fontFamily: "'Playfair Display', serif"}}>{project.title}</h3>
                    <p className="text-base text-black/70 leading-relaxed max-w-3xl">{project.summary}</p>
                  </div>
                  <span aria-hidden="true" className="case-arrow text-2xl shrink-0 transition-transform">⌄</span>
                </summary>
                <div className="px-5 sm:px-6 pb-6 border-t border-black/5 pt-5 grid md:grid-cols-3 gap-6 text-base leading-relaxed text-black/70">
                  <div><h4 className="font-semibold text-black mb-2">Brief</h4><p>{project.challenge}</p></div>
                  <div><h4 className="font-semibold text-black mb-2">What I did</h4><p>{project.work}</p></div>
                  <div><h4 className="font-semibold text-black mb-2">Result</h4><p>{project.result}</p></div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-20 bg-[#F5EFE7] px-6 sm:px-8 border-t border-black/5 relative overflow-hidden">
        <div className="absolute top-10 left-32 w-80 h-80 bg-[#A8B5A0] rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-[#D4A5A5] rounded-full opacity-15 blur-3xl"></div>
        <div className="max-w-[1120px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="text-sm tracking-[0.3em] uppercase mb-4 text-black/60">Investment</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>Pricing</h2>
            <p className="text-xl text-black/70">Standalone services from €200. Sourcing projects from €500.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {[
              {
                name: "Supplier Shortlist",
                price: "200",
                label: "Contacts Only",
                description: "A focused shortlist for clients who want to work directly with suppliers.",
                features: ["3–5 verified suppliers matched to your brief", "Available product range, pricing and minimum order information", "Direct contacts for your own follow-up"],
                note: "You handle supplier communication, samples and orders after the handover.",
                cta: "REQUEST A SHORTLIST",
                featured: false
              },
              {
                name: "Full Research",
                price: "500",
                label: "Sourcing Project",
                description: "Detailed sourcing research for your material or manufacturing brief.",
                features: ["Supplier shortlist and direct outreach, including phone calls", "Specifications, availability and MOQ checks", "Initial pricing negotiations and sample requests", "A report comparing options, with recommendations"],
                note: "I handle research and supplier communication so you can make an informed decision.",
                cta: "START SOURCING",
                featured: true
              },
              {
                name: "Full Cycle 360°",
                price: "1,000",
                label: "Product Development & Production",
                description: "One point of contact from technical development through production and delivery.",
                features: ["Tech packs and material sourcing", "Supplier selection, sampling and production coordination", "Quality control and issue resolution", "Logistics coordination and project updates"],
                note: "For projects spanning 3–6 months. Broader scopes: €1,500–3,000, with a tailored quote before work begins.",
                cta: "DISCUSS YOUR PROJECT",
                featured: false
              }
            ].map((plan) => (
              <motion.div key={plan.name} whileHover={{ y: -10 }} className={`flex flex-col p-8 xl:p-10 rounded-2xl border-2 ${plan.featured ? 'bg-[#A8B5A0] border-[#A8B5A0]' : 'bg-white border-black/10'}`}>
                <div className="text-sm tracking-widest uppercase mb-6 text-black/60">{plan.label}</div>
                <div className="mb-8">
                  <div className="text-base text-black/60 mb-2">From</div>
                  <div className="text-4xl xl:text-5xl font-bold whitespace-nowrap" style={{fontFamily: "'Playfair Display', serif"}}>€{plan.price}</div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-base leading-relaxed text-black/80 mb-6">{plan.description}</p>
                <ul className="list-disc pl-5 space-y-4 text-base text-black/80 mb-8">
                  {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <p className="text-base leading-relaxed text-black/70 mb-8">{plan.note}</p>
                <a href="#contact" className="mt-auto block w-full py-5 px-3 text-center border-2 border-black text-black hover:bg-black hover:text-white transition-all font-semibold text-sm tracking-wider">{plan.cta}</a>
              </motion.div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="p-8 rounded-2xl bg-white border border-black/10">
              <h3 className="text-2xl font-semibold mb-3">Standalone Tech Packs</h3>
              <p className="text-base text-black/70 leading-relaxed">Factory-ready documentation for your design, available separately or alongside sourcing. <a href="#contact" className="underline underline-offset-4 text-black">Request a quote</a> based on the garment and level of detail.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-black/10">
              <h3 className="text-2xl font-semibold mb-3">Capsule Production · From €1,500</h3>
              <p className="text-base text-black/70 leading-relaxed">For emerging brands with a design ready to develop: technical preparation, sourcing and production coordination. <a href="#contact" className="underline underline-offset-4 text-black">Discuss your capsule</a> for a tailored scope.</p>
            </div>
          </div>
          <p className="text-center text-base mt-10 text-black/70 max-w-3xl mx-auto leading-relaxed">Final fees depend on the agreed scope. Project payments can be split into 50% upfront, 30% at the midpoint and 20% on completion, or arranged monthly.</p>
        </div>
      </section>
      {/* Featured Materials Section */}
      <section className="py-16 md:py-20 bg-white px-5 sm:px-8 relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#D4A574] rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute bottom-20 left-32 w-72 h-72 bg-[#F5EFE7] rounded-full opacity-40 blur-3xl"></div>

        <div className="max-w-[1120px] mx-auto relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <div className="text-sm tracking-[0.3em] uppercase mb-4 text-black/60">Recent Work</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>Fabrics We've Sourced</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Ramie",
                desc: "Silk-like luster, breathable",
                img: "https://lh3.googleusercontent.com/d/1ta63uQL4qdzsbK0k7UzPbhAHKyIXnmy7"
              },
              {
                name: "Lyocell",
                desc: "Soft, biodegradable",
                img: "/lyocell-fabric-1.jpg"
              },
              {
                name: "Linen",
                desc: "Classic, durable",
                img: "/linen-fabric.jpg"
              }
            ].map((material, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden mb-6">
                  <img
                    loading="lazy" decoding="async"
                    src={material.img.startsWith('/') || material.img.includes('unsplash') ? material.img : `https://images.weserv.nl/?url=${material.img}&w=800`}
                    alt={material.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{fontFamily: "'Playfair Display', serif"}}>{material.name}</h3>
                <p className="text-lg text-black/60">{material.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {/* About Section - Magazine Editorial Style */}
      <section id="about" className="py-16 md:py-20 bg-[#F5EFE7] px-5 sm:px-8 relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#A8B5A0] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#D4A5A5] rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-[1120px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 md:gap-8 items-center">
            <div>
              <div className="text-sm tracking-[0.3em] uppercase mb-6 text-black/60">About</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-tight" style={{fontFamily: "'Playfair Display', serif"}}>
                Your Product Partner<br/>in Portugal
              </h2>

              <div className="space-y-6 text-base text-black/70 leading-relaxed">
                <p>
                  I'm a designer and independent sourcing consultant based in Lisbon since 2022. I support brands across the full product cycle: materials, tech packs, sampling, production, quality control and logistics. I regularly attend textile trade shows and have established relationships with manufacturers, fabric agents, and suppliers across Portugal. Through my own sustainable fashion brand SE VISTA, I've navigated the exact challenges you're facing — finding biodegradable fabrics like ramie and lyocell, working with fabric MOQs from 1-12 meters and production runs as low as 1-5 pieces with ethical Portuguese ateliers.
                </p>
                <p>
                  <strong className="text-black font-semibold">Why this matters:</strong> Local language skills and established relationships help move sourcing and production forward. I have direct phone numbers of managers and agents — access you won't find online.
                </p>
                <p>
                  I also have access to EU-wide fabric wholesalers who accept orders from 1-2 meters. This is incredibly hard to find on your own — most require business registration or high minimums.
                </p>
                <div className="pt-8 border-t border-black/10">
                  <div className="text-sm tracking-[0.3em] uppercase mb-4 text-black/40">Communication</div>
                  <p className="text-base font-medium text-black/80">
                    I speak <strong className="text-black">English</strong>, <strong className="text-black">Portuguese</strong>, and <strong className="text-black">Russian</strong> — bridging the gap between you and local suppliers.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img loading="lazy" decoding="async" src="/natalia-professional.jpg" className="w-full aspect-[3/4] object-cover rounded-2xl" alt="Natalia Korelina - Sustainable Sourcing and Product Services" />
                <img loading="lazy" decoding="async" src="/linen-fabric.jpg" className="w-full aspect-square object-cover rounded-2xl" alt="Natural Linen Fabric" />
              </div>
              <div className="space-y-6 pt-12">
                <img loading="lazy" decoding="async" src="https://images.weserv.nl/?url=https://lh3.googleusercontent.com/d/1ta63uQL4qdzsbK0k7UzPbhAHKyIXnmy7&w=600" className="w-full aspect-square object-cover rounded-2xl" referrerPolicy="no-referrer" alt="Ramie Textile" />
                <img loading="lazy" decoding="async" src="/lyocell-fabric-1.jpg" className="w-full aspect-[3/4] object-cover rounded-2xl" alt="Lyocell Fabric" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-[#F5EFE7] px-5 sm:px-8 relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-32 right-10 w-80 h-80 bg-[#D4A574] rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#A8B5A0] rounded-full opacity-15 blur-3xl"></div>

        <div className="max-w-[1120px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 md:gap-8 items-center">
            <div>
              <div className="text-sm tracking-[0.3em] uppercase mb-6 text-black/60">Get in Touch</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-tight" style={{fontFamily: "'Playfair Display', serif"}}>
                Let's Build<br/>Your Supply<br/>Chain
              </h2>

              {/* Free 15-min Call - Highlighted Block */}
              <div className="bg-[#D4A574] text-white p-8 mb-12 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="w-8 h-8" />
                  <h3 className="text-2xl font-bold" style={{fontFamily: "'Playfair Display', serif"}}>Free Discovery Call</h3>
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">
                  15-minute introductory call to discuss your materials, tech packs or production plans and identify the right scope of support.
                </p>
                <button
                  onClick={() => setIsCalendlyOpen(true)}
                  className="w-full py-4 bg-white text-black font-semibold hover:bg-gray-100 transition-all text-sm tracking-wider"
                >
                  BOOK YOUR FREE CALL
                </button>
              </div>

              <div className="space-y-6">
                <a href="mailto:n.korelina21@gmail.com" className="flex items-center gap-6 text-xl hover:text-gray-600 transition-colors group">
                  <div className="w-12 h-12 shrink-0 border-2 border-black/10 flex items-center justify-center group-hover:border-black/30 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium break-all text-base sm:text-lg">n.korelina21@gmail.com</span>
                </a>

                <a href="https://www.linkedin.com/in/natalia-korelina-13975a24a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 text-xl hover:text-gray-600 transition-colors group">
                  <div className="w-12 h-12 shrink-0 border-2 border-black/10 flex items-center justify-center group-hover:border-black/30 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="font-medium">LinkedIn</span>
                </a>

                <a href="https://www.upwork.com/freelancers/~01dd447159df117cac?mp_source=share" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 hover:text-gray-600 transition-colors group">
                  <div className="w-14 h-14 shrink-0 border-2 border-black/10 flex items-center justify-center group-hover:border-black/30 transition-all">
                    <Globe className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span>
                    <span className="block text-xl font-medium">Upwork</span>
                    <span className="block text-base text-black/60 mt-1">View my profile and client reviews</span>
                  </span>
                </a>
              </div>

              <div className="mt-12 pt-12 border-t border-black/10">
                <p className="text-lg text-black/60 leading-relaxed">
                  Ready to find the perfect materials or manufacturer in Portugal? Reach out to discuss your project.
                </p>
              </div>
            </div>

            <div className="bg-white text-black p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-8" style={{fontFamily: "'Playfair Display', serif"}}>Send a Message</h3>

              <iframe
                title="Sourcing and product development enquiry form"
                loading="lazy"
                src="https://docs.google.com/forms/d/e/1FAIpQLSddkL5lK_uB_J7a_N18RJ2cFV8qWgyYPosB5dNdIOcPhVB6xQ/viewform?embedded=true"
                width="100%"
                height="900"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>
      </main>
      {/* Footer */}
      <footer className="py-16 px-8 bg-white border-t border-black/5">
        <div className="max-w-[1120px] mx-auto text-center">
          <p className="text-sm tracking-wider text-black/40">
            © {new Date().getFullYear()} Natalia Korelina
          </p>
        </div>
      </footer>

      {/* Calendly Modal */}
      {isCalendlyOpen && <PopupModal
        url={calendlyUrl}
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root")!}
      />}
    </div>
  );
}
