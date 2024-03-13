import { Rental } from "@prisma/client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, Box, Typography } from "@mui/material";

export default function CarCard({ rental }: { rental: Rental }) {
  return (
    <Box>
      <Card sx={{ minWidth: 275 }} variant="outlined">
        <CardContent>
          <Box>Pickup Date - {rental.pickupDate.toDateString()}</Box>
          <Box>Dropoff Date - {rental.dropoffDate.toDateString()}</Box>
          <Box>Total Cost - ${rental.totalCost}</Box>
        </CardContent>
      </Card>
    </Box>
  );
}
