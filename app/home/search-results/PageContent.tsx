"use client";
import type { Car } from "@prisma/client";
import { Box, Container, Typography } from "@mui/material";
import CarCard from "./CarCard";

export default function PageContent({ cars }: { cars: Car[] }) {
  return (
    <Container>
      <Typography variant="h2" textAlign={"center"} mt={"2rem"}>
        Search results
      </Typography>
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        justifyContent={"center"}
        mt={"4rem"}
        mb={"2rem"}
      >
        {cars.map((car) => (
          <CarCard key={car.id} car={car}></CarCard>
        ))}
      </Box>
    </Container>
  );
}
