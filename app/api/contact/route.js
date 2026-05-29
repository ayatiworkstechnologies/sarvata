import { NextResponse } from "next/server";

const API_URL =
  "https://api.ayatiworks.com/api/v1/public/sarvata/sarvata_contact_us/records";
const API_KEY =
  process.env.AYATI_API_KEY ||
  "1596386488d95a0a8609be0a112d8fdd96049c89664068b7c5f230b5d8ec1caf";

export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY,
      },
      body: JSON.stringify(body),
    });

    const responseText = await response.text();
    let payload = {};

    if (responseText) {
      try {
        payload = JSON.parse(responseText);
      } catch {
        payload = { message: responseText };
      }
    }

    if (!response.ok) {
      return NextResponse.json(
        { error: "Contact submission failed", details: payload },
        { status: response.status }
      );
    }

    return NextResponse.json(payload);
  } catch (error) {
    console.error("Contact API route error:", error);
    return NextResponse.json(
      { error: "Unable to submit contact form" },
      { status: 500 }
    );
  }
}
