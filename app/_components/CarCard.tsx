import { Car } from "@prisma/client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, Box, Typography } from "@mui/material";
import { bookCar } from "../lib/actions";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import Image from "next/image";
import ConfirmReservationDialog from "./ConfirmReservationDialog";

export default function CarCard({ car, numberOfDays }: { car: Car; numberOfDays: number }) {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };
  return (
    <Box>
      <Card sx={{ minWidth: 275 }} variant="outlined">
        <CardContent>
          <Box
            sx={{
              display: { xs: "flex", md: "grid" },
              alignItems: "center",
              flexDirection: "column",
              gridTemplateColumns: "1fr 2fr 1fr",
              gap: "1rem",
            }}
          >
            <Box>
              {car.carImage === null ? (
                <Image src="/default-car.svg" alt="Car image" width={150} height={150} />
              ) : (
                <Image src={`/${car.carImage}`} alt="Car image" width={150} height={150} />
              )}
            </Box>

            <Box display={"flex"} flexDirection={"column"} gap={"2rem"}>
              <Typography variant="h5" fontWeight={"bold"}>
                {car.name}
              </Typography>
              <Box display={"grid"} gridTemplateColumns={"1fr 1fr"}>
                <Box>{car.seats} seats</Box>
                <Box>{car.isAutomatic ? "Automatic" : "Manual"}</Box>
                {car.securityDeposit === 0 ? "" : <Box>{car.securityDeposit}</Box>}
                <Box>{car.capacity}</Box>
                {car.hasMileageLimit ? (
                  <Box>Mileagelimit: {car.mileageLimit}</Box>
                ) : (
                  <Box>Unlimited mileage</Box>
                )}
              </Box>
              <Typography variant="h6">{car.city}</Typography>
            </Box>

            <Box display={"flex"} flexDirection={"column"}>
              <Typography variant="caption">
                {" "}
                Price for {numberOfDays} {numberOfDays == 1 ? "day" : "days"}
              </Typography>
              <Typography variant="h6" fontWeight={"bold"}>
                ${car.pricePerDay * numberOfDays}
              </Typography>
              <Box mt={"1rem"}>
                <Button variant="contained" onClick={handleClickOpen}>
                  RESERVE
                </Button>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
      <ConfirmReservationDialog
        open={open}
        onClose={handleClose}
        pickupLocation={car.city}
        dropoffLocation={searchParams.get("dropoffLocation")}
        pickupDate={searchParams.get("pickupDate")}
        pickupTime={searchParams.get("pickupTime")}
        dropoffDate={searchParams.get("dropoffDate")}
        dropoffTime={searchParams.get("dropoffTime")}
        car={car}
      />
    </Box>
  );
}
