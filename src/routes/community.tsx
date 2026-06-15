import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/community')({
  component: CommunityPage,
})

const outreachEvents = [
  { title: 'Season Kickoff Event', desc: 'Co-hosted the 2024 FTC Season Kickoff at Lake Oswego High School with 150+ attendees and 10+ teams. Featured educational presentations on CAD, Odometry, Engineering Portfolios, and more.', icon: '🏅', year: '2024' },
  { title: '2025 FTC Summer Camp', desc: 'Running a multi-day FTC robotics camp to introduce younger students to FIRST Tech Challenge - covering robot building, programming, and competition strategy.', icon: '🏆', year: '2025' },
  { title: 'Community Demos', desc: 'We bring our robot to local schools, libraries, and community events to demonstrate what FTC robotics looks like and inspire the next generation of builders and coders.', icon: '📍', year: 'Ongoing' },
  { title: 'Iron Mountain League Outreach', desc: 'Earned 2nd Place Reach Award at the 2025 Oregon State Championship for our ongoing commitment to recruiting new members and growing participation in FTC across the region.', icon: '🏆', year: '2025' },
]

const partners: { name: string; type: string; year: string }[] = []

function CollaborateModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: '', org: '', email: '', type: 'outreach', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = async () => {
    if (!form.email || !form.name) return
    setSent(true)
    const typeLabel = { outreach: 'Outreach / Demo', scrimmage: 'Scrimmage / Practice Match', mentorship: 'Mentorship', other: 'Other' }[form.type] || form.type
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'WIREFIRE_PLACEHOLDER',
          subject: `Collaboration Request: ${typeLabel} from ${form.org || form.name}`,
          to: 'wirefireftc@gmail.com',
          from_name: form.name,
          reply_to: form.email,
          name: form.name,
          organization: form.org,
          email: form.email,
          type: typeLabel,
          message: form.message,
          botcheck: '',
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error('failed')
    } catch {
      // Fallback
      const body = `Name: ${form.name}\nOrg: ${form.org}\nEmail: ${form.email}\nType: ${typeLabel}\n\nMessage:\n${form.message}`
      window.open(`mailto:wirefireftc@gmail.com?subject=${encodeURIComponent(`Collaboration Request: ${typeLabel} from ${form.org || form.name}`)}&body=${encodeURIComponent(body)}`)
    }
  }

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.75)', padding: '1rem' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div style={{ background: 'var(--dark-mid)', border: '1px solid rgba(255,0,106,0.3)', borderRadius: '1rem', padding: '2rem', width: '100%', maxWidth: '520px', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1.25rem' }}>✕</button>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.4rem' }}>// Let's Work Together</div>
        <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.4rem' }}>Collaborate with Wire Fire</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>Interested in a demo, scrimmage, mentorship, or other partnership? Tell us how we can work together.</p>

        {sent ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🔥</div>
            <div style={{ fontFamily: "'Orbitron', sans-serif", color: 'var(--fire)', fontWeight: 700, marginBottom: '0.5rem' }}>Email Opened!</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>We'll get back to you within 48 hours.</div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem' }}>
              {([['name', 'Your Name *'], ['org', 'Team / Organization']] as const).map(([key, label]) => (
                <div key={key}>
                  <label style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{label}</label>
                  <input value={form[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                    style={{ width: '100%', background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '0.4rem', padding: '0.6rem 0.8rem', color: 'var(--white)', fontSize: '0.85rem', outline: 'none' }} />
                </div>
              ))}
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Email *</label>
              <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                style={{ width: '100%', background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '0.4rem', padding: '0.6rem 0.8rem', color: 'var(--white)', fontSize: '0.85rem', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Type of Collaboration</label>
              <select value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                style={{ width: '100%', background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '0.4rem', padding: '0.6rem 0.8rem', color: 'var(--white)', fontSize: '0.85rem', outline: 'none' }}>
                <option value="outreach">Outreach / Demo</option>
                <option value="scrimmage">Scrimmage / Practice Match</option>
                <option value="mentorship">Mentorship</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Message</label>
              <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={3}
                placeholder="Tell us more about what you have in mind"
                style={{ width: '100%', background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '0.4rem', padding: '0.6rem 0.8rem', color: 'var(--white)', fontSize: '0.85rem', outline: 'none', resize: 'vertical' }} />
            </div>
            <button onClick={handleSubmit} style={{ background: 'linear-gradient(135deg, var(--fire), var(--fire-glow))', color: 'white', border: 'none', borderRadius: '0.4rem', padding: '0.85rem', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', letterSpacing: '0.04em', boxShadow: '0 0 20px rgba(255,0,106,0.3)' }}>
              Send Collaboration Request →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function CommunityPage() {
  const [showModal, setShowModal] = useState(false)

  return (
    <main style={{ paddingTop: '68px' }}>
      {showModal && <CollaborateModal onClose={() => setShowModal(false)} />}

      {/* Hero */}
      <section style={{ padding: '4rem 1.5rem 3rem', background: 'var(--dark-mid)', borderBottom: '1px solid var(--dark-border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--fire), transparent)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// Community & Outreach</div>
          <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--white)', marginBottom: '0.75rem' }}>Community</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.75rem' }}>
            Wire Fire is more than a competition team. We run events, mentor other teams, and bring robotics into our community - because inspiring the next generation is part of our mission.
          </p>
          <button onClick={() => setShowModal(true)} style={{
            background: 'linear-gradient(135deg, var(--fire), var(--fire-glow))',
            color: 'white', border: 'none', borderRadius: '0.5rem',
            padding: '0.85rem 1.75rem', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer',
            letterSpacing: '0.04em', boxShadow: '0 0 24px rgba(255,0,106,0.4)',
          }}>
            Collaborate With Us
          </button>
        </div>
      </section>

      {/* Outreach */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>// Outreach Activities</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {outreachEvents.map((o, i) => (
              <div key={i} style={{
                background: 'var(--dark-card)', border: '1px solid var(--dark-border)',
                borderRadius: '0.75rem', padding: '1.5rem',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,0,106,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--dark-border)')}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.75rem' }}>{o.icon}</span>
                  <span style={{ background: 'rgba(255,0,106,0.1)', border: '1px solid rgba(255,0,106,0.2)', color: 'var(--fire)', fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '0.25rem' }}>{o.year}</span>
                </div>
                <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{o.title}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.6 }}>{o.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Logos */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark-mid)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>// Partners & Sponsors</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
            {partners.map((p, i) => (
              <div key={i} style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '0.75rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', textAlign: 'center' }}>
                <img src={p.logo} alt={p.name} style={{ height: '52px', width: 'auto', objectFit: 'contain', filter: 'brightness(10) grayscale(1)', opacity: 0.55 }} />
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--white)', fontSize: '0.82rem', marginBottom: '0.2rem' }}>{p.name}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--fire)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{p.type} · {p.year}</div>
                </div>
              </div>
            ))}
            {/* Become a partner CTA card */}
            <div style={{ background: 'transparent', border: '2px dashed rgba(255,0,106,0.25)', borderRadius: '0.75rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textAlign: 'center', cursor: 'pointer' }}
              onClick={() => setShowModal(true)}>
              <div style={{ fontSize: '1.75rem' }}>+</div>
              <div style={{ color: 'var(--text-dim)', fontSize: '0.82rem' }}>Your logo here?</div>
              <div style={{ color: 'var(--fire)', fontSize: '0.78rem', fontWeight: 700 }}>Become a partner →</div>
            </div>
          </div>

          {/* Collaborate CTA */}
          <div style={{ background: 'rgba(255,0,106,0.06)', border: '1px solid rgba(255,0,106,0.2)', borderRadius: '0.75rem', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, color: 'var(--white)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>Want to collaborate?</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Whether you're a school, team, business, or community group - we'd love to connect.</div>
            </div>
            <button onClick={() => setShowModal(true)} style={{ background: 'linear-gradient(135deg, var(--fire), var(--fire-glow))', color: 'white', border: 'none', borderRadius: '0.4rem', padding: '0.75rem 1.5rem', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', whiteSpace: 'nowrap', boxShadow: '0 0 16px rgba(255,0,106,0.3)' }}>
              Collaborate With Us
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
