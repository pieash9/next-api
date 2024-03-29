import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  let success = true;
  try {
    await mongoose.connect(connectionStr);
    data = await Product.find();
  } catch (error) {
    data = { result: "error happend" };
    success: false;
  }
  return NextResponse.json({ result: data }, { success });
}

export async function POST(req) {
  await mongoose.connect(connectionStr);
  const payload = await req.json();
  let product = new Product(payload);
  const result = await product.save();
  return NextResponse.json({ result, success: true });
}
