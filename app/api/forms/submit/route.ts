import { initializeDatabase, insertFormSubmission } from "@/lib/db";
import { FormSubmissionRequest, FormType } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Initialize database on first request
    await initializeDatabase();

    const body: FormSubmissionRequest = await request.json();
    const { formType, data } = body;

    // Validate form type
    if (!Object.values(FormType).includes(formType)) {
      return NextResponse.json(
        { success: false, message: "Invalid form type" },
        { status: 400 }
      );
    }

    // Validate required fields based on form type
    if (!data || typeof data !== "object") {
      return NextResponse.json(
        { success: false, message: "Form data is required" },
        { status: 400 }
      );
    }

    // Basic validation for contact form
    if (!data.email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // Insert the form submission
    const result = await insertFormSubmission(formType, data);

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
      id: result.id
    });
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
