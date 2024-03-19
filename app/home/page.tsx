import { Metadata } from "next";
import { Button, Box, Container, Typography } from "@mui/material";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page of the car rental app",
};

export default async function Page() {
  return (
    <>
      <Container>
        <Box textAlign={"center"} mt={"4rem"}>
          <Typography variant="h3">Welcome to the car rental app</Typography>
          <Typography variant="h4" mt={"2rem"}>
            You can search for a car in find car page or view a list of all cars by clicking button
          </Typography>
          <Box mt={"4rem"}>
            <Link href={"/home/all-cars"}>
              <Button variant="contained" size="large">
                View all cars
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
}
