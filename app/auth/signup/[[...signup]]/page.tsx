import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";
import { Box, Container, Typography } from "@mui/material";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Rent car app signup",
  description: "Rent car app signup page",
};

export default function Page() {
  const { userId } = auth();
  if (userId) {
    redirect("/");
  }
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
          <SignUp afterSignUpUrl={"/"} signInUrl="/auth" />
        </Box>
      </Container>
    </main>
  );
}
