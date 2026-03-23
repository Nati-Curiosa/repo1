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
    <div className="min-h-screen bg-white text-black font-sans selection:bg-gray-900 selection:text-white" style={{fontFamily: "'Inter', sans-serif"}}>
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-8 h-24 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight" style={{fontFamily: "'Playfair Display', serif"}}>NATALIA KORELINA</span>
          </div>

          <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-wide">
            <a href="#services" className="hover:text-gray-600 transition-colors">Services</a>
            <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
            <a href="#contact" className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-all">Contact</a>
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
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold hover:text-gray-400 transition-colors" style={{fontFamily: "'Playfair Display', serif"}}>Services</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold hover:text-gray-400 transition-colors" style={{fontFamily: "'Playfair Display', serif"}}>About</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold hover:text-gray-400 transition-colors" style={{fontFamily: "'Playfair Display', serif"}}>Contact</a>
          <button
            onClick={() => { setIsCalendlyOpen(true); setIsMenuOpen(false); }}
            className="mt-8 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all text-lg font-semibold"
          >
            Book Call
          </button>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
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
              <a href="#contact" className="px-10 py-5 bg-white text-black font-semibold hover:bg-gray-100 transition-all text-lg">
                Start Project
              </a>
              <button
                onClick={() => setIsCalendlyOpen(true)}
                className="px-10 py-5 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-all text-lg"
              >
                Book 15-min Call
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
              <span key={idx} className="text-lg font-medium text-black/70 hover:text-black transition-colors cursor-default">
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
                className="border-l-4 border-black pl-8 hover:border-gray-400 transition-all"
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
      <section className="py-32 bg-white px-8 border-t border-black/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
            <div className="text-sm tracking-[0.3em] uppercase mb-4 text-black/60">Investment</div>
            <h2 className="text-6xl md:text-7xl font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>Pricing</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Basic */}
            <motion.div whileHover={{ y: -10 }} className="border-2 border-black/10 p-12 hover:border-black/30 transition-all">
              <div className="text-xs tracking-[0.3em] uppercase mb-8 text-black/40">Basic</div>
              <div className="mb-12">
                <div className="text-8xl font-bold mb-2" style={{fontFamily: "'Playfair Display', serif"}}>30</div>
                <div className="text-2xl text-black/60">EUR</div>
              </div>
              <h3 className="text-2xl font-semibold mb-8">Contact List</h3>
              <ul className="space-y-4 text-lg mb-12 text-black/70">
                <li>• 3-5 verified contacts</li>
                <li>• MOQ verification</li>
                <li>• Self-managed</li>
              </ul>
              <a href="#contact" className="block w-full py-5 text-center border-2 border-black text-black hover:bg-black hover:text-white transition-all font-semibold text-sm tracking-wider">
                GET STARTED
              </a>
            </motion.div>

            {/* Standard - Featured */}
            <motion.div whileHover={{ y: -10 }} className="bg-black text-white p-12 relative transform md:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-white text-black text-xs font-bold tracking-wider">
                MOST POPULAR
              </div>
              <div className="text-xs tracking-[0.3em] uppercase mb-8 text-white/60">Standard</div>
              <div className="mb-12">
                <div className="text-8xl font-bold mb-2" style={{fontFamily: "'Playfair Display', serif"}}>70</div>
                <div className="text-2xl text-white/70">EUR</div>
              </div>
              <h3 className="text-2xl font-semibold mb-8">Full Service</h3>
              <ul className="space-y-4 text-lg mb-12">
                <li>• Tailored options</li>
                <li>• Full communication</li>
                <li>• Pricing & MOQ clarity</li>
                <li>• Detailed report</li>
              </ul>
              <a href="#contact" className="block w-full py-5 text-center bg-white text-black hover:bg-gray-100 transition-all font-semibold text-sm tracking-wider">
                START SOURCING
              </a>
            </motion.div>

            {/* Full Service */}
            <motion.div whileHover={{ y: -10 }} className="border-2 border-black/10 p-12 hover:border-black/30 transition-all">
              <div className="text-xs tracking-[0.3em] uppercase mb-8 text-black/40">Full Service</div>
              <div className="mb-12">
                <div className="text-8xl font-bold mb-2" style={{fontFamily: "'Playfair Display', serif"}}>10<span className="text-5xl">%</span></div>
                <div className="text-2xl text-black/60">of order</div>
              </div>
              <h3 className="text-2xl font-semibold mb-8">End-to-End</h3>
              <ul className="space-y-4 text-lg mb-12 text-black/70">
                <li>• Everything above</li>
                <li>• Order placement</li>
                <li>• Quality control</li>
                <li>• Delivery mgmt</li>
              </ul>
              <a href="#contact" className="block w-full py-5 text-center border-2 border-black text-black hover:bg-black hover:text-white transition-all font-semibold text-sm tracking-wider">
                LET'S TALK
              </a>
            </motion.div>
          </div>

          <p className="text-center text-lg mt-16 text-black/60">Custom projects available</p>
        </div>
      </section>
      {/* Featured Materials Section */}
      <section className="py-32 bg-white px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
            <div className="text-sm tracking-[0.3em] uppercase mb-4 text-black/60">Recent Work</div>
            <h2 className="text-6xl md:text-7xl font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>Fabrics We've Sourced</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
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
                    src={material.img.startsWith('/') || material.img.includes('unsplash') ? material.img : `https://images.weserv.nl/?url=${material.img}&w=800`}
                    alt={material.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-3xl font-bold mb-2" style={{fontFamily: "'Playfair Display', serif"}}>{material.name}</h3>
                <p className="text-lg text-black/60">{material.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {/* About Section - Magazine Editorial Style */}
      <section id="about" className="py-32 bg-gray-50 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-sm tracking-[0.3em] uppercase mb-6 text-black/60">About</div>
              <h2 className="text-5xl md:text-6xl font-bold mb-12 leading-tight" style={{fontFamily: "'Playfair Display', serif"}}>
                4 Years<br/>in Portugal
              </h2>

              <div className="space-y-8 text-lg text-black/70 leading-relaxed">
                <p>
                  I've been living in Lisbon since 2021. I regularly attend textile trade shows and have established relationships with manufacturers, fabric agents, and suppliers across Portugal. Through my own sustainable fashion brand SE VISTA, I've navigated the exact challenges you're facing — finding biodegradable fabrics like ramie and lyocell, negotiating low MOQ (50-100 units), and coordinating production with ethical Portuguese manufacturers.
                </p>
                <p>
                  <strong className="text-black font-semibold">Why this matters:</strong> Portuguese suppliers are notoriously slow with emails and often don't speak English. They prefer phone calls and personal relationships. I have direct phone numbers of managers and agents — access you won't find online.
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
                <img src="/lyocell-fabric-1.jpg" className="w-full aspect-[3/4] object-cover" alt="Fabric Detail" />
                <img src="/linen-fabric.jpg" className="w-full aspect-square object-cover" alt="Sustainable Production" />
              </div>
              <div className="space-y-6 pt-12">
                <img src="https://images.weserv.nl/?url=https://lh3.googleusercontent.com/d/1ta63uQL4qdzsbK0k7UzPbhAHKyIXnmy7&w=600" className="w-full aspect-square object-cover" referrerPolicy="no-referrer" alt="Natural Textiles" />
                <img src="/lyocell-fabric-1.jpg" className="w-full aspect-[3/4] object-cover" alt="Ethical Manufacturing" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gray-50 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-sm tracking-[0.3em] uppercase mb-6 text-black/60">Get in Touch</div>
              <h2 className="text-5xl md:text-6xl font-bold mb-12 leading-tight" style={{fontFamily: "'Playfair Display', serif"}}>
                Let's Build<br/>Your Supply<br/>Chain
              </h2>

              {/* Free 15-min Call - Highlighted Block */}
              <div className="bg-black text-white p-8 mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="w-8 h-8" />
                  <h3 className="text-2xl font-bold" style={{fontFamily: "'Playfair Display', serif"}}>Free Discovery Call</h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  15-minute introductory call to understand your sourcing needs and how I can help.
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
                  <div className="w-14 h-14 border-2 border-black/10 flex items-center justify-center group-hover:border-black/30 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium">n.korelina21@gmail.com</span>
                </a>

                <a href="https://www.linkedin.com/in/natalia-korelina-13975a24a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 text-xl hover:text-gray-600 transition-colors group">
                  <div className="w-14 h-14 border-2 border-black/10 flex items-center justify-center group-hover:border-black/30 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>

              <div className="mt-12 pt-12 border-t border-black/10">
                <p className="text-lg text-black/60 leading-relaxed">
                  Ready to find the perfect materials or manufacturer in Portugal? Reach out to discuss your project.
                </p>
              </div>
            </div>

            <div className="bg-white text-black p-12">
              <h3 className="text-3xl font-bold mb-8" style={{fontFamily: "'Playfair Display', serif"}}>Send a Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-black text-white flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4" style={{fontFamily: "'Playfair Display', serif"}}>Message Sent</h4>
                  <p className="text-black/60 mb-8">I'll get back to you within 24-48 hours.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm tracking-wider underline hover:no-underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs tracking-wider uppercase mb-2 text-black/60">Name</label>
                      <input type="text" className="w-full px-4 py-4 border-2 border-black/10 focus:border-black outline-none transition-all" required />
                    </div>
                    <div>
                      <label className="block text-xs tracking-wider uppercase mb-2 text-black/60">Email</label>
                      <input type="email" className="w-full px-4 py-4 border-2 border-black/10 focus:border-black outline-none transition-all" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider uppercase mb-2 text-black/60">Project Type</label>
                    <select className="w-full px-4 py-4 border-2 border-black/10 focus:border-black outline-none transition-all">
                      <option>Fabric Sourcing</option>
                      <option>Manufacturer Search</option>
                      <option>Trimmings & Hardware</option>
                      <option>Full Production</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider uppercase mb-2 text-black/60">Message</label>
                    <textarea rows={5} className="w-full px-4 py-4 border-2 border-black/10 focus:border-black outline-none transition-all resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full py-5 bg-black text-white hover:bg-blue-600 transition-all font-semibold text-sm tracking-wider">
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-16 px-8 bg-white border-t border-black/5">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-sm tracking-wider text-black/40">
            © {new Date().getFullYear()} Natalia Korelina
          </p>
        </div>
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
