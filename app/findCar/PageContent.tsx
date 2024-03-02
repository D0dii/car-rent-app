"use client";
import { Autocomplete, Box, Container, TextField } from "@mui/material";
export default function PageContent({ data }: { data: any }) {
  return (
    <Container>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"} mt={"4rem"}>
        <Autocomplete
          disablePortal
          options={data}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Pickup Location" id="pickupLocation" name="pickupLocation" />
          )}
        ></Autocomplete>
      </Box>
    </Container>
  );
}
