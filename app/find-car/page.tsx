import { Metadata } from "next";
import PageContent from "./PageContent";
import data from "@/app/pl.json";

export const metadata: Metadata = {
  title: "Find car",
  description: "Page to find car that matches criteria",
};

export default async function Page() {
  return (
    <>
      <main>
        <PageContent data={data}></PageContent>
      </main>
    </>
  );
}
