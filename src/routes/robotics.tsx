import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/robotics')({
  component: RoboticsPage,
})

function RoboticsPage() {
  return (
    <main style={{ paddingTop: '68px' }}>
      <section style={{ padding: '4rem 1.5rem 3rem', background: 'var(--dark-mid)', borderBottom: '1px solid var(--dark-border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--fire), transparent)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// About FTC</div>
          <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--white)', marginBottom: '0.75rem' }}>
            Robotics
          </h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', lineHeight: 1.7, fontSize: '0.95rem' }}>
            FIRST Tech Challenge (FTC) is a robotics competition for middle and high school students, part of the broader FIRST program inspiring young people to pursue STEM careers.
          </p>
        </div>
      </section>

      {/* What is FTC */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--electric)', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>// What is FTC?</div>
            <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>FIRST Tech Challenge</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.9rem', marginBottom: '1rem' }}>
              Each season, FTC releases a new game with specific objectives. Teams design, build, and program robots to compete — a blend of engineering challenges, programming, and teamwork.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.9rem' }}>
              Robots are programmed in Java or Blocks, performing both a 30-second autonomous period and a driver-controlled period in each 2-minute match.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { num: '01', title: 'Design & Build', desc: 'Teams design robots from scratch with motors, sensors, and custom fabricated parts.' },
              { num: '02', title: 'Programming', desc: 'Students code autonomous and driver-controlled behavior in Java or Blocks.' },
              { num: '03', title: 'Competition', desc: '2-minute matches: 30s autonomous + 90s driver-controlled. Points for objectives.' },
              { num: '04', title: 'Judging', desc: 'Teams are also judged on engineering process, design notebook, and presentation.' },
            ].map(item => (
              <div key={item.num} style={{
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
                background: 'var(--dark-card)', border: '1px solid var(--dark-border)',
                borderRadius: '0.5rem', padding: '0.875rem 1rem',
              }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--fire)', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0, marginTop: '0.1rem' }}>{item.num}</span>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.875rem', marginBottom: '0.2rem' }}>{item.title}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Robots */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark-mid)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>// 2023 Season</div>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.75rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem' }}>Our Robots</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '560px', fontSize: '0.9rem', lineHeight: 1.7 }}>
            Our 2023 design philosophy: minimize complexity, maximize reliability. Compact moving parts, no excess weight.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { name: 'Robot 1', type: 'Push Bot', highScore: '67', competitions: 'Meet 0, 1, and 2', desc: 'Our first competition robot — simple, reliable, and built to get us on the field fast.' },
              { name: 'Robot 2', type: 'Multi-functional', highScore: '140', competitions: 'Meet 3, Qualifier, and State', desc: 'A full redesign with expanded capabilities, built on lessons learned from Robot 1.' },
            ].map(r => (
              <div key={r.name} style={{
                background: 'var(--dark-card)', border: '1px solid var(--dark-border)',
                borderRadius: '0.75rem', overflow: 'hidden',
              }}>
                <div style={{ background: 'linear-gradient(135deg, rgba(255,69,0,0.1), rgba(0,212,255,0.05))', padding: '2rem', textAlign: 'center', borderBottom: '1px solid var(--dark-border)' }}>
                  <div style={{ fontSize: '3rem' }}>🤖</div>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div>
                      <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, color: 'var(--white)', fontSize: '1rem' }}>{r.name}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.1em' }}>{r.type.toUpperCase()}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.5rem', fontWeight: 900, color: 'var(--fire)' }}>{r.highScore}</div>
                      <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>HIGH SCORE</div>
                    </div>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.5, marginBottom: '0.75rem' }}>{r.desc}</p>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                    <span style={{ color: 'var(--electric)', marginRight: '0.4rem' }}>Competed:</span>{r.competitions}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube embeds */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>// Match Footage</div>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1.5rem' }}>Watch Us Compete</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { id: 'kkhg-ntrcYs', title: "Team Wire Fire's First Match, Rose City League 2023" },
              { id: '-exSmCcoY1E', title: 'What is First Tech Challenge (FTC)?' },
            ].map(v => (
              <div key={v.id}>
                <div style={{ borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid var(--dark-border)', marginBottom: '0.75rem' }}>
                  <iframe
                    width="100%" height="220"
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ display: 'block', border: 'none' }}
                  />
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{v.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
