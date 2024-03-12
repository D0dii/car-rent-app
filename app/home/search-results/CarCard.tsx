import { Car } from "@prisma/client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, Box, Typography } from "@mui/material";

export default function CarCard({ car, numberOfDays }: { car: Car; numberOfDays: number }) {
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
              {car.carImage !== null ? (
                <img src="../default-car.svg" alt="Car image" width={150} />
              ) : (
                <img src="../default-car.svg" alt="Car image" width={150} />
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
              <Typography variant="caption"> Price for {numberOfDays} days</Typography>
              <Typography variant="h6" fontWeight={"bold"}>
                {car.pricePerDay * numberOfDays}
              </Typography>
              <Box mt={"1rem"}>
                <Button variant="contained">RESERVE</Button>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
