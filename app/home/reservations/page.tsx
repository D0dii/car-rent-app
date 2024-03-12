import { UserButton } from "@clerk/nextjs";
import { Box, Container } from "@mui/material";
import { Metadata } from "next";
import Navbar from "../../_components/Navbar";
import { currentUser } from "@clerk/nextjs";
import { getUserReservations } from "@/app/lib/actions";
import { Rental } from "@prisma/client";

export const metadata: Metadata = {
  title: "My Reservations",
  description: "Page to look for user's reservations",
};

export default async function Page() {
  const user = await currentUser();
  let reservations: Rental[] = [];
  if (user) {
    reservations = await getUserReservations(user.id);
  }
  console.log(reservations);
  return (
    <>
      <main>
        <Container>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"} mt={"4rem"}>
            Reservations
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            {reservations.map((reservation) => {
              return (
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  mt={"4rem"}
                  gap={"2rem"}
                >
                  <Box>{reservation.carId}</Box>
                  <Box>{reservation.totalCost}</Box>
                  <Box>{reservation.userId}</Box>
                </Box>
              );
            })}
          </Box>
        </Container>
      </main>
    </>
  );
}
