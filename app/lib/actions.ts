"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCars = async (searchParams: {
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  pickupTime: string;
  dropoffDate: string;
  dropoffTime: string;
  minPrice?: string;
  maxPrice?: string;
}) => {
  const cars = await prisma.car.findMany({
    where: {
      city: searchParams.pickupLocation,
      isAvailable: true,
      pricePerDay: {
        gt: searchParams.minPrice ? parseInt(searchParams.minPrice) : 0,
        lt: searchParams.maxPrice ? parseInt(searchParams.maxPrice) : 1000000,
      },
    },
  });

  return { props: { cars } };
};

export async function bookCar(
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
