import { NextResponse } from "next/server";

export function GET(req, con) {
  const student = con.params.student;
  return NextResponse.json({ result: student, success: true });
}
