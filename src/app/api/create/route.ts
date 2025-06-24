import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Wizytówka zapisana!" }, { status: 200 });
}
