import { Car } from "@prisma/client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";

export default function CarCard({ car }: { car: Car }) {
  return (
    <Box>
      <Card sx={{ minWidth: 275 }} variant="outlined">
        <CardContent>
          <Box display={"flex"} alignItems={"center"} gap={"1rem"}>
            {car.carImage !== null ? (
              <img src={car.carImage} alt="Car image" width={150} />
            ) : (
              <img src="default-car.svg" alt="Car image" width={150} />
            )}
            <Box>
              <h2>{car.name}</h2>
            </Box>
            <Box>Price</Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
