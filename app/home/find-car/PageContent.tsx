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
import { useRouter } from "next/navigation";

type FormValues = {
  pickupLocation: string;
  dropoffLocation?: string;
  pickupDate: Date;
  pickupTime: Date;
  dropoffDate: Date;
  dropoffTime: Date;
};

export default function PageContent({ data }: { data: any }) {
  const router = useRouter();
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
    router.push(
      `/home/search-results?pickupLocation=${data.pickupLocation}&dropoffLocation=${
        data.dropoffLocation
      }&pickupDate=${dayjs(data.pickupDate).format("YYYY-MM-DD")}&pickupTime=${dayjs(data.pickupTime).format(
        "HH:mm"
      )}&dropoffDate=${dayjs(data.dropoffDate).format("YYYY-MM-DD")}&dropoffTime=${dayjs(
        data.dropoffTime
      ).format("HH:mm")}`
    );
  };
  console.log(errors);
  return (
    <Container>
      <Typography variant="h3" textAlign={"center"} mt={"2rem"}>
        Car Rental App - Search, Compare and Save
      </Typography>
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
                rules={{
                  required: true,
                  validate: (value) =>
                    dayjs(value) > dayjs(form.getValues("dropoffDate"))
                      ? true
                      : "Pickup date cannot be earlier than pickup date",
                }}
                render={({ field }) => {
                  return (
                    <DatePicker
                      label="Pick-up date"
                      onChange={(date) => {
                        field.onChange(date);
                      }}
                      value={dayjs(field.value)}
                      sx={{ width: 300 }}
                      slotProps={{
                        textField: {
                          error: true,
                          helperText: errors.pickupDate?.message,
                        },
                      }}
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
              <Controller
                control={control}
                name="dropoffDate"
                rules={{
                  required: true,
                  validate: (value) =>
                    dayjs(value) < dayjs(form.getValues("pickupDate"))
                      ? true
                      : "Dropoff date must later than pickup date",
                }}
                render={({ field }) => {
                  return (
                    <DatePicker
                      label="Drop-off date"
                      onChange={(date) => {
                        field.onChange(date);
                      }}
                      value={dayjs(field.value)}
                      sx={{ width: 300 }}
                      slotProps={{
                        textField: {
                          error: true,
                          helperText: errors.dropoffDate?.message,
                        },
                      }}
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
