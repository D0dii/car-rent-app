import { Metadata } from "next";
import Navbar from "../_components/Navbar";
import usePolishCities from "../hooks/usePolishCities";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Find car",
  description: "Page to find car that matches criteria",
};

export default async function Page() {
  const data = await usePolishCities();
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <PageContent data={data}></PageContent>
      </main>
    </>
  );
}
