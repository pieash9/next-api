import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const PUT = async (req, con) => {
  const productId = con.params.productId;
  const filter = { _id: productId };
  const payload =await req.json()

  await mongoose.connect(connectionStr)
  const result = await Product.findOneAndUpdate(filter,payload)
  return NextResponse.json({ result, success: true });
};

export const GET = async (req, con) => {
  const productId = con.params.productId;
  const record = { _id: productId };

  await mongoose.connect(connectionStr)
  const result = await Product.findById(record)
  return NextResponse.json({ result, success: true });
};