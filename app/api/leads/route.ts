import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const NOTIFY_EMAIL = process.env.LEAD_NOTIFY_EMAIL || 'hello@ernestpath.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, phone, track, course, source } = body ?? {};

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    if (resend) {
      await resend.emails.send({
        // Must be an address on a domain verified in your Resend dashboard.
        // Use 'onboarding@resend.dev' for testing before verifying ernestpath.com.
        from: 'ErnestPath Leads <leads@ernestpath.com>',
        to: NOTIFY_EMAIL,
        subject: `New lead — ${source ?? 'unknown source'}`,
        text: [
          `Source: ${source ?? 'unknown'}`,
          name ? `Name: ${name}` : null,
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : null,
          course ? `Course: ${course}` : null,
          track ? `Track: ${track}` : null,
        ]
          .filter(Boolean)
          .join('\n'),
      });
    } else {
      // No RESEND_API_KEY set — lead is logged so nothing is silently lost,
      // but you won't get an email until the key is added to .env.local.
      console.warn('RESEND_API_KEY not set — lead received but not emailed:', {
        email,
        name,
        phone,
        track,
        course,
        source,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Leads route error:', err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}