import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <main style={{ paddingTop: '68px', minHeight: '100vh' }}>
      <section style={{ padding: '4rem 1.5rem', background: 'var(--dark-mid)', borderBottom: '1px solid var(--dark-border)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--fire), transparent)' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// Get In Touch</div>
          <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: 'var(--white)', marginBottom: '2rem' }}>Contact</h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              { icon: '📧', label: 'Email', value: 'wirefireftc@gmail.com', href: 'mailto:wirefireftc@gmail.com' },
              { icon: '📸', label: 'Instagram', value: '@wirefireftc23260', href: 'https://www.instagram.com/wirefireftc23260/' },
              { icon: '▶️', label: 'YouTube', value: '@Wirefire_FTC', href: 'https://www.youtube.com/@Wirefire_FTC' },
              { icon: '💳', label: 'Donate', value: 'PayPal Giving Fund', href: 'https://www.paypal.com/us/fundraiser/charity/4550355' },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" style={{
                display: 'block', background: 'var(--dark-card)', border: '1px solid var(--dark-border)',
                borderRadius: '0.75rem', padding: '1.5rem', textDecoration: 'none',
                transition: 'border-color 0.2s, transform 0.15s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,69,0,0.3)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--dark-border)'; e.currentTarget.style.transform = 'none' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.6rem' }}>{c.icon}</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--fire)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.3rem' }}>{c.label}</div>
                <div style={{ color: 'var(--text)', fontSize: '0.85rem', fontWeight: 500 }}>{c.value}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
