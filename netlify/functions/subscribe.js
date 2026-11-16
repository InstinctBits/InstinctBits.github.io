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
    body: JSON.stringify({ email, subscribed: true, data: { source: 'instinctbits.com' } }),
  })
  if (!contact.ok) return json({ error: 'Could not subscribe' }, 502)

  const members = await fetch(`${API}/segments/${SEGMENT_ID}/members`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ emails: [email] }),
  })
  const result = await members.json().catch(() => null)
  if (!members.ok || !result || (result.notFound || []).length) {
    return json({ error: 'Could not subscribe' }, 502)
  }

  return json({ ok: true }, 200)
}
