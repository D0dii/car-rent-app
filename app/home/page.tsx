import { Metadata } from "next";
import { getAllCars } from "@/app/lib/actions";
import { Box, Fade, Typography } from "@mui/material";
import Image from "next/image";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Homepage",
  description: "Page to show list of all avaible cars",
};

export default async function Page() {
  let result = await getAllCars();
  return (
    <>
      <main>
        <Fade in={true} appear={true} timeout={800}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: {
                xs: "1rem",
                sm: "2rem",
              },
              padding: "5rem 0",
            }}
          >
            <Box>
              <Typography variant="h2" color={"#ff8383"}>
                Don&apos;t overpay with
              </Typography>
              <Typography variant="h2">Car Rent App</Typography>
            </Box>
            <Box>
              <Image src="/car.svg" alt="Photo of a car" width={400} height={400}></Image>
            </Box>
          </Box>
        </Fade>
        <PageContent cars={result}></PageContent>
      </main>
    </>
  );
}
