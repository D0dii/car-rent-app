import { Metadata } from "next";
import { getAllCars } from "@/app/lib/actions";
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
        <PageContent cars={result}></PageContent>
      </main>
    </>
  );
}
