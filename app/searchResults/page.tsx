import { UserButton } from "@clerk/nextjs";
import { Box, Container } from "@mui/material";
import { Metadata } from "next";
import Navbar from "../_components/Navbar";
import { getCars } from "../lib/actions";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Search Results",
  description: "Page to show search results for car rental app",
};

export default async function Page() {
  let result = await getCars();
  console.log(result);
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <PageContent cars={result.props.cars}></PageContent>
      </main>
    </>
  );
}
