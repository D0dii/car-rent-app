import { Metadata } from "next";
import { getAllCars } from "../../lib/actions";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Search Results",
  description: "Page to show search results for car rental app",
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
