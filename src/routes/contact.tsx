import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <main style={{ paddingTop: '68px', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ padding: '4rem 1.5rem 3rem', background: 'var(--dark-mid)', borderBottom: '1px solid var(--dark-border)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--fire), transparent)' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// Get In Touch</div>
          <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: 'var(--white)', marginBottom: '0.75rem' }}>Contact</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.93rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '520px' }}>
            Fill out the form below or reach us directly through any of these channels.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '360px' }}>
            {[
              { icon: '📧', label: 'Email', value: 'wirefireftc@gmail.com', href: 'mailto:wirefireftc@gmail.com' },
              { icon: '📸', label: 'Instagram', value: '@wirefireftc23260', href: 'https://www.instagram.com/wirefireftc23260/' },
              { icon: '▶️', label: 'YouTube', value: '@Wirefire_FTC', href: 'https://www.youtube.com/@Wirefire_FTC' },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                color: 'inherit', textDecoration: 'none',
                paddingBottom: '1rem', borderBottom: '1px solid var(--dark-border)',
              }}>
                <span style={{ fontSize: '1.1rem', flexShrink: 0, width: '1.75rem', textAlign: 'center' }}>{c.icon}</span>
                <div>
                  <div style={{ fontSize: '0.62rem', color: 'var(--fire)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.15rem' }}>{c.label}</div>
                  <div style={{ color: 'var(--text)', fontSize: '0.88rem', fontWeight: 500 }}>{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Google Form */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.2em', marginBottom: '1.25rem' }}>// Contact Form</div>
          <iframe
            src="https://forms.gle/d8MW1heTJ6eZ9wTo6"
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Wire Fire Contact Form"
            style={{
              borderRadius: '0.75rem',
              border: '1px solid var(--dark-border)',
              background: 'white',
              display: 'block',
            }}
          >
            Loading form...
          </iframe>
        </div>
      </section>
    </main>
  )
}
