"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCars = async (pickupLocation: string) => {
  const cars = await prisma.car.findMany({
    where: {
      city: pickupLocation,
      isAvailable: true,
    },
  });

  return { props: { cars } };
};
