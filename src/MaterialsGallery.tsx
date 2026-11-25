import { useState } from 'react';
import materials from './materials-gallery.json';

export default function MaterialsGallery() {
  const [category, setCategory] = useState('All');
  const [expanded, setExpanded] = useState(false);
  const filtered = materials.filter(item => category === 'All' || item.category === category);
  const visible = expanded ? filtered : filtered.slice(0, 6);

  return (
    <section id="materials" className="py-16 md:py-20 px-5 sm:px-8 bg-white border-t border-black/5">
      <div className="max-w-[1120px] mx-auto">
        <div className="max-w-2xl mb-8">
          <p className="text-sm tracking-widest uppercase text-black/60 mb-3">From my sourcing visits</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Materials &amp; discoveries</h2>
          <p className="text-base leading-relaxed text-black/70">A selection of fabrics, trims and decorative techniques photographed at textile trade shows. Inspiration for the textures, finishes and details we can explore for your project.</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter materials">
          {['All', 'Fabrics', 'Trims', 'Decoration'].map(name => (
            <button key={name} type="button" aria-pressed={category === name} aria-controls="materials-grid"
              onClick={() => { setCategory(name); setExpanded(false); }}
              className={`px-5 py-3 rounded-full text-sm font-medium border transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${category === name ? 'bg-black text-white border-black' : 'bg-white text-black border-black/20 hover:bg-[#F5EFE7]'}`}>
              {name}
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">Showing {visible.length} of {filtered.length} materials</p>
        <div id="materials-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {visible.map(item => (
            <figure key={item.slug}>
              <a href={`/materials/${item.slug}.webp`} target="_blank" rel="noopener noreferrer" aria-label={`View full photo: ${item.title} (opens in a new tab)`} className="block rounded-xl overflow-hidden bg-[#F5EFE7] focus-visible:outline-2 focus-visible:outline-offset-4">
                <img src={`/materials/${item.slug}.webp`} alt={item.title} width={item.width} height={item.height} loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300" />
              </a>
              <figcaption className="pt-4">
                <p className="text-xs uppercase tracking-widest text-black/50 mb-2">{item.category}</p>
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-base leading-relaxed text-black/70">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        {filtered.length > 6 && <button type="button" onClick={() => setExpanded(!expanded)} aria-expanded={expanded} aria-controls="materials-grid" className="mt-8 px-6 py-3 border border-black rounded-full font-medium hover:bg-black hover:text-white transition-colors">{expanded ? 'Show fewer photos' : `View all ${filtered.length} photos`}</button>}
        <div className="mt-10 pt-6 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-black/60 max-w-xl">Composition details follow the photographed sample labels. Availability, specifications and minimum orders are checked for each brief.</p>
          <a href="#contact" className="shrink-0 font-medium underline underline-offset-4">Find materials for my project</a>
        </div>
      </div>
    </section>
  );
}
