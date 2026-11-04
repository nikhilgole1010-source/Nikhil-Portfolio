import { topPicks } from '../data/portfolio';
import { SectionHeading } from './fx';
import { PosterBackdrop } from './Poster';

export default function TopPicks() {
  const marqueePicks = [...topPicks, ...topPicks];
  return (
    <>
      <SectionHeading kicker="Top 10 · from the resume" title="Nikhil's Top Picks" />
      <div className="group/rail relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-0 flex items-center gap-10 whitespace-nowrap opacity-10"
        >
          {topPicks.map((pick, i) => (
            <span
              key={pick.title}
              className="text-outline select-none font-display leading-none"
              style={{ fontSize: 'clamp(8rem, 18vw, 16rem)' }}
            >
              {(i + 1).toString().padStart(2, '0')}
            </span>
          ))}
        </div>
        <div className="overflow-hidden py-6">
          <div
            className="gutter marquee-track flex w-max gap-2"
            style={{ ['--marquee-duration' as string]: '56s' }}
          >
          {marqueePicks.map((pick, i) => {
            const n = i % topPicks.length;
            return (
            <div
              key={`${pick.title}-${i}`}
              className="group relative z-10 flex h-[260px] shrink-0 snap-start items-end sm:h-[300px]"
            >
              <span
                aria-hidden
                className="text-outline -mr-6 select-none font-display leading-[0.78] transition duration-500 group-hover:[-webkit-text-stroke-color:rgba(255,61,90,0.85)] sm:-mr-8"
                style={{ fontSize: n === 9 ? 'clamp(9rem, 22vw, 15rem)' : 'clamp(11rem, 26vw, 19rem)', letterSpacing: n === 9 ? '-0.06em' : 0 }}
              >
                {n + 1}
              </span>
              <div className="relative z-10 h-[85%] w-[150px] overflow-hidden rounded-lg shadow-[-10px_0_24px_rgba(0,0,0,0.62)] ring-1 ring-white/10 transition duration-300 group-hover:ring-white/30 sm:w-[180px]">
                <div className="absolute inset-0">
                  <PosterBackdrop palette={pick.palette} />
                </div>
                <div className="absolute inset-0 flex flex-col justify-between p-3.5">
                  <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-bone/70">{pick.label}</span>
                  <div>
                    <p className="font-display text-[1.75rem] leading-[0.92] tracking-wide text-bone">{pick.title}</p>
                    <p className="mt-1.5 text-[11px] leading-snug text-mist">{pick.detail}</p>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
          </div>
        </div>
      </div>
    </>
  );
}
