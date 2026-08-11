import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)

# Load SMTP Environment Variables
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
SMTP_USER = os.getenv("SMTP_USER", "")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD", "")
TO_EMAIL = os.getenv("TO_EMAIL", "future@aismartlive.com")

@app.route('/api/book-demo', methods=['POST'])
def book_demo():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"success": False, "message": "Invalid JSON body"}), 400

        full_name = data.get("fullName", "N/A")
        user_email = data.get("email", "N/A")
        phone = data.get("phone", "N/A")
        store_name = data.get("storeName", "N/A")
        city = data.get("city", "N/A")
        deployment_type = data.get("deploymentType", "N/A")
        preferred_date = data.get("preferredDate", "N/A")

        subject = f"New LAVIX Demo Booking: {full_name} ({store_name})"

        # Plain text email content
        text_body = f"""
New LAVIX Virtual Trial Room Demo Booking Request

Customer Details:
------------------------------------------
• Full Name: {full_name}
• Work Email: {user_email}
• Phone Number: {phone}
• Store / Brand Name: {store_name}
• City: {city}
• Preferred Hardware Edition: {deployment_type}
• Preferred Demo Date: {preferred_date}
------------------------------------------
Reply directly to this email to contact {full_name}.
"""

        # HTML email content
        html_body = f"""
        <html>
        <body style="font-family: Arial, sans-serif; color: #2A1C18; background-color: #FFF9F2; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 30px; border-radius: 16px; border: 1px solid #F1E4D3; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
            <h2 style="color: #6E1F1F; margin-top: 0;">🎉 New LAVIX Demo Request</h2>
            <p style="font-size: 14px; color: #5E4A43;">A customer has scheduled a live virtual trial room demo on LAVIX.</p>
            
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 20px;">
              <tr style="border-bottom: 1px solid #F1E4D3;">
                <td style="padding: 10px 0; font-weight: bold; width: 40%; color: #6E1F1F;">Full Name:</td>
                <td style="padding: 10px 0;">{full_name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #F1E4D3;">
                <td style="padding: 10px 0; font-weight: bold; color: #6E1F1F;">Work Email:</td>
                <td style="padding: 10px 0;"><a href="mailto:{user_email}" style="color: #D48B2C;">{user_email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #F1E4D3;">
                <td style="padding: 10px 0; font-weight: bold; color: #6E1F1F;">Phone Number:</td>
                <td style="padding: 10px 0;">{phone}</td>
              </tr>
              <tr style="border-bottom: 1px solid #F1E4D3;">
                <td style="padding: 10px 0; font-weight: bold; color: #6E1F1F;">Store / Brand Name:</td>
                <td style="padding: 10px 0;">{store_name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #F1E4D3;">
                <td style="padding: 10px 0; font-weight: bold; color: #6E1F1F;">City:</td>
                <td style="padding: 10px 0;">{city}</td>
              </tr>
              <tr style="border-bottom: 1px solid #F1E4D3;">
                <td style="padding: 10px 0; font-weight: bold; color: #6E1F1F;">Hardware Edition:</td>
                <td style="padding: 10px 0;">{deployment_type}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #6E1F1F;">Preferred Date:</td>
                <td style="padding: 10px 0;">{preferred_date}</td>
              </tr>
            </table>

            <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #F1E4D3; text-align: center; font-size: 12px; color: #5E4A43;">
              AISMARTLIVE SOLUTIONS PVT LTD • Digital Innovation Team
            </div>
          </div>
        </body>
        </html>
        """

        msg = MIMEMultipart("alternative")
        msg["Subject"] = subject
        msg["From"] = SMTP_USER or f"LAVIX Demo <future@aismartlive.com>"
        msg["To"] = TO_EMAIL
        msg["Reply-To"] = user_email

        msg.attach(MIMEText(text_body, "plain"))
        msg.attach(MIMEText(html_body, "html"))

        if SMTP_USER and SMTP_PASSWORD:
            with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
                server.starttls()
                server.login(SMTP_USER, SMTP_PASSWORD)
                server.sendmail(SMTP_USER, [TO_EMAIL], msg.as_string())
            print(f"[SUCCESS] Email sent via SMTP to {TO_EMAIL} for booking by {full_name}")
        else:
            print(f"[SIMULATED SMTP] Email request logged for {TO_EMAIL} (Configure SMTP_USER & SMTP_PASSWORD in .env):")
            print(text_body)

        return jsonify({
            "success": True,
            "message": "Demo request email processed successfully!"
        }), 200

    except Exception as e:
        print(f"[ERROR] Failed to send email via Python SMTP: {str(e)}")
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    port = int(os.getenv("PORT", 5000))
    print(f"Starting LAVIX Python Flask Mailer Server on http://localhost:{port}")
    app.run(host='0.0.0.0', port=port, debug=True)
