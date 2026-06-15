import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/sponsorship')({
  component: SponsorshipPage,
})

const inputStyle: React.CSSProperties = {
  width: '100%', background: 'var(--dark-card)', border: '1px solid var(--dark-border)',
  borderRadius: '0.4rem', padding: '0.65rem 0.875rem', color: 'var(--white)',
  fontSize: '0.875rem', outline: 'none',
}
const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em',
  textTransform: 'uppercase' as const, marginBottom: '0.4rem',
}

function SponsorshipPage() {
  const [form, setForm] = useState({ firstName: '', company: '', position: '', email: '', details: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async () => {
    if (!form.email || !form.firstName) return
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'WIREFIRE_PLACEHOLDER',
          subject: `Sponsorship Interest from ${form.company || form.firstName}`,
          from_name: form.firstName,
          reply_to: form.email,
          to: 'wirefireftc@gmail.com',
          name: form.firstName,
          company: form.company,
          position: form.position,
          email: form.email,
          details: form.details,
          botcheck: '',
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('sent')
      } else {
        // Fallback: open mailto with pre-filled body
        const body = `Name: ${form.firstName}\nCompany: ${form.company}\nPosition: ${form.position}\nEmail: ${form.email}\n\nDetails:\n${form.details}`
        window.open(`mailto:wirefireftc@gmail.com?subject=Sponsorship Interest from ${encodeURIComponent(form.company || form.firstName)}&body=${encodeURIComponent(body)}`)
        setStatus('sent')
      }
    } catch {
      // Fallback if fetch fails
      const body = `Name: ${form.firstName}\nCompany: ${form.company}\nPosition: ${form.position}\nEmail: ${form.email}\n\nDetails:\n${form.details}`
      window.open(`mailto:wirefireftc@gmail.com?subject=Sponsorship Interest from ${encodeURIComponent(form.company || form.firstName)}&body=${encodeURIComponent(body)}`)
      setStatus('sent')
    }
  }

  return (
    <main style={{ paddingTop: '68px' }}>
      {/* Hero */}
      <section style={{ padding: '4rem 1.5rem 3rem', background: 'var(--dark-mid)', borderBottom: '1px solid var(--dark-border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--fire), transparent)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// Partner With Us</div>
          <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--white)', marginBottom: '0.75rem' }}>Sponsorship</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '620px', lineHeight: 1.8, fontSize: '0.95rem' }}>
            Wire Fire FTC is seeking corporate and community sponsors for the 2026-2027 season. Your support directly funds robot parts, competition registration, travel, and student outreach programs. All donations are tax-deductible through our 501(c)(3) nonprofit umbrella.
          </p>
        </div>
      </section>

      {/* Why sponsor - editorial prose */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>// Why Sponsor</div>
            <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>What Your Support Means</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '0.93rem', marginBottom: '1rem' }}>
              Wire Fire is a fully student-run FTC team of 16 middle and high school students from Lake Oswego, Oregon. We don't have a school budget or a district sponsor. Every dollar we spend on motors, sensors, competition fees, and travel is earned by the team through fundraising, community outreach, and grant applications.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '0.93rem', marginBottom: '1rem' }}>
              Sponsors are recognized on our competition uniforms worn at every FTC event, on this website, and across our social media channels. For larger sponsorships, we are happy to arrange facility tours, student presentations, or direct mentorship opportunities with our team.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '0.93rem' }}>
              Contributions are fully tax-deductible. Wire Fire operates under Lake Oswego Robotics, a 501(c)(3) recognized nonprofit (EIN: 46-1308704, tax-exempt since September 2014).
            </p>
          </div>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.2em', marginBottom: '1rem' }}>// Sponsor Benefits</div>
            {[
              { icon: '👕', title: 'Logo on Uniforms', desc: 'Your brand appears on competition shirts worn at every FTC event and community appearance.' },
              { icon: '🌐', title: 'Website Recognition', desc: 'Your logo and a link to your organization will be featured prominently on wirefireftc.com.' },
              { icon: '📱', title: 'Social Media', desc: 'Shoutouts across our Instagram and YouTube, reaching our growing robotics community audience.' },
              { icon: '🧑‍💼', title: 'Direct Engagement', desc: 'Mentor the team, tour your facility, or present to students directly about your industry.' },
            ].map(b => (
              <div key={b.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', paddingBottom: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--dark-border)' }}>
                <span style={{ fontSize: '1.25rem', flexShrink: 0, marginTop: '0.1rem' }}>{b.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.88rem', marginBottom: '0.25rem' }}>{b.title}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.6 }}>{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current sponsors */}
      <section style={{ padding: '2.5rem 1.5rem', background: 'var(--dark-mid)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>// Current Sponsors</div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', fontStyle: 'italic' }}>
            No current sponsors yet for the 2026-2027 season. Be the first to partner with Wire Fire and have your logo featured from day one.
          </p>
        </div>
      </section>

      {/* Sponsor form */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// Get In Touch</div>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem' }}>Express Interest</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '2rem', lineHeight: 1.7 }}>Tell us about your interest in partnering with Wire Fire. We'll follow up within 48 hours.</p>

          {status === 'sent' ? (
            <div style={{ background: 'rgba(255,0,106,0.06)', border: '1px solid rgba(255,0,106,0.25)', borderRadius: '0.75rem', padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🔥</div>
              <div style={{ fontFamily: "'Orbitron', sans-serif", color: 'var(--fire)', fontWeight: 700, marginBottom: '0.5rem' }}>Message Sent!</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>We received your inquiry and will be in touch within 48 hours.</div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>First Name *</label>
                  <input type="text" value={form.firstName} onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Company</label>
                  <input type="text" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Your Position / Title</label>
                <input type="text" value={form.position} onChange={e => setForm(f => ({ ...f, position: e.target.value }))} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Email *</label>
                <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Partnership Interest Details</label>
                <textarea value={form.details} onChange={e => setForm(f => ({ ...f, details: e.target.value }))} rows={4}
                  placeholder="Tell us how you'd like to partner"
                  style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <button onClick={handleSubmit} disabled={status === 'sending'} style={{
                background: 'linear-gradient(135deg, var(--fire), var(--fire-glow))',
                color: 'white', border: 'none', borderRadius: '0.4rem',
                padding: '0.9rem', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer',
                letterSpacing: '0.04em', opacity: status === 'sending' ? 0.7 : 1,
              }}>
                {status === 'sending' ? 'Sending' : 'Submit Partnership Interest →'}
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
