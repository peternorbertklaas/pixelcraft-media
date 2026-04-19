exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  let body
  try {
    body = JSON.parse(event.body)
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) }
  }

  const { name, email, projectType, budget, message } = body

  if (!name || !email) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Name und E-Mail sind erforderlich.' }) }
  }

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#FF4D00;margin-bottom:24px">Neue Projektanfrage</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;color:#666;width:140px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
        <tr><td style="padding:8px 0;color:#666">E-Mail</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
        ${projectType ? `<tr><td style="padding:8px 0;color:#666">Projekttyp</td><td style="padding:8px 0">${projectType}</td></tr>` : ''}
        ${budget ? `<tr><td style="padding:8px 0;color:#666">Budget</td><td style="padding:8px 0">${budget}</td></tr>` : ''}
      </table>
      ${message ? `<div style="margin-top:24px"><p style="color:#666;margin-bottom:8px">Nachricht</p><p style="background:#f5f5f5;padding:16px;border-radius:4px;white-space:pre-wrap">${message}</p></div>` : ''}
      <hr style="margin-top:32px;border:none;border-top:1px solid #eee"/>
      <p style="color:#999;font-size:12px;margin-top:16px">Gesendet über pixelcraft-media.de</p>
    </div>
  `

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'PixelCraft Media <noreply@pixelcraft-media.de>',
      to: ['info@pixelcraft-media.de', 'schroeder.peter@gmx.de'],
      reply_to: email,
      subject: `Neue Anfrage: ${projectType || 'Webdesign'} — ${name}`,
      html,
    }),
  })

  if (res.ok) {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true }),
    }
  }

  const err = await res.text()
  console.error('Resend error:', err)
  return {
    statusCode: 500,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ error: 'E-Mail konnte nicht gesendet werden.' }),
  }
}
