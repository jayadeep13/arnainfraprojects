'use client';
import { useState } from 'react';

const cats = [
  'All', 'Renovations', 'Individual Houses', 'Interior Design',
  'Villas', 'Apartments', 'Restaurants', 'Offices', 'Hospitals', 'Commercial',
];

const projects = [
  /* ── Renovations ── */
  {
    cat: 'Renovations', title: 'Heritage Home Reno',
    loc: 'Eluru', year: '2024',
    desc: '50-year-old bungalow completely renovated — new flooring, false ceilings, modern kitchen, and fresh interiors while preserving original character.',
    image: '/ren.png',
  },
  {
    cat: 'Renovations', title: 'Modern Home Makeover',
    loc: 'Hanuman Junction', year: '2024',
    desc: 'Complete interior & exterior renovation of a 1500 sqft home — new tiles, false ceiling, premium paint and electrical upgrades.',
    image: '/ren1.png',
  },

  /* ── Individual Houses ── */
  {
    cat: 'Individual Houses', title: 'Family Home — 3BHK',
    loc: 'Hanuman Junction', year: '2024',
    desc: 'Newly constructed 3BHK individual house — 1800 sqft RCC structure with modern elevation, granite flooring, and complete finishing.',
    image: '/inv.png',
  },
  {
    cat: 'Individual Houses', title: 'G+1 Residence',
    loc: 'Gudivada', year: '2023',
    desc: 'Ground + 1 floor individual residence with Vastu-compliant design, premium finishes, and DTCP-approved plans.',
    image: '/inv1.png',
  },
  {
    cat: 'Individual Houses', title: 'Corner Plot Home',
    loc: 'Gannavaram', year: '2024',
    desc: '30×40 corner plot house with double-height entrance, open plan living, and contemporary façade design.',
    image: '/re.png',
  },

  /* ── Interior Design ── */
  {
    cat: 'Interior Design', title: 'Living Room Transformation',
    loc: 'Vijayawada', year: '2024',
    desc: 'Complete living & dining room interior — customised furniture, feature wall, ambient lighting, and premium flooring.',
    image: '/intd.png',
  },
  {
    cat: 'Interior Design', title: 'Master Bedroom Suite',
    loc: 'Hanuman Junction', year: '2023',
    desc: 'Luxurious master bedroom with walk-in wardrobe, LED false ceiling, and attached premium bathroom design.',
    image: '/bed.png',
  },
  {
    cat: 'Interior Design', title: 'Full Home Interior',
    loc: 'Eluru', year: '2024',
    desc: 'End-to-end interior for a 2200 sqft apartment — modular kitchen, wardrobes, false ceilings, and custom furniture.',
    image: '/inter.png',
  },

  /* ── Villas ── */
  {
    cat: 'Villas', title: 'Prestige Villa',
    loc: 'Vijayawada', year: '2024',
    desc: '4BHK luxury villa with landscaped garden, double-height living room, home theatre, and premium Italian marble throughout.',
    image: '/villa.jpg',
  },
  {
    cat: 'Villas', title: 'Royal Retreat Villa',
    loc: 'Eluru', year: '2023',
    desc: '3BHK duplex villa with private swimming pool, home theatre, smart home automation, and landscaped garden.',
    image: '/royal.jpg',
  },

  /* ── Apartments ── */
  {
    cat: 'Apartments', title: 'Skyline Residency',
    loc: 'Gannavaram', year: '2023',
    desc: 'G+6 apartment complex — 36 units, covered parking, rooftop amenities, RERA compliant and premium common-area finishes.',
    image: '/sky.jpg',
  },
  {
    cat: 'Apartments', title: 'Green Valley Apts',
    loc: 'Vijayawada', year: '2022',
    desc: 'Eco-friendly G+8 complex — IGBC certified, rainwater harvesting, solar panels, and energy-efficient design.',
    image: '/green.jpg',
  },

  /* ── Restaurants ── */
  {
    cat: 'Restaurants', title: 'The Grand Dining',
    loc: 'Vijayawada', year: '2023',
    desc: 'Fine-dining for 120 guests — open kitchen concept, private dining section, custom lighting, and premium interiors.',
    image: '/grand.jpg',
  },
  {
    cat: 'Restaurants', title: 'Cloud Kitchen Hub',
    loc: 'Hanuman Junction', year: '2024',
    desc: '8-station professional cloud kitchen with commercial ventilation, fire safety systems, and FSSAI-compliant layout.',
    image: '/CLOUD.png',
  },

  /* ── Offices ── */
  {
    cat: 'Offices', title: 'Tech Hub Office',
    loc: 'Hanuman Junction', year: '2022',
    desc: '5000 sqft modern IT office — collaborative zones, private cabins, server room, full HVAC, and contemporary interiors.',
    image: '/tec.jpg',
  },

  /* ── Hospitals ── */
  {
    cat: 'Hospitals', title: 'Multi-Specialty Hospital',
    loc: 'Gudivada', year: '2023',
    desc: '50-bed hospital with OT suites, ICU ward, pathology lab, and full NABH compliance and infection-control design.',
    image: '/hospitals.jpg',
  },
  {
    cat: 'Hospitals', title: 'Diagnostic Centre',
    loc: 'Machilipatnam', year: '2022',
    desc: 'State-of-art diagnostic center with MRI shielded room, pathology labs, and integrated pharmacy unit.',
    image: '/diag.jpg',
  },

  /* ── Commercial ── */
  {
    cat: 'Commercial', title: 'Corporate Park',
    loc: 'Hanuman Junction', year: '2024',
    desc: 'G+4 complex — ground-floor retail, upper-floor offices, basement parking, and premium façade design.',
    image: '/corp.jpg',
  },
  {
    cat: 'Commercial', title: 'Shopping Complex',
    loc: 'Gudivada', year: '2022',
    desc: 'G+3 shopping mall with 40+ retail units, food court, entertainment multiplex, and ample parking.',
    image: '/sho.jpg',
  },
];

