import { UserButton } from "@clerk/nextjs";
import { Box, Container, Typography } from "@mui/material";
import { Metadata } from "next";
import Navbar from "../_components/Navbar";
import { currentUser } from "@clerk/nextjs";
import { getRentalCar, getUserReservations } from "@/app/lib/actions";
import { Rental } from "@prisma/client";
import RentalCard from "./RentalCard";
import { Car } from "@prisma/client";

export const metadata: Metadata = {
  title: "My Reservations",
  description: "Page to look for user's reservations",
};

export type reservationCar = {
  rental: Rental;
  car: Car;
};

export default async function Page() {
  const user = await currentUser();
  let reservationsCar: reservationCar[] = [];
  if (user) {
    let reservations = await getUserReservations(user.id);
    for (let i = 0; i < reservations.length; i++) {
      const car = await getRentalCar(reservations[i].id);
      if (car !== null) {
        reservationsCar.push({ rental: reservations[i], car: car });
      }
    }
  }
  return (
    <>
      <main>
        <Container>
          <Box my={"4rem"} textAlign={"center"}>
            <Typography variant="h3">Reservations</Typography>
            <Box display={"flex"} flexDirection={"column"}>
              {reservationsCar.map((reservationCar) => {
                return <RentalCard key={reservationCar.rental.id} reservationCar={reservationCar} />;
              })}
            </Box>
          </Box>
        </Container>
      </main>
    </>
  );
}
