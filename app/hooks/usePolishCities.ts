import { promises as fs } from "fs";
export default async function usePolishCities() {
  const file = await fs.readFile(process.cwd() + "/app/pl.json", "utf8");
  const data = JSON.parse(file);
  return data;
}
