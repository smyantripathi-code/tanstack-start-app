import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/join')({
  component: JoinPage,
})

function JoinPage() {
  return (
    <main style={{ paddingTop: '68px', minHeight: '100vh' }}>
      <section style={{ padding: '4rem 1.5rem', background: 'var(--dark-mid)', borderBottom: '1px solid var(--dark-border)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--fire), transparent)' }} />
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// Join the Team</div>
          <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: 'var(--white)', marginBottom: '1rem' }}>Join Wire Fire</h1>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.75rem' }}>
            Interested in joining Team Wire Fire #23260? We're always looking for dedicated middle and high school students from Lake Oswego who are passionate about robotics, coding, design, outreach, or business.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.88rem', marginBottom: '2rem' }}>
            Open roles include: Build and Mechanical, Programming, CAD and 3D Printing, Outreach and Social Media, Accounting and Finance, and Fundraising. No prior robotics experience is required.
          </p>
          <a href="mailto:wirefireftc@gmail.com?subject=I want to join Wire Fire FTC" style={{
            display: 'inline-block', background: 'linear-gradient(135deg, var(--fire), var(--fire-glow))',
            color: 'white', textDecoration: 'none', padding: '0.9rem 2rem',
            borderRadius: '0.4rem', fontWeight: 700, fontSize: '0.9rem',
            boxShadow: '0 0 20px rgba(255,0,106,0.3)',
          }}>
            Email Us to Apply →
          </a>
        </div>
      </section>
    </main>
  )
}
