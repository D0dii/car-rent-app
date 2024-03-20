import { Metadata } from "next";
import { getCars } from "../lib/actions";
import PageContent from "./PageContent";
import dayjs from "dayjs";

export const metadata: Metadata = {
  title: "Search Results",
  description: "Page to show search results for car rental app",
};

export default async function Page({
  searchParams,
}: {
  searchParams: {
    pickupLocation: string;
    dropoffLocation: string;
    pickupDate: string;
    pickupTime: string;
    dropoffDate: string;
    dropoffTime: string;
    minPrice?: string;
    maxPrice?: string;
  };
}) {
  let result = await getCars(searchParams);
  let numberOfDays =
    ((dayjs(searchParams?.dropoffDate).toDate() as any) - (dayjs(searchParams?.pickupDate).toDate() as any)) /
    86400000;
  return (
    <>
      <main>
        <PageContent cars={result.props.cars} numberOfDays={numberOfDays}></PageContent>
      </main>
    </>
  );
}
