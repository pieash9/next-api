import { users } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
  const userId = content.params.id;
  const data = users;
  const userData = data.filter((user) => user.id == userId);
  return NextResponse.json(
    userData.length == 0
      ? { result: "No data found", success: false }
      : { result: userData[0], success: true },
    { status: 200 }
  );
}
