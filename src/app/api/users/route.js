import { NextResponse } from "next/server";

export function GET(request) {
  return NextResponse.json(
    {
      name: "Pieash",
      age: 30,
      city: "Dhaka",
    },
    { status: 200 }
  );
}
