import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/history')({
  component: HistoryPage,
})

const seasons = [
  {
    year: '2025',
    game: 'DECODE',
    league: 'Iron Mountain League',
    events: [
      { name: 'Iron Mountain Scrimmage', result: 'Competed' },
      { name: 'Iron Mountain League Meet 1', result: 'Competed' },
      { name: 'Iron Mountain League Meet 2', result: 'Competed' },
      { name: 'Iron Mountain League Meet 3', result: 'Competed' },
      { name: 'Iron Mountain League Tournament', result: 'Finalist Alliance (1st Selected) · Inspire Award 2nd Place', highlight: true },
      { name: 'Oregon Championship – Purple Division', result: 'Competed' },
      { name: 'Oregon Championship', result: 'Reach Award 2nd Place', highlight: true },
    ],
  },
  {
    year: '2024',
    game: 'INTO THE DEEP',
    league: 'Rose City League',
    events: [
      { name: 'Rose City League Meet 0', result: 'Competed' },
      { name: 'Rose City League Meet 1', result: 'Competed' },
      { name: 'Rose City League Meet 2', result: 'Competed' },
      { name: 'Rose City League Meet 3', result: 'Competed' },
      { name: 'Rose City League Tournament', result: 'Design Award', highlight: true },
      { name: 'Oregon Championship – Gold Division', result: 'Competed' },
      { name: 'Oregon Championship', result: 'Competed' },
    ],
  },
  {
    year: '2023',
    game: 'CENTERSTAGE',
    league: 'Rose City League',
    note: 'Rookie Season',
    events: [
      { name: 'OR Rose City League Meet 0', result: 'Competed' },
      { name: 'OR Rose City League Meet 1', result: 'Competed' },
      { name: 'OR Rose City League Meet 2', result: 'Competed' },
      { name: 'OR Rose City League Meet 3', result: 'Competed' },
      { name: 'OR Rose City League Tournament', result: 'Control Award', highlight: true },
      { name: 'Oregon FTC Championship – Blue Division', result: 'Competed' },
      { name: 'Oregon FTC Championship', result: 'Competed' },
    ],
  },
]

const awards = [
  { year: '2025', award: 'Inspire Award 2nd Place', event: 'Iron Mountain League Tournament', icon: '◆' },
  { year: '2025', award: 'Finalist Alliance – 1st Team Selected', event: 'Iron Mountain League Tournament', icon: '🏆' },
  { year: '2025', award: 'Reach Award 2nd Place', event: 'Oregon State Championship', icon: '🥈' },
  { year: '2024', award: 'Design Award', event: 'Rose City League Tournament', icon: '🏆' },
  { year: '2023', award: 'Control Award', event: 'OR Rose City League Tournament', icon: '🏆' },
]

const milestones = [
  { year: '2023', label: 'Team Founded', desc: 'Wire Fire FTC #23260 founded in Lake Oswego, Oregon. Rookie season in CENTERSTAGE.' },
  { year: '2023', label: 'First Award', desc: 'Won the Control Award in our very first season at the Rose City League Tournament.' },
  { year: '2023', label: 'State Championship', desc: 'Advanced to the Oregon FTC Championship in our rookie year.' },
  { year: '2024', label: 'Design Award', desc: 'Earned the Design Award at the Rose City League Tournament during INTO THE DEEP season.' },
  { year: '2024', label: 'Back-to-Back States', desc: 'Qualified for Oregon Championship for the second consecutive year.' },
  { year: '2025', label: 'League Finals Finalists', desc: 'Named Finalist Alliance 1st Team Selected at Iron Mountain League Tournament.' },
  { year: '2025', label: 'Inspire Award', desc: 'Earned 2nd Place Inspire Award — the most prestigious award in FTC — at League Tournament.' },
  { year: '2025', label: 'State Reach Award', desc: 'Recognized for outstanding outreach and community engagement at Oregon State Championship.' },
]

export default function HistoryPage() {
  return (
    <main style={{ paddingTop: '68px' }}>
      {/* Hero */}
      <section style={{ padding: '4rem 1.5rem 3rem', background: 'var(--dark-mid)', borderBottom: '1px solid var(--dark-border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--fire), transparent)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// Team History</div>
          <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--white)', marginBottom: '0.75rem' }}>Our History</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Founded in 2023, Wire Fire has competed in 3 seasons and 21 official FTC events — earning awards and advancing to the Oregon State Championship every year.
          </p>
          {/* Quick stats */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            {[
              { label: 'Rookie Year', value: '2023' },
              { label: 'Seasons Competed', value: '3' },
              { label: 'Official Events', value: '21' },
              { label: 'Awards Won', value: '5' },
              { label: 'State Appearances', value: '3' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.75rem', fontWeight: 900, color: 'var(--fire)' }}>{s.value}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards wall */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>// Award History</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
            {awards.map((a, i) => (
              <div key={i} style={{
                background: 'var(--dark-card)', border: '1px solid rgba(255,69,0,0.2)',
                borderRadius: '0.75rem', padding: '1.25rem',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{a.icon}</div>
                <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.75rem', color: 'var(--fire)', letterSpacing: '0.1em', marginBottom: '0.35rem' }}>{a.year}</div>
                <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>{a.award}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{a.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Season results */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark-mid)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '2rem' }}>// Season Results</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {seasons.map(season => (
              <div key={season.year}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.25rem', fontWeight: 900, color: 'var(--white)' }}>{season.year}</div>
                  <div style={{ background: 'rgba(255,69,0,0.12)', border: '1px solid rgba(255,69,0,0.25)', color: 'var(--fire)', fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.65rem', borderRadius: '0.25rem', letterSpacing: '0.08em' }}>{season.game}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{season.league}</div>
                  {season.note && <div style={{ background: 'rgba(232,0,106,0.1)', border: '1px solid rgba(232,0,106,0.2)', color: 'var(--pink-soft)', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.65rem', borderRadius: '0.25rem' }}>{season.note}</div>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {season.events.map((e, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
                      background: e.highlight ? 'rgba(255,69,0,0.06)' : 'var(--dark-card)',
                      border: `1px solid ${e.highlight ? 'rgba(255,69,0,0.2)' : 'var(--dark-border)'}`,
                      borderRadius: '0.4rem', padding: '0.65rem 1rem', flexWrap: 'wrap',
                    }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: e.highlight ? 600 : 400 }}>{e.name}</span>
                      <span style={{ fontSize: '0.8rem', color: e.highlight ? 'var(--fire-bright)' : 'var(--text-dim)', whiteSpace: 'nowrap' }}>{e.result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline milestones */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '2rem' }}>// Milestones</div>
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            <div style={{ position: 'absolute', left: '7px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(180deg, var(--fire), transparent)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {milestones.map((m, i) => (
                <div key={i} style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-1.9rem', top: '4px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--fire)', boxShadow: '0 0 8px rgba(255,69,0,0.6)' }} />
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: 'var(--fire)', letterSpacing: '0.15em', marginBottom: '0.2rem' }}>{m.year}</div>
                  <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{m.label}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
