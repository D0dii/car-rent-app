import { Metadata } from "next";
import { getCars } from "../../lib/actions";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Search Results",
  description: "Page to show search results for car rental app",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    pickupLocation: string;
  };
}) {
  console.log(searchParams);
  let result = await getCars(searchParams?.pickupLocation as string);
  console.log(result);
  return (
    <>
      <main>
        <PageContent cars={result.props.cars}></PageContent>
      </main>
    </>
  );
}
