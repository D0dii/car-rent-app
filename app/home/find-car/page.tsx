import { Metadata } from "next";
import PageContent from "./PageContent";
import { promises as fs } from "fs";

export const metadata: Metadata = {
  title: "Find car",
  description: "Page to find car that matches criteria",
};

export default async function Page() {
  const file = await fs.readFile(process.cwd() + "/app/pl.json", "utf8");
  const data = JSON.parse(file);
  return (
    <>
      <main>
        <PageContent data={data}></PageContent>
      </main>
    </>
  );
}
