import { NextRequest, NextResponse } from 'next/server'

/*
  Kontaktformular API-Route
  ─────────────────────────
  Benötigt RESEND_API_KEY in .env.local:
    RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

  Einrichtung (kostenlos, 3 min):
  1. resend.com → Account erstellen
  2. API Key generieren
  3. .env.local erstellen: RESEND_API_KEY=re_...
  4. Domain verifizieren (optional für Custom-From-Adresse)

  Ohne API Key: Anfragen werden in der Konsole geloggt (dev-Modus).
*/

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, projectType, budget, message } = body

    // Validation
    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: 'Name und E-Mail sind erforderlich.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Bitte eine gültige E-Mail-Adresse eingeben.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      // Kein API Key → in Konsole loggen (Entwicklungsmodus)
      console.log('\n📬 Neue Kontaktanfrage (kein RESEND_API_KEY konfiguriert):')
      console.log('─────────────────────────────────────────')
      console.log(`Name:        ${name}`)
      console.log(`E-Mail:      ${email}`)
      console.log(`Projekttyp:  ${projectType || '—'}`)
      console.log(`Budget:      ${budget || '—'}`)
      console.log(`Nachricht:   ${message || '—'}`)
      console.log('─────────────────────────────────────────\n')
      return NextResponse.json({ success: true })
    }

    const html = `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><title>Neue Anfrage</title></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f4f4f4; padding: 2rem;">
  <div style="max-width: 560px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
    <div style="background: #09090F; padding: 1.5rem 2rem; border-bottom: 3px solid #FF4D00;">
      <h1 style="margin: 0; color: #F4EFE6; font-size: 1.25rem; font-weight: 600; letter-spacing: -0.01em;">
        PixelCraft Media — Neue Anfrage
      </h1>
    </div>
    <div style="padding: 2rem;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 0.75rem 0; color: #888; font-size: 0.8125rem; text-transform: uppercase; letter-spacing: 0.08em; width: 130px; vertical-align: top;">Name</td>
          <td style="padding: 0.75rem 0; font-weight: 600; color: #111; border-bottom: 1px solid #f0f0f0;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0; color: #888; font-size: 0.8125rem; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top;">E-Mail</td>
          <td style="padding: 0.75rem 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #FF4D00; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0; color: #888; font-size: 0.8125rem; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top;">Projekttyp</td>
          <td style="padding: 0.75rem 0; border-bottom: 1px solid #f0f0f0; color: #111;">${projectType || '—'}</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0; color: #888; font-size: 0.8125rem; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top;">Budget</td>
          <td style="padding: 0.75rem 0; border-bottom: 1px solid #f0f0f0; color: #111;">${budget || '—'}</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0; color: #888; font-size: 0.8125rem; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top;">Nachricht</td>
          <td style="padding: 0.75rem 0; color: #111; line-height: 1.6;">${message ? message.replace(/\n/g, '<br>') : '—'}</td>
        </tr>
      </table>
      <div style="margin-top: 2rem; padding: 1rem 1.25rem; background: #FFF8F5; border-left: 3px solid #FF4D00; border-radius: 0 4px 4px 0;">
        <p style="margin: 0; font-size: 0.875rem; color: #666;">
          Antwortzeit: <strong style="color: #111;">&lt; 24 Stunden</strong>
        </p>
      </div>
    </div>
    <div style="padding: 1rem 2rem; background: #f9f9f9; border-top: 1px solid #eee;">
      <p style="margin: 0; font-size: 0.75rem; color: #aaa;">PixelCraft Media — info@pixelcraft-media.de</p>
    </div>
  </div>
</body>
</html>`

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'PixelCraft Media <onboarding@resend.dev>',
        to: ['info@pixelcraft-media.de'],
        reply_to: email,
        subject: `Neue Anfrage von ${name}${projectType ? ` — ${projectType}` : ''}`,
        html,
      }),
    })

    if (!res.ok) {
      const errorText = await res.text()
      console.error('[Contact API] Resend error:', res.status, errorText)
      return NextResponse.json(
        { error: 'E-Mail konnte nicht gesendet werden. Bitte versuche es erneut.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact API] Unhandled error:', err)
    return NextResponse.json(
      { error: 'Serverfehler. Bitte versuche es erneut oder schreib uns direkt.' },
      { status: 500 }
    )
  }
}
