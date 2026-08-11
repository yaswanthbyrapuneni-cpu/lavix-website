import nodemailer from 'nodemailer';

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ success: false, error: 'Method not allowed' }), { status: 405 });
  }

  try {
    const data = await req.json();
    const { fullName, email, phone, storeName, city, deploymentType, preferredDate } = data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"LAVIX Demo Bot" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL || 'future@aismartlive.com',
      replyTo: email,
      subject: `New LAVIX Demo Booking: ${fullName} (${storeName})`,
      html: `
        <div style="font-family:Arial,sans-serif;color:#2A1C18;background:#FFF9F2;padding:20px">
          <div style="max-width:600px;margin:0 auto;background:#fff;padding:30px;border-radius:16px;border:1px solid #F1E4D3">
            <h2 style="color:#6E1F1F;margin-top:0">🎉 New LAVIX Demo Request</h2>
            <p style="font-size:14px;color:#5E4A43">A retailer has scheduled a live virtual trial room demo.</p>
            <table style="width:100%;border-collapse:collapse;font-size:14px;margin-top:20px">
              <tr style="border-bottom:1px solid #F1E4D3"><td style="padding:10px 0;font-weight:bold;color:#6E1F1F;width:40%">Full Name:</td><td>${fullName}</td></tr>
              <tr style="border-bottom:1px solid #F1E4D3"><td style="padding:10px 0;font-weight:bold;color:#6E1F1F">Work Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
              <tr style="border-bottom:1px solid #F1E4D3"><td style="padding:10px 0;font-weight:bold;color:#6E1F1F">Phone:</td><td>${phone}</td></tr>
              <tr style="border-bottom:1px solid #F1E4D3"><td style="padding:10px 0;font-weight:bold;color:#6E1F1F">Store / Brand:</td><td>${storeName}</td></tr>
              <tr style="border-bottom:1px solid #F1E4D3"><td style="padding:10px 0;font-weight:bold;color:#6E1F1F">City:</td><td>${city}</td></tr>
              <tr style="border-bottom:1px solid #F1E4D3"><td style="padding:10px 0;font-weight:bold;color:#6E1F1F">Hardware Edition:</td><td>${deploymentType}</td></tr>
              <tr><td style="padding:10px 0;font-weight:bold;color:#6E1F1F">Preferred Date:</td><td>${preferredDate}</td></tr>
            </table>
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true, message: 'Demo request sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('SMTP error:', err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
};

export const config = { path: '/api/book-demo' };
