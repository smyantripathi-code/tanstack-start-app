import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/team')({
  component: TeamPage,
})

const members = [
  { first: 'Finley', last: 'Rosset' },
  { first: 'Beck', last: 'Fulkerson' },
  { first: 'Lucas', last: 'Kirk' },
  { first: 'Gavin', last: 'Kirk' },
  { first: 'Daon', last: 'Lee' },
  { first: 'Jae', last: 'Lee' },
  { first: 'Chase', last: 'Markham' },
  { first: 'Akmal', last: 'Mohaideen' },
  { first: 'Neil', last: 'Mudanai' },
  { first: 'Truman', last: 'Szekely-Johnson' },
  { first: 'Deek', last: 'Vasanth' },
  { first: 'Felix', last: 'Wang' },
  { first: 'Smyan', last: 'Tripathi' },
  { first: 'Wells', last: 'Montgomery' },
  { first: 'Noah', last: 'Kim' },
  { first: 'Grant', last: 'Clayburgh' },
]

const coaches = [
  { name: 'John', role: 'Coach' },
  { name: 'Vasanth', role: 'Coach' },
  { name: 'David', role: 'Mentor' },
]

const avatarColors = [
  'linear-gradient(135deg, #e8006a, #8b0040)',
  'linear-gradient(135deg, #c0005a, #6d0036)',
  'linear-gradient(135deg, #ff2d8a, #a30050)',
  'linear-gradient(135deg, #9a0048, #e8006a)',
]

function TeamPage() {
  return (
    <main style={{ paddingTop: '68px' }}>
      {/* Hero */}
      <section style={{
        padding: '4rem 1.5rem 3rem',
        background: 'linear-gradient(180deg, var(--dark-mid) 0%, var(--dark) 100%)',
        borderBottom: '1px solid var(--dark-border)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--fire), transparent)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// 2026 Roster</div>
          <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--white)', marginBottom: '0.75rem' }}>
            Wire Fire <span style={{ color: 'var(--fire)' }}>#23260</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.7, fontSize: '0.95rem' }}>
            17 middle and high school students from Lake Oswego — dedicated to engineering, programming, and pushing Wire Fire further than ever in our 2026 season.
          </p>
        </div>
      </section>

      {/* Team photo placeholder */}
      <section style={{ padding: '3rem 1.5rem', background: 'var(--dark)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '1.25rem' }}>// Team Photo</div>
          <div style={{
            border: '2px dashed rgba(232,0,106,0.25)', borderRadius: '1rem',
            padding: '3rem', textAlign: 'center',
            background: 'rgba(232,0,106,0.03)',
          }}>
            <div style={{ fontFamily: "'Orbitron', sans-serif", color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Team Photo</div>
            <div style={{ color: 'var(--text-dim)', fontSize: '0.78rem' }}>Drop your team photo here to show it on this page</div>
          </div>
        </div>
      </section>

      {/* Members grid */}
      <section style={{ padding: '1rem 1.5rem 3rem', background: 'var(--dark)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>
            // {members.length} Team Members
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '1rem' }}>
            {members.map((m, i) => (
              <div key={`${m.first}-${i}`} style={{
                background: 'var(--dark-card)', border: '1px solid var(--dark-border)',
                borderRadius: '0.75rem', padding: '1.25rem', textAlign: 'center',
                transition: 'border-color 0.2s, transform 0.15s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(232,0,106,0.35)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--dark-border)'; e.currentTarget.style.transform = 'none' }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%', margin: '0 auto 0.75rem',
                  background: avatarColors[i % avatarColors.length],
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: '1.1rem', color: 'white',
                }}>
                  {m.first[0]}
                </div>
                <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.9rem' }}>{m.first}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '0.15rem' }}>{m.last}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section style={{ padding: '3rem 1.5rem', background: 'var(--dark-mid)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>// Coaches & Mentors</div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {coaches.map(c => (
              <div key={c.name} style={{
                background: 'var(--dark-card)', border: '1px solid rgba(232,0,106,0.2)',
                borderRadius: '0.75rem', padding: '1.25rem 1.75rem', minWidth: '160px',
              }}>
                <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, color: 'var(--white)', marginBottom: '0.25rem' }}>{c.name}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{c.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
