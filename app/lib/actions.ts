"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

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
  pickupLongitude: number,
  pickupLatitude: number,
  dropoffLongitude: number,
  dropoffLatitude: number,
  startDate: Date,
  endDate: Date,
  cost: number,
  securityDeposit: number
) {
  console.log(
    carId,
    userId,
    pickupLongitude,
    pickupLatitude,
    dropoffLongitude,
    dropoffLatitude,
    startDate,
    endDate,
    cost,
    securityDeposit
  );
  await prisma.car.update({
    where: {
      id: carId,
    },
    data: {
      isAvailable: false,
    },
  });
  await prisma.rental.create({
    data: {
      carId: carId,
      userId: userId,
      pickupLongitude: pickupLongitude,
      pickupLatitude: pickupLatitude,
      dropoffLongitude: dropoffLongitude,
      dropoffLatitude: dropoffLatitude,
      pickupDate: startDate,
      dropoffDate: endDate,
      totalCost: cost + securityDeposit,
      status: "Pending",
    },
  });
  revalidatePath("/home/search-results");
  revalidatePath("/home/reservations");
}

export async function getUserReservations(userId: string) {
  return prisma.rental.findMany({
    where: {
      userId: userId,
    },
  });
}
