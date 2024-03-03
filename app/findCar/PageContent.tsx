"use client";
import {
  Autocomplete,
  Button,
  Box,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
export default function PageContent({ data }: { data: any }) {
  const [dropOffDifferentLocation, setDropOffDifferentLocation] = useState(false);
  function handleDropOffDifferentLocation() {
    setDropOffDifferentLocation(!dropOffDifferentLocation);
  }
  return (
    <Container>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={"2rem"}
        flexDirection={"column"}
      >
        <Typography variant="h3">Car Rental App - Search, Compare and Save</Typography>
      </Box>
      <form action="">
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={"2rem"}
          mb={"2rem"}
          flexDirection={"column"}
          gap={"1rem"}
        >
          <Box
            display={"flex"}
            gap={"1rem"}
            sx={{
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <Autocomplete
              disablePortal
              options={data}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Pickup Location"
                  id="pickupLocation"
                  name="pickupLocation"
                  required
                />
              )}
            ></Autocomplete>

            {dropOffDifferentLocation ? (
              <Autocomplete
                disablePortal
                options={data}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Dropoff Location"
                    id="dropoffLocation"
                    name="dropoffLocation"
                  />
                )}
              ></Autocomplete>
            ) : (
              ""
            )}
          </Box>
          <FormControlLabel
            control={<Checkbox onChange={handleDropOffDifferentLocation} />}
            label="Drop car off at different location"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
              display={"flex"}
              gap={"0.5rem"}
              sx={{
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <DatePicker label="Pick-up date" sx={{ width: 300 }} />
              <TimePicker label="Time" sx={{ width: 300 }} />
            </Box>
            <Box
              display={"flex"}
              gap={"0.5rem"}
              sx={{
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <DatePicker label="Drop-off date" sx={{ width: 300 }} />
              <TimePicker label="Time" sx={{ width: 300 }} />
            </Box>
          </LocalizationProvider>
          <Box mt={"1rem"}>
            <Button type="submit" variant="contained" size="large">
              Search
            </Button>
          </Box>
        </Box>
      </form>
    </Container>
  );
}
