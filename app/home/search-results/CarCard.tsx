import { Car } from "@prisma/client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Typography } from "@mui/material";

export default function CarCard({ car }: { car: Car }) {
  return (
    <Box>
      <Card sx={{ minWidth: 275 }} variant="outlined">
        <CardContent>
          <Box display={"grid"} gridTemplateColumns={"1fr 2fr 1fr"} alignItems={"center"} gap={"1rem"}>
            <Box>
              {car.carImage !== null ? (
                <img src="../default-car.svg" alt="Car image" width={150} />
              ) : (
                <img src="../default-car.svg" alt="Car image" width={150} />
              )}
            </Box>
            <Box>
              <Box display={"flex"}>{car.city}</Box>
            </Box>
            <Box>Price</Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
