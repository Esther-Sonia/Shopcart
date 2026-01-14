// pages/api/products.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}
