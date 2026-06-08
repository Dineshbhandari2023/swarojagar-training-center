import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, program, message } = body;

    // Validate required fields
    if (!name || !phone || !program) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Get the access key from environment variables
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      return NextResponse.json(
        { success: false, error: "Web3Forms access key not configured" },
        { status: 500 },
      );
    }

    // Get course title from program ID
    const courseTitles: Record<string, string> = {
      "ac-repair": "Refrigerator & AC Repairing",
      computer: "Computer IT & Software Training",
      tailoring: "Tailoring & Dressmaking",
      cook: "Professional Culinary & Cook Training",
      wiring: "Industrial Wiring & Electrical Work",
    };

    const courseTitle = courseTitles[program] || program;

    // Prepare email data for Web3Forms
    const formData = {
      access_key: accessKey,
      subject: `New Enrollment Inquiry - ${courseTitle}`,
      from_name: name,
      email: email || "Not provided",
      phone: phone,
      message: `
Course Interest: ${courseTitle}
Phone: ${phone}
Email: ${email || "Not provided"}
Message: ${message || "No additional message"}

---
Submitted from Swarojagar Training Center Website
Date: ${new Date().toLocaleString("en-NP", { timeZone: "Asia/Kathmandu" })}
      `.trim(),
      // Web3Forms specific fields
      receipt: "true", // Send receipt to submitter
      // Custom redirect (optional)
      // redirect: `${process.env.APP_URL || 'http://localhost:3000'}/#contact`,
    };

    // Send email via Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Email sent successfully",
        messageId: result.message_id,
      });
    } else {
      return NextResponse.json(
        { success: false, error: result.message || "Failed to send email" },
        { status: 400 },
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
