import { Resend } from "resend"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

type ContactPayload = {
  name: string
  email: string
  projectType: string
  message: string
}

type ParseBodyResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string }

const GENERIC_SEND_ERROR = "Failed to send message. Please try again."
const GENERIC_CONFIG_ERROR = "Server configuration error. Please try again later."

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0
}

/** Basic @ format: single @ with non-whitespace local and domain */
function isValidEmailFormat(email: string): boolean {
  return /^\S+@\S+$/.test(email.trim())
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function buildContactEmailHtml(payload: ContactPayload): string {
  const name = escapeHtml(payload.name.trim())
  const email = escapeHtml(payload.email.trim())
  const mailtoHref = encodeURIComponent(payload.email.trim())
  const projectType = escapeHtml(
    payload.projectType.trim() ? payload.projectType.trim() : "—"
  )
  const message = escapeHtml(payload.message.trim()).replace(/\r\n/g, "<br/>").replace(/\n/g, "<br/>")

  return `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:24px;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background-color:#f4f4f5;color:#18181b;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;margin:0 auto;background-color:#ffffff;border-radius:8px;border:1px solid #e4e4e7;overflow:hidden;">
      <tr>
        <td style="padding:24px 28px;background:linear-gradient(135deg,#4f46e5 0%,#7c3aed 100%);color:#ffffff;">
          <p style="margin:0;font-size:14px;font-weight:600;letter-spacing:0.02em;">New discovery call request</p>
          <p style="margin:8px 0 0;font-size:20px;font-weight:700;">${name}</p>
        </td>
      </tr>
      <tr>
        <td style="padding:28px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="font-size:14px;line-height:1.6;color:#3f3f46;">
            <tr>
              <td style="padding:0 0 16px;border-bottom:1px solid #e4e4e7;">
                <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#71717a;">Name</p>
                <p style="margin:0;font-weight:500;color:#18181b;">${name}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 0;border-bottom:1px solid #e4e4e7;">
                <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#71717a;">Email</p>
                <p style="margin:0;font-weight:500;color:#18181b;"><a href="mailto:${mailtoHref}" style="color:#4f46e5;text-decoration:none;">${email}</a></p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 0;border-bottom:1px solid #e4e4e7;">
                <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#71717a;">Project type</p>
                <p style="margin:0;font-weight:500;color:#18181b;">${projectType}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 0 0;">
                <p style="margin:0 0 8px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#71717a;">Message</p>
                <div style="margin:0;padding:14px 16px;background-color:#fafafa;border-radius:6px;border:1px solid #e4e4e7;color:#27272a;">${message}</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`.trim()
}

function parseContactBody(body: unknown): ParseBodyResult {
  if (!isRecord(body)) {
    return { ok: false, error: "Invalid JSON body." }
  }

  const { name, email, projectType, message } = body

  if (!isNonEmptyString(name)) {
    return { ok: false, error: "Name is required and must be a non-empty string." }
  }
  if (!isNonEmptyString(email)) {
    return { ok: false, error: "Email is required and must be a non-empty string." }
  }
  if (!isNonEmptyString(message)) {
    return { ok: false, error: "Message is required and must be a non-empty string." }
  }
  if (typeof projectType !== "string") {
    return { ok: false, error: "Project type must be a string." }
  }

  if (!isValidEmailFormat(email)) {
    return { ok: false, error: "Invalid email format." }
  }

  return {
    ok: true,
    data: {
      name,
      email,
      projectType,
      message,
    },
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  let raw: unknown
  try {
    raw = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 })
  }

  const parsed = parseContactBody(raw)
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }

  const payload = parsed.data

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_EMAIL

  if (!apiKey || !toEmail) {
    console.error(
      "[contact] Missing required environment variables: RESEND_API_KEY and/or CONTACT_EMAIL"
    )
    return NextResponse.json({ error: GENERIC_CONFIG_ERROR }, { status: 500 })
  }

  const resend = new Resend(apiKey)

  try {
    const { data, error } = await resend.emails.send({
      from: "Antbryx Website <onboarding@resend.dev>",
      to: toEmail,
      subject: `New Discovery Call Request from ${payload.name.trim()}`,
      html: buildContactEmailHtml(payload),
    })

    if (error) {
      console.error("[contact] Resend API error:", error)
      return NextResponse.json({ error: GENERIC_SEND_ERROR }, { status: 500 })
    }

    if (!data) {
      console.error("[contact] Resend returned no data and no error")
      return NextResponse.json({ error: GENERIC_SEND_ERROR }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error("[contact] Unexpected error while sending email:", err)
    return NextResponse.json({ error: GENERIC_SEND_ERROR }, { status: 500 })
  }
}

export function GET(): NextResponse {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405, headers: { Allow: "POST" } })
}

export function PUT(): NextResponse {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405, headers: { Allow: "POST" } })
}

export function PATCH(): NextResponse {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405, headers: { Allow: "POST" } })
}

export function DELETE(): NextResponse {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405, headers: { Allow: "POST" } })
}
