import { Box, Container, Typography, FormControlLabel, Checkbox, TextField } from "@mui/material";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function ElectricCheckbox() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleElectricChange() {
    const params = new URLSearchParams(searchParams);
    if (params.has("electric")) {
      params.delete("electric");
    } else {
      params.set("electric", "true");
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={handleElectricChange}
          defaultChecked={searchParams.get("electric") !== null ? true : false}
        />
      }
      label="Electric"
    />
  );
}
