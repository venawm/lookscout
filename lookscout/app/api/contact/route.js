import { NextResponse } from "next/server";
import dbConnect from "@/app/utils/dbConnect";
import Contact from "@/app/model/Contact";

export async function POST(req) {
  await dbConnect();
  try {
    const body = await req.json();
    // Assuming `body` contains the data for the new contact
    const newContact = await Contact.create(body);
    newContact.save();
    return NextResponse.json({ message: "Success", data: newContact });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
