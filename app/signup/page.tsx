import { SignIn, SignUp } from "@clerk/nextjs";
import { Metadata } from "next";
import { Box, Container, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Rent car app signup",
  description: "Rent car app signup page",
};

export default function Page() {
  return (
    <main>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: {
              xs: "1rem",
              sm: "2rem",
            },
            mt: {
              xs: "2rem",
              sm: "3rem",
            },
          }}
        >
          <Typography variant="h2" color={"#ff8383"}>
            Car Rent App
          </Typography>
          <SignUp />
        </Box>
      </Container>
    </main>
  );
}
