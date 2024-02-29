import { UserButton } from "@clerk/nextjs";
import { Box, Container } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find car",
  description: "Page to find car that matches criteria",
};

export default function Page() {
  return (
    <main>
      <Container>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} mt={"4rem"}>
          <UserButton afterSignOutUrl="/" />
        </Box>
      </Container>
    </main>
  );
}
