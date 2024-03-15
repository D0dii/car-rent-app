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
        gte: searchParams.minPrice ? parseInt(searchParams.minPrice) : 0,
        lte: searchParams.maxPrice ? parseInt(searchParams.maxPrice) : 1000000,
      },
    },
  });

  return { props: { cars } };
};

export async function bookCar(
  carId: string,
  userId: string,
  pickupLocation: string,
  dropoffLocation: string,
  startDate: Date,
  endDate: Date,
  cost: number,
  securityDeposit: number
) {
  let rental = await prisma.rental.create({
    data: {
      carId: carId,
      userId: userId,
      pickupLocation: pickupLocation,
      dropoffLocation: dropoffLocation,
      pickupDate: startDate,
      dropoffDate: endDate,
      totalCost: cost + securityDeposit,
      status: "Pending",
    },
  });
  await prisma.car.update({
    where: {
      id: carId,
    },
    data: {
      isAvailable: false,
      rentalId: rental.id,
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

export async function getRentalCar(rentalId: string) {
  return prisma.car.findFirst({
    where: {
      rentalId: rentalId,
    },
  });
}
