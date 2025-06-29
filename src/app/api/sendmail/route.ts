import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { from, senderEmail, text } = await req.json();

  const info = await transporter.sendMail({
    from: "dakshydv.2411@gmail.com",
    to: "dakshyadav.dev@gmail.com",
    subject: "Someone wants to connect to you",
    text: `${from} has a message for you, ${text}. Their email id is ${senderEmail}.`,
  });
  if (!info.messageId) {
    return NextResponse.json(
      {
        message: "could not send email",
      },
      { status: 400 }
    );
  }
  return NextResponse.json(
    {
      message: "Message sent successfully",
    },
    { status: 200 }
  );
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "daksh.ydv2411@gmail.com",
    pass: "twwvqgkjjcvtztne",
  },
});
