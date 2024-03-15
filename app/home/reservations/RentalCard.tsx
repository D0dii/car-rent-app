import { Rental } from "@prisma/client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, Box, Typography } from "@mui/material";
import { reservationCar } from "./page";

export default function CarCard({ reservationCar }: { reservationCar: reservationCar }) {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} mt={"4rem"} gap={"2rem"}>
      <Card sx={{ minWidth: 275 }} variant="outlined">
        <CardContent>
          <Box>Pickup Date - {reservationCar.rental.pickupDate.toDateString()}</Box>
          <Box>Dropoff Date - {reservationCar.rental.dropoffDate.toDateString()}</Box>
          <Box>Pickup Location - {reservationCar.rental.pickupLocation}</Box>
          <Box>Dropoff Location - {reservationCar.rental.dropoffLocation}</Box>
        </CardContent>
      </Card>
    </Box>
  );
}
