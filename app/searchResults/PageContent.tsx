import type { Car } from "@prisma/client";
import { Box, Container } from "@mui/material";
export default function PageContent({ cars }: { cars: Car[] }) {
  return (
    <Container>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"} mt={"4rem"}>
        Search results
        {cars.map((car) => (
          <div key={car.id}>{car.name}</div>
        ))}
      </Box>
    </Container>
  );
}
