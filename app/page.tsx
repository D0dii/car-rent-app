import { Metadata } from "next";
import { Button, Box, Container, Fade, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rent car app landingpage",
  description: "Rent car app created for learning and portfolio purposes",
};

export default function Home() {
  return (
    <>
      <header>
        <Box py="1rem">
          <Container>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="h5" color={"#1976d2"}>
                Rent Car App
              </Typography>

              <Link href={"/auth/signin"}>
                <Button variant="contained">Login</Button>
              </Link>
            </Box>
          </Container>
        </Box>
      </header>
      <main>
        <Container>
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
                  Don't overpay with
                </Typography>
                <Typography variant="h2">Car Rent App</Typography>
              </Box>
              <Box>
                <Image src="/car.svg" alt="Photo of a car" width={400} height={400}></Image>
              </Box>
            </Box>
          </Fade>
        </Container>
      </main>
      <footer>
        <Box textAlign={"center"}>
          <Container>
            <Typography>&copy; 2024 Marcin Dolatowski</Typography>
          </Container>
        </Box>
      </footer>
    </>
  );
}
