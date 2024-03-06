import { UserButton } from "@clerk/nextjs";
import { Box, Container } from "@mui/material";
import { Metadata } from "next";
import Navbar from "../../_components/Navbar";

export const metadata: Metadata = {
  title: "My Reservations",
  description: "Page to look for user's reservations",
};

export default function Page() {
  return (
    <>
      <main>
        <Container>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"} mt={"4rem"}>
            Reservations
          </Box>
        </Container>
      </main>
    </>
  );
}
