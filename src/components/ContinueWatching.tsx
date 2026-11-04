import { useMemo } from 'react';
import { sectionMeta, type SectionId } from '../data/portfolio';
import { useWatchProgress } from '../hooks/sectionProgress';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { RevealText } from './fx';
import { PosterBackdrop } from './Poster';

const GLYPHS: Record<SectionId, string> = { about: 'S', journey: 'S01', originals: '6', picks: '10', skills: '{ }', moments: '★', story: 'CV' };

export default function ContinueWatching({ order }: { order: SectionId[] }) {
  const progress = useWatchProgress();
  const { scrollTo } = useSmoothScroll();
  const marqueeItems = useMemo(() => [...order, ...order], [order]);

  return (
    <section aria-labelledby="continue-title" className="relative z-10 -mt-10 pb-10 sm:-mt-16">
      <div className="gutter mb-4 flex items-end justify-between">
        <RevealText as="h2" text="Continue Exploring" className="font-sans text-lg font-semibold tracking-tight text-bone sm:text-2xl" />
        <span className="hidden text-xs text-smoke sm:block">Progress shows what you&apos;ve watched so far</span>
      </div>
      <div className="group/rail relative">
        <div className="overflow-hidden py-8">
          <div
            className="gutter marquee-track flex w-max gap-3 sm:gap-4"
            style={{ ['--marquee-duration' as string]: '48s' }}
          >
          {marqueeItems.map((id, i) => {
            const meta = sectionMeta[id];
            const p = progress[id] ?? 0;
            const duplicate = i >= order.length;
            return (
              <button
                key={`${id}-${i}`}
                type="button"
                data-cursor="play"
                tabIndex={duplicate ? -1 : 0}
                aria-hidden={duplicate || undefined}
                onClick={() => scrollTo(`#${id}`)}
                className="group relative aspect-video w-[72vw] shrink-0 overflow-visible text-left sm:w-[42vw] md:w-[30vw] lg:w-[22vw]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-lg ring-1 ring-white/10 transition duration-500 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,61,90,0.6)]">
                  <div className="absolute inset-0">
                    <PosterBackdrop palette={meta.palette}>
                      <span className="absolute -right-2 -top-6 font-display text-[8rem] leading-none text-white/[0.07] sm:text-[9rem]">{GLYPHS[id]}</span>
                    </PosterBackdrop>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <span className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2">Episode {String(i + 1).padStart(2, '0')}</span>
                    <span className="font-display text-2xl leading-none tracking-wide text-bone transition-transform duration-500 group-hover:-translate-y-1 sm:text-3xl">
                      {meta.card}
                    </span>
                    <span className="mt-1 text-xs text-mist opacity-100 transition duration-500 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                      {meta.meta}
                    </span>
                  </div>
                  <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/40 text-xs text-bone backdrop-blur transition duration-500 group-hover:scale-110 group-hover:border-bone group-hover:bg-bone group-hover:text-ink">
                    ▶
                  </span>
                </div>
                <div className="mt-2 h-[3px] w-full overflow-hidden rounded bg-white/15">
                  <div className="h-full origin-left bg-crimson" style={{ transform: `scaleX(${Math.max(0.04, p)})` }} />
                </div>
              </button>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
