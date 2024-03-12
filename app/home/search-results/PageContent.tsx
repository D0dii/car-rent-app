"use client";
import type { Car } from "@prisma/client";
import { Box, Container, Typography, FormControlLabel, Checkbox, TextField } from "@mui/material";
import CarCard from "./CarCard";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function PageContent({ cars, numberOfDays }: { cars: Car[]; numberOfDays: number }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((term: any) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set(term.target.attributes.name.value, term.target.value);
    } else {
      params.delete(term.target.attributes.name.value);
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <Container>
      <Typography variant="h2" textAlign={"center"} mt={"2rem"}>
        Search results
      </Typography>
      <Box display={"grid"} gridTemplateColumns={"1fr 3fr"}>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography variant="h4">Filters</Typography>
          <Box display={"flex"} flexDirection={"column"} mt={"1rem"} gap={"1.5rem"}>
            <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
              <Typography variant="h6">Price per day</Typography>
              <Box>
                <TextField
                  label="Min. price"
                  onChange={handleSearch}
                  inputProps={{ name: "minPrice" }}
                  defaultValue={searchParams.get("minPrice")?.toString()}
                ></TextField>
              </Box>
              <Box>
                <TextField
                  label="Max. price"
                  onChange={handleSearch}
                  inputProps={{ name: "maxPrice" }}
                  defaultValue={searchParams.get("maxPrice")?.toString()}
                ></TextField>
              </Box>
            </Box>
            <Box>
              <Typography variant="h6">Electric cars</Typography>
              <FormControlLabel control={<Checkbox />} label="Electric" />
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent={"center"}
          mt={"4rem"}
          mb={"2rem"}
          gap={"2rem"}
        >
          {cars.map((car) => (
            <CarCard key={car.id} car={car} numberOfDays={numberOfDays}></CarCard>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
