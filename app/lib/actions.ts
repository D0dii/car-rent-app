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

export function bookCar(
  carId: string,
  userId: string,
  pickupLongitude: string,
  pickupLatitude: string,
  dropoffLongitude: string,
  dropoffLatitude: string,
  startDate: Date,
  endDate: Date,
  totalCost: number,
  securityDeposit: number
) {
  return prisma.car.update({
    where: {
      id: carId,
    },
    data: {
      isAvailable: false,
    },
  });
}
