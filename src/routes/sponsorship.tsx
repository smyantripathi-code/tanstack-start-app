import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/sponsorship')({
  component: SponsorshipPage,
})

function SponsorshipPage() {
  const [form, setForm] = useState({ firstName: '', company: '', position: '', email: '', details: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (!form.email) return
    const mailto = `mailto:wirefireftc@gmail.com?subject=Sponsorship Interest from ${form.company}&body=Name: ${form.firstName}%0ACompany: ${form.company}%0APosition: ${form.position}%0AEmail: ${form.email}%0ADetails: ${form.details}`
    window.open(mailto)
    setSubmitted(true)
  }

  return (
    <main style={{ paddingTop: '68px' }}>
      {/* Hero */}
      <section style={{ padding: '4rem 1.5rem 3rem', background: 'var(--dark-mid)', borderBottom: '1px solid var(--dark-border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--fire), transparent)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// Partner With Us</div>
          <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--white)', marginBottom: '0.75rem' }}>Sponsorship</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Partner with Wire Fire FTC and help shape the next generation of engineers, programmers, and innovators from Lake Oswego, Oregon.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>// Why Sponsor</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
            {[
              { icon: '👕', title: 'Logo on Uniforms', desc: 'Your brand on our competition uniforms, worn at every FTC event and outreach activity.' },
              { icon: '🌐', title: 'Website Recognition', desc: 'Your logo and link prominently displayed on wirefireftc.com.' },
              { icon: '📱', title: 'Social Media Shoutouts', desc: 'Promoted on our Instagram and YouTube to our growing community audience.' },
              { icon: '🧑‍💼', title: 'Mentorship Opportunities', desc: 'Engage directly with the team — mentor, tour your facility, or present to students.' },
              { icon: '💸', title: 'Tax-Deductible', desc: 'All contributions are fully tax-deductible through our 501(c)(3) nonprofit umbrella.' },
              { icon: '🌱', title: 'Community Impact', desc: 'Directly fund STEM education and inspire young people in your community.' },
            ].map(b => (
              <div key={b.title} style={{
                background: 'var(--dark-card)', border: '1px solid var(--dark-border)',
                borderRadius: '0.75rem', padding: '1.25rem',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,69,0,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--dark-border)')}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.6rem' }}>{b.icon}</div>
                <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.9rem', marginBottom: '0.4rem' }}>{b.title}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.5 }}>{b.desc}</div>
              </div>
            ))}
          </div>

          {/* Current sponsors */}
          <div style={{ borderTop: '1px solid var(--dark-border)', paddingTop: '2.5rem' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>// Current Sponsors</div>
            <div style={{ color: 'var(--text-dim)', fontSize: '0.85rem', fontStyle: 'italic', marginBottom: '0.75rem', fontFamily: "'JetBrains Mono', monospace" }}>
              // No current sponsors — be the first for 2026
            </div>
            <div style={{
              border: '2px dashed rgba(255,69,0,0.2)', borderRadius: '0.75rem',
              padding: '1.5rem', textAlign: 'center', marginTop: '1rem',
            }}>
              <div style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>Your logo here?</div>
              <div style={{ color: 'var(--fire)', fontSize: '0.8rem', fontWeight: 600 }}>Become a sponsor today →</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor form */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark-mid)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// Get In Touch</div>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem' }}>Express Interest</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '2rem' }}>Tell us about your interest in partnering — mentoring, donating, or touring. We'll follow up within 48 hours.</p>

          {submitted ? (
            <div style={{ background: 'rgba(255,69,0,0.08)', border: '1px solid rgba(255,69,0,0.25)', borderRadius: '0.75rem', padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🔥</div>
              <div style={{ fontFamily: "'Orbitron', sans-serif", color: 'var(--fire)', fontWeight: 700, marginBottom: '0.5rem' }}>Email Opened!</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Send the pre-filled email to reach our team. We'll follow up quickly!</div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[['firstName', 'First Name', 'text'], ['company', 'Company', 'text']].map(([key, label, type]) => (
                  <div key={key}>
                    <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{label}</label>
                    <input type={type} value={form[key as keyof typeof form]}
                      onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      style={{ width: '100%', background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '0.4rem', padding: '0.65rem 0.875rem', color: 'var(--white)', fontSize: '0.875rem', outline: 'none' }} />
                  </div>
                ))}
              </div>
              {[['position', 'Your Position / Title', 'text'], ['email', 'Email *', 'email']].map(([key, label, type]) => (
                <div key={key}>
                  <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{label}</label>
                  <input type={type} value={form[key as keyof typeof form]}
                    onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                    style={{ width: '100%', background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '0.4rem', padding: '0.65rem 0.875rem', color: 'var(--white)', fontSize: '0.875rem', outline: 'none' }} />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Partnership Interest Details</label>
                <textarea value={form.details} onChange={e => setForm(f => ({ ...f, details: e.target.value }))} rows={4}
                  placeholder="Tell us how you'd like to partner..."
                  style={{ width: '100%', background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '0.4rem', padding: '0.65rem 0.875rem', color: 'var(--white)', fontSize: '0.875rem', outline: 'none', resize: 'vertical' }} />
              </div>
              <button onClick={handleSubmit} style={{
                background: 'linear-gradient(135deg, var(--fire), var(--fire-glow))',
                color: 'white', border: 'none', borderRadius: '0.4rem',
                padding: '0.9rem', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer',
                letterSpacing: '0.04em', boxShadow: '0 0 20px rgba(255,69,0,0.3)',
              }}>
                Submit Partnership Interest →
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
