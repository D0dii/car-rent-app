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
import { useForm, Controller } from "react-hook-form";
import dayjs from "dayjs";

type FormValues = {
  pickupLocation: string;
  dropoffLocation?: string;
  pickupDate: Date;
  pickupTime: Date;
  dropoffDate: Date;
  dropoffTime: Date;
};

export default function PageContent({ data }: { data: any }) {
  const [dropOffDifferentLocation, setDropOffDifferentLocation] = useState(false);
  function handleDropOffDifferentLocation() {
    if (dropOffDifferentLocation) {
      form.setValue("dropoffLocation", "");
    }
    setDropOffDifferentLocation(!dropOffDifferentLocation);
  }
  function createNewDatePlusThreeDays() {
    let date = new Date();
    date.setDate(date.getDate() + 3);
    return date;
  }
  const form = useForm<FormValues>({
    defaultValues: {
      pickupLocation: "",
      dropoffLocation: "",
      pickupDate: new Date(),
      pickupTime: new Date("December 17, 1995 10:00:00"),
      dropoffDate: createNewDatePlusThreeDays(),
      dropoffTime: new Date("December 17, 1995 10:00:00"),
    },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data: any) => {
    console.log(data);
  };
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
      <form onSubmit={handleSubmit(onSubmit)}>
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
              isOptionEqualToValue={(option: { label: string }, value: { label: string }) =>
                option.label === value.label
              }
              disablePortal
              options={data}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...register("pickupLocation", { required: "Pickup location is required" })}
                  {...params}
                  label="Pickup Location"
                  error={!!errors.pickupLocation}
                  helperText={errors.pickupLocation?.message}
                />
              )}
            ></Autocomplete>

            {dropOffDifferentLocation ? (
              <Autocomplete
                isOptionEqualToValue={(option: { label: string }, value: { label: string }) =>
                  option.label === value.label
                }
                disablePortal
                options={data}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...register("dropoffLocation", { required: "Dropoff location is required" })}
                    {...params}
                    label="Dropoff Location"
                    error={!!errors.dropoffLocation}
                    helperText={errors.dropoffLocation?.message}
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
              <Controller
                control={control}
                name="pickupDate"
                rules={{ required: true }}
                render={({ field }) => {
                  return (
                    <DatePicker
                      label="Pick-up date"
                      onChange={(date) => {
                        field.onChange(date);
                      }}
                      value={dayjs(field.value)}
                      sx={{ width: 300 }}
                    />
                  );
                }}
              />
              <Controller
                control={control}
                name="pickupTime"
                rules={{ required: true }}
                render={({ field }) => {
                  return (
                    <TimePicker
                      label="Time"
                      onChange={(date) => {
                        field.onChange(date);
                      }}
                      value={dayjs(field.value)}
                      sx={{ width: 300 }}
                    />
                  );
                }}
              />
              {/* <DatePicker label="Pick-up date" sx={{ width: 300 }} /> */}
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
              {/* <DatePicker label="Drop-off date" sx={{ width: 300 }} />
              <TimePicker label="Time" sx={{ width: 300 }} /> */}
              <Controller
                control={control}
                name="dropoffDate"
                rules={{ required: true }}
                render={({ field }) => {
                  return (
                    <DatePicker
                      label="Drop-off date"
                      onChange={(date) => {
                        field.onChange(date);
                      }}
                      value={dayjs(field.value)}
                      sx={{ width: 300 }}
                    />
                  );
                }}
              />
              <Controller
                control={control}
                name="dropoffTime"
                rules={{ required: true }}
                render={({ field }) => {
                  return (
                    <TimePicker
                      label="Time"
                      onChange={(date) => {
                        field.onChange(date);
                      }}
                      value={dayjs(field.value)}
                      sx={{ width: 300 }}
                    />
                  );
                }}
              />
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
