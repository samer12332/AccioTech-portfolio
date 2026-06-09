import { NextResponse } from "next/server";

import { sendInquiryEmail } from "@/lib/mailer";
import { getMongoCollection } from "@/lib/mongodb";

type InquiryPayload = {
  email?: string;
  message?: string;
  parentContactName?: string;
  programInterest?: string;
  studentAgeGroup?: string;
};

export async function POST(request: Request) {
  try {
    const recipientEmail =
      process.env.CONTACT_RECIPIENT_EMAIL?.trim() ||
      process.env.SMTP_USER?.trim();

    if (!recipientEmail) {
      throw new Error(
        "Missing CONTACT_RECIPIENT_EMAIL or SMTP_USER environment variable."
      );
    }

    const body = (await request.json()) as InquiryPayload;

    const inquiry = {
      parentContactName: body.parentContactName?.trim() ?? "",
      studentAgeGroup: body.studentAgeGroup?.trim() ?? "",
      email: body.email?.trim().toLowerCase() ?? "",
      programInterest: body.programInterest?.trim() ?? "",
      message: body.message?.trim() ?? ""
    };

    if (
      !inquiry.parentContactName ||
      !inquiry.studentAgeGroup ||
      !inquiry.email ||
      !inquiry.programInterest ||
      !inquiry.message
    ) {
      return NextResponse.json(
        { error: "Please complete all form fields before submitting." },
        { status: 400 }
      );
    }

    await sendInquiryEmail({
      ...inquiry,
      recipientEmail
    });

    const collection = await getMongoCollection();
    await collection.insertOne({
      ...inquiry,
      recipientEmail,
      createdAt: new Date()
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Failed to save inquiry", error);

    return NextResponse.json(
      { error: "Something went wrong while saving your inquiry." },
      { status: 500 }
    );
  }
}
