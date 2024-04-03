import { Box, Container, Typography, FormControlLabel, Checkbox, TextField } from "@mui/material";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function AutomaticCheckbox() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleAutomaticChange() {
    const params = new URLSearchParams(searchParams);
    if (params.has("automatic")) {
      params.delete("automatic");
    } else {
      params.set("automatic", "true");
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={handleAutomaticChange}
          defaultChecked={searchParams.get("automatic") !== null ? true : false}
        />
      }
      label="Automatic"
    />
  );
}
