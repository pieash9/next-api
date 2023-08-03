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

export async function PUT(request, content) {
  const payload = await request.json();
  console.log(payload);
  payload.id = content.params.id;

  if (!payload.id || !payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: " request data not valid", success: false },
      { status: 400 }
    );
  }

  return NextResponse.json({ result: payload, success: true }, { status: 200 });
}

export function DELETE(request, content) {
  const id = content.params.id;
  if (id) {
    return NextResponse.json(
      { result: "User Deleted", success: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { result: "Can't delete", success: false },
      { status: 400 }
    );
  }
}
