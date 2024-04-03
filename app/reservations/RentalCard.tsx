import { Rental } from "@prisma/client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, Box, Typography } from "@mui/material";
import { reservationCar } from "./page";
import Image from "next/image";

export default function CarCard({ reservationCar }: { reservationCar: reservationCar }) {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} mt={"4rem"} gap={"2rem"}>
      <Card sx={{ minWidth: 275 }} variant="outlined">
        <CardContent>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Box display={"flex"} gap={"0.5rem"}>
              <Box>
                {reservationCar.car.carImage === null ? (
                  <Image src="/default-car.svg" alt="Car image" width={150} height={150} />
                ) : (
                  <Image src={`/${reservationCar.car.carImage}`} alt="Car image" width={150} height={150} />
                )}
              </Box>
              <Box>
                <Typography variant="h5" fontWeight={"bold"}>
                  {reservationCar.car.name}
                </Typography>
                <Box display={"grid"} gridTemplateColumns={"1fr 1fr"}>
                  <Box>{reservationCar.car.seats} seats</Box>
                  <Box>{reservationCar.car.isAutomatic ? "Automatic" : "Manual"}</Box>
                  {reservationCar.car.securityDeposit === 0 ? (
                    ""
                  ) : (
                    <Box>{reservationCar.car.securityDeposit}</Box>
                  )}
                  <Box>{reservationCar.car.capacity}</Box>
                  {reservationCar.car.hasMileageLimit ? (
                    <Box>Mileagelimit: {reservationCar.car.mileageLimit}</Box>
                  ) : (
                    <Box>Unlimited mileage</Box>
                  )}
                </Box>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"0.5rem"}>
              <Box display={"grid"} gridTemplateColumns={"1fr 1fr"} gap={"1rem"}>
                <Typography>
                  Pickup Time -{" "}
                  {reservationCar.rental.pickupDate.getHours() +
                    ":" +
                    reservationCar.rental.pickupDate.getMinutes()}
                </Typography>
                <Typography>
                  Dropoff Time -{" "}
                  {reservationCar.rental.dropoffDate.getHours() +
                    ":" +
                    reservationCar.rental.dropoffDate.getMinutes()}
                </Typography>
              </Box>
              <Box display={"grid"} gridTemplateColumns={"1fr 1fr"} gap={"1rem"}>
                <Typography>Pickup Date - {reservationCar.rental.pickupDate.toDateString()}</Typography>
                <Typography>Dropoff Date - {reservationCar.rental.dropoffDate.toDateString()}</Typography>
              </Box>

              <Box display={"grid"} gridTemplateColumns={"1fr 1fr"} gap={"1rem"}>
                <Typography>Pickup Location - {reservationCar.rental.pickupLocation}</Typography>
                <Typography>Dropoff Location - {reservationCar.rental.dropoffLocation}</Typography>
              </Box>
              <Typography variant="h6">Total Price - ${reservationCar.rental.totalCost}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
