"use client";
import type { Car } from "@prisma/client";
import { Box, Container, Typography } from "@mui/material";
import CarCard from "./CarCard";
import { useState } from "react";

export default function PageContent({ cars, numberOfDays }: { cars: Car[]; numberOfDays: number }) {
  const [carsState, setCarsState] = useState<Car[]>(cars);
  function filter() {
    setCarsState(carsState.filter((car) => car.pricePerDay < 75));
  }
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
        gap={"2rem"}
      >
        {carsState.map((car) => (
          <CarCard key={car.id} car={car} numberOfDays={numberOfDays}></CarCard>
        ))}
      </Box>
      <button onClick={filter}>Filter</button>
    </Container>
  );
}
