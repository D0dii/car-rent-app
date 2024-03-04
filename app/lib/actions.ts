"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCars = async () => {
  const cars = await prisma.car.findMany();

  return { props: { cars } };
};