export default function ProjectsGallery() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.cat === active);

  return (
    <section className="px-[5%] pb-20">

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 rounded-full text-[11px] tracking-[1px] uppercase font-bold transition-all duration-300 font-body ${
              active === c
                ? 'bg-navy-800 text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-navy-400 hover:text-navy-800'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/*
        ── Masonry-style grid with dense packing ──
        base row unit = 75px
        span 3 = 225px  |  span 4 = 300px  |  span 5 = 375px
        grid-auto-flow: dense fills every gap automatically
      */}
      <div
        className="hidden lg:grid gap-4"
        style={{
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: '75px',
          gridAutoFlow: 'dense',
        }}
      >
        {filtered.map((p, i) => {
          /* Repeating height pattern — 3 cols × varied spans = no gaps */
          const spanPattern = [5, 3, 4, 3, 5, 4, 4, 3, 5, 3, 4, 5, 5, 3, 4, 4, 5, 3, 4];
          const span = spanPattern[i % spanPattern.length];
          return (
            <div
              key={`${p.title}-${i}`}
              className="relative rounded-2xl overflow-hidden group cursor-default"
              style={{ gridRow: `span ${span}` }}
            >
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Always-on bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Hover darkening */}
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category badge top-left on hover */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                <span className="text-[10px] tracking-[2px] uppercase font-bold px-3 py-1 bg-orange-brand text-white rounded-full font-body">
                  {p.cat}
                </span>
              </div>

              {/* Title always visible — slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-300 group-hover:-translate-y-10">
                <span className="text-[10px] tracking-[2px] uppercase text-orange-brand font-bold block mb-1 font-body group-hover:hidden">
                  {p.cat}
                </span>
                <h3 className="font-display font-bold text-[17px] text-white leading-snug">{p.title}</h3>
                <p className="text-[12px] text-white/55 mt-0.5 font-body">{p.loc} · {p.year}</p>
              </div>

              {/* Description fades in at bottom on hover */}
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                <p className="text-[12px] text-white/90 leading-relaxed font-body line-clamp-3">{p.desc}</p>
              </div>

              {/* Left accent bar on hover */}
              <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-orange-brand to-sky-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          );
        })}
      </div>

      {/* Mobile / tablet — simple 2-col uniform grid */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((p, i) => (
          <div
            key={`mob-${p.title}-${i}`}
            className="relative rounded-2xl overflow-hidden group cursor-default"
            style={{ height: '260px' }}
          >
            <img
              src={p.image}
              alt={p.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="text-[10px] tracking-[2px] uppercase text-orange-brand font-bold block mb-1 font-body">{p.cat}</span>
              <h3 className="font-display font-bold text-[16px] text-white leading-snug">{p.title}</h3>
              <p className="text-[11px] text-white/55 mt-0.5 font-body">{p.loc} · {p.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
