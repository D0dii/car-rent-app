import { promises as fs } from "fs";
export default async function usePolishCities() {
  const file = await fs.readFile("/app/pl.json", "utf8");
  const data = JSON.parse(file);
  return data;
}
