const SEGMENT_ID = '3fd37513-d557-4131-b31c-65e73d3b4aa6'
const API = 'https://api.pulse.digitechnomads.com'

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  })
}

export default async (req) => {
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405)

  let email = ''
  let trap = ''
  try {
    const body = await req.json()
    email = String(body.email || '').trim().toLowerCase()
    trap = String(body.company || '')
  } catch {
    return json({ error: 'Invalid request' }, 400)
  }

  if (trap) return json({ ok: true }, 200)
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return json({ error: 'Enter a valid email' }, 400)
  }

  const key = process.env.PLUNK_SECRET_KEY
  if (!key) return json({ error: 'Subscribe is not configured' }, 500)

  const headers = {
    authorization: `Bearer ${key}`,
    'content-type': 'application/json',
  }
  const contact = await fetch(`${API}/contacts`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, subscribed: true }),
  })
  if (!contact.ok) return json({ error: 'Could not subscribe' }, 502)
  const contactBody = await contact.json().catch(() => ({}))

  const members = await fetch(`${API}/segments/${SEGMENT_ID}/members`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ emails: [email] }),
  })
  const result = await members.json().catch(() => null)
  if (!members.ok || !result || (result.notFound || []).length) {
    return json({ error: 'Could not subscribe' }, 502)
  }

  if (contactBody.data?.welcomed === true) return json({ ok: true }, 200)

  const sent = await fetch(`${API}/v1/send`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      to: email,
      from: 'no-reply@pulse.digitechnomads.com',
      fromName: 'Instinct Bits',
      subject: "You're on the Instinct Bits list",
      body: '<p>You subscribed for updates from Instinct Bits.</p><p>We will write when there is something to say: the lab, ConvergioAI, and the communities.</p><p>If you do not want these emails, <a href="{{unsubscribeUrl}}">unsubscribe</a>.</p>',
      subscribed: true,
    }),
  })
  if (!sent.ok) return json({ error: 'Subscribed, but the confirmation email failed' }, 502)

  await fetch(`${API}/contacts`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      email,
      subscribed: true,
      data: { source: 'instinctbits.com', welcomed: true },
    }),
  })

  return json({ ok: true }, 200)
}
