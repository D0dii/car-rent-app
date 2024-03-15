import { Metadata } from "next";
import { Container, Box, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Thank you for booking a car!",
};

export default function Page() {
  return (
    <Container>
      <Box mt={"2rem"} textAlign={"center"}>
        <Typography variant="h2">
          Thank you for booking a car! You can view details at reservations page
        </Typography>
      </Box>
    </Container>
  );
}
