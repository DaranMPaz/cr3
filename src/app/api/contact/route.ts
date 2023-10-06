import { NextResponse } from "next/server";
import { sendMail } from "@/utils/mailService";

export async function POST(req: Request){

  try {

    const data = await req.json()
    await sendMail(data)
    return NextResponse.json({ message : "Success" })

  } catch (error) {
    return NextResponse.json({ message : "Error" })
  }

}