import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Here you would typically send an email using a service like Resend, SendGrid, etc.
    // For now, we'll just log it and return success
    console.log('Contact form submission:', { name, email, message });

    // TODO: Implement actual email sending
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'contact@yourdomain.com',
    //   to: 'denisa@taskyo.cz',
    //   subject: `New contact form submission from ${name}`,
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
