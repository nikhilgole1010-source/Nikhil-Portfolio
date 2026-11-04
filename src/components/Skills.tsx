import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { skillCategories, skillEvidence, type Skill } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';
import { useSmoothScroll } from '../hooks/smoothScroll';

const HUES = ['#ff3d5a', '#4cc9ff', '#46e3a8', '#ffb547', '#b98bff', '#ff8a5c', '#7ee0ff'];

export default function Skills() {
  const pinRef = useRef<HTMLDivElement>(null);
  const [cat, setCat] = useState(0);
  const { scrollTo } = useSmoothScroll();
  const category = skillCategories[cat];
  const hue = HUES[cat % HUES.length];
  const { scrollYProgress } = useScroll({ target: pinRef, offset: ['start start', 'end end'] });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const next = Math.min(skillCategories.length - 1, Math.max(0, Math.round(latest * (skillCategories.length - 1))));
    setCat((current) => (current === next ? current : next));
  });

  const chooseCategory = (index: number) => {
    setCat(index);
    const el = pinRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const start = rect.top + window.scrollY;
    const distance = Math.max(0, el.offsetHeight - window.innerHeight);
    const target = start + (distance * index) / Math.max(1, skillCategories.length - 1);
    scrollTo(target, { offset: 0 });
  };

  return (
    <div ref={pinRef} className="relative" style={{ height: `calc(100svh + ${(skillCategories.length - 1) * 32}svh)` }}>
      <div className="sticky top-16 flex min-h-[calc(100svh-4rem)] flex-col justify-center py-10">
        <SectionHeading kicker="Genres" title="My Skill Universe" aside={<p className="max-w-xs text-sm text-mist">Scroll to reveal each category, or click any category directly.</p>} />

        <div className="gutter grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
        {/* genre list */}
        <div className="rail -mx-[var(--gutter)] flex gap-2 overflow-x-auto px-[var(--gutter)] lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0" role="tablist" aria-label="Skill categories">
          {skillCategories.map((c, i) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={i === cat}
              onClick={() => chooseCategory(i)}
              className={`group relative shrink-0 rounded-lg px-4 py-3 text-left transition lg:px-5 ${i === cat ? 'text-bone' : 'text-smoke hover:text-bone'}`}
            >
              {i === cat && <motion.span layoutId="skill-tab" className="absolute inset-0 rounded-lg bg-white/[0.07] ring-1 ring-white/10" transition={{ duration: 0.45, ease: EASE }} />}
              {i === cat && <motion.span layoutId="skill-bar" className="absolute bottom-2 left-0 top-2 hidden w-[3px] rounded lg:block" style={{ background: hue }} />}
              <span className="relative block font-display text-2xl tracking-wide lg:text-3xl">{c.title}</span>
              <span className="relative hidden text-xs text-smoke lg:block">
                {c.skills.length} skills · {c.subtitle}
              </span>
            </button>
          ))}
        </div>

        {/* skill cards */}
        <div className="min-h-[340px]">
          <div>
            <p className="mb-5 text-sm text-mist">
              <span className="font-semibold text-bone">{category.title}</span> — {category.subtitle}
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
              {category.skills.map((s) => (
                <SkillCard key={s.name} skill={s} hue={hue} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

function SkillCard({ skill, hue }: { skill: Skill; hue: string }) {
  const evidence = skillEvidence[skill.name];

  return (
    <div
      className="group relative flex min-h-[148px] flex-col overflow-hidden rounded-xl bg-ink-2 p-4 text-left ring-1 ring-white/10 transition-shadow duration-500 hover:ring-white/20"
      style={{ boxShadow: `0 18px 50px -18px ${hue}44, 0 0 0 1px ${hue}33` }}
    >
      <div aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20" style={{ background: `radial-gradient(circle, ${hue}55, transparent 65%)` }} />
      <span
        className="relative flex h-12 w-12 items-center justify-center rounded-lg font-display text-2xl tracking-wide"
        style={{ background: `${hue}1f`, color: hue, boxShadow: `inset 0 0 0 1px ${hue}55` }}
        aria-hidden
      >
        {skill.mono}
      </span>
      <span className="relative mt-4 flex items-center gap-2 text-[15px] font-semibold text-bone">
        {skill.name}
        {skill.note && (
          <span className="rounded px-1.5 py-px text-[9px] font-bold uppercase tracking-wider text-ink" style={{ background: hue }}>
            {skill.note}
          </span>
        )}
      </span>
      {evidence && <span className="relative mt-2 block text-[11px] leading-snug text-mist">{evidence.join(' · ')}</span>}
    </div>
  );
}
