import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionStr);
    data = await Product.find();
  } catch (error) {
    data = { result: "error happend" };
  }
  return NextResponse.json(data);
}
