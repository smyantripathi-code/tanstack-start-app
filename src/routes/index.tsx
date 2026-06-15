import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

const stats = [
  { val: '#23260', label: 'Team Number' },
  { val: '3rd Year', label: 'Competing' },
  { val: '17', label: 'Team Members' },
  { val: '21', label: 'Official Events' },
]

const goals2026 = [
  { label: 'Top 15 at State', desc: 'Compete at the Oregon State Championship and finish in the top 15.', progress: null },
  { label: 'Win an Award', desc: 'Earn a judged award at a league or state level event.', progress: null },
  { label: 'Premier Event', desc: 'Qualify and compete at a premier FTC event beyond state.', progress: null },
  { label: '$15,000 Fundraising', desc: 'Reach financial independence through grants, sponsors, and community fundraising.', progress: null },
]

const highlights = [
  { title: 'Build', desc: 'We design and manufacture robots from scratch — chassis, drivetrains, arms, and custom mechanisms.' },
  { title: 'Code', desc: 'Our programmers write Java to control autonomous movement, sensors, and real-time driver input.' },
  { title: '3D Print & CAD', desc: 'Custom parts designed in CAD and printed in-house. We iterate fast and build smart.' },
  { title: 'Outreach', desc: 'From community fundraisers to robotics camps — we earn our way and give back.' },
]

function Home() {
  return (
    <main>
      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '0 1.5rem' }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'url(https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/AoP6qzaakqczVKbE/20240421_161748_2-YrDa6Rbn9aib6K4b.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.18) saturate(0.4)',
        }} />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          backgroundImage: 'linear-gradient(rgba(232,0,106,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,0,106,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,0,106,0.1) 0%, transparent 70%)', zIndex: 1, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', width: '100%', paddingTop: '7rem' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: 'var(--fire)', letterSpacing: '0.15em', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--fire)', animation: 'pulse-fire 2s ease-in-out infinite' }} />
            FIRST TECH CHALLENGE · LAKE OSWEGO, OREGON · 2026 SEASON
          </div>

          <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 900, lineHeight: 0.9, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            <span style={{ color: 'var(--white)', display: 'block' }}>WIRE</span>
            <span style={{ color: 'var(--fire)', display: 'block', textShadow: '0 0 60px rgba(232,0,106,0.5)' }}>FIRE</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.35em', letterSpacing: '0.15em', display: 'block', marginTop: '0.5rem' }}>#23260</span>
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2vw, 1.15rem)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            A competitive FTC robotics team from Lake Oswego, Oregon — 13 middle and high school students building robots, writing code, and chasing a premier event berth in our 2026 season.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <Link to="/robotics" style={{
              background: 'linear-gradient(135deg, var(--fire), var(--fire-glow))',
              color: 'white', textDecoration: 'none', padding: '0.85rem 2rem',
              borderRadius: '0.4rem', fontWeight: 700, fontSize: '0.9rem',
              letterSpacing: '0.04em', boxShadow: '0 0 24px rgba(232,0,106,0.4)',
              transition: 'box-shadow 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 40px rgba(232,0,106,0.7)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 24px rgba(232,0,106,0.4)')}>
              Our Robot
            </Link>
            <Link to="/team" style={{
              background: 'transparent', color: 'var(--text)', textDecoration: 'none',
              padding: '0.85rem 2rem', borderRadius: '0.4rem', fontWeight: 600, fontSize: '0.9rem',
              border: '1px solid rgba(255,255,255,0.15)', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--fire)'; e.currentTarget.style.color = 'var(--fire)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'var(--text)' }}>
              Meet the Team
            </Link>
            <Link to="/history" style={{
              background: 'rgba(232,0,106,0.08)', color: 'var(--pink-soft)', textDecoration: 'none',
              padding: '0.85rem 2rem', borderRadius: '0.4rem', fontWeight: 600, fontSize: '0.9rem',
              border: '1px solid rgba(232,0,106,0.2)', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(232,0,106,0.15)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(232,0,106,0.08)' }}>
              Our History
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {stats.map(s => (
              <div key={s.label} style={{ borderLeft: '2px solid var(--fire)', paddingLeft: '1rem' }}>
                <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: 'var(--white)' }}>{s.val}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.2rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--dark-mid)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>// Mission</div>
            <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--white)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
              More Than Just Building Robots
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.95rem' }}>
              Wire Fire #23260 is a third-year FTC team from Lake Oswego, Oregon. We are 17 middle and high school students learning to excel in engineering, programming, and design — but also in outreach, accounting, and running a real organization.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.95rem' }}>
              Our goal is financial independence: earning our own funding, reducing reliance on parents, and proving that students can run a serious, self-sustaining competitive team.
            </p>
            <div style={{ marginTop: '1.75rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {['STEM-Focused', 'Self-Funded', 'Community-Driven', '501(c)(3)'].map(tag => (
                <span key={tag} style={{
                  background: 'rgba(232,0,106,0.08)', color: 'var(--fire)',
                  border: '1px solid rgba(232,0,106,0.2)', borderRadius: '0.3rem',
                  padding: '0.3rem 0.75rem', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.05em',
                }}>{tag}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {highlights.map(h => (
              <div key={h.title} style={{
                background: 'var(--dark-card)', border: '1px solid var(--dark-border)',
                borderRadius: '0.75rem', padding: '1.25rem',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(232,0,106,0.3)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--dark-border)'; e.currentTarget.style.transform = 'none' }}>
                <div style={{ fontWeight: 700, color: 'var(--fire)', fontSize: '0.8rem', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>{h.title.toUpperCase()}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.6 }}>{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 SEASON GOALS */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--dark)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// 2026 Season</div>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--white)', marginBottom: '0.75rem' }}>Season Goals</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2.5rem', maxWidth: '520px', lineHeight: 1.7 }}>
            Our 2026 season is our most ambitious yet. Here's what we're working toward.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {goals2026.map((g, i) => (
              <div key={i} style={{
                background: 'var(--dark-card)', border: '1px solid var(--dark-border)',
                borderRadius: '0.75rem', padding: '1.5rem',
                borderLeft: '3px solid var(--fire)',
                transition: 'transform 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'none')}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--fire)', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>GOAL {String(i + 1).padStart(2, '0')}</div>
                <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{g.label}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.6 }}>{g.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSOR CTA */}
      <section style={{ padding: '4rem 1.5rem', background: 'var(--dark-mid)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// Support Us</div>
            <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.75rem' }}>Help Wire Fire Compete</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7 }}>
              We're working toward $15,000 in fundraising this season to cover registration fees, parts, travel, and outreach programs. Every contribution helps.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href="https://www.paypal.com/us/fundraiser/charity/4550355" target="_blank" rel="noopener noreferrer" style={{
              display: 'block', textAlign: 'center', background: 'linear-gradient(135deg, var(--fire), var(--fire-glow))',
              color: 'white', textDecoration: 'none', padding: '0.9rem 2rem',
              borderRadius: '0.4rem', fontWeight: 700, fontSize: '0.9rem',
              letterSpacing: '0.04em', boxShadow: '0 0 20px rgba(232,0,106,0.3)',
            }}>
              Donate via PayPal
            </a>
            <Link to="/sponsorship" style={{
              display: 'block', textAlign: 'center',
              background: 'transparent', color: 'var(--fire)', textDecoration: 'none',
              padding: '0.85rem 2rem', borderRadius: '0.4rem', fontWeight: 600, fontSize: '0.875rem',
              border: '1px solid rgba(232,0,106,0.3)',
            }}>
              Corporate Sponsorship Info
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
