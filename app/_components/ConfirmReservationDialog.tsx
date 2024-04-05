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
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Car } from "@prisma/client";
import React, { useEffect, useState } from "react";
import data from "@/app/pl.json";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm, Controller, set } from "react-hook-form";
import dayjs from "dayjs";
import calculateDaysDiff from "../lib/calculateDaysDiff";
import { bookCar } from "../lib/actions";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

type ConfrimReservationDialogProps = {
  open: boolean;
  onClose: (value: string) => void;
  pickupLocation: string | null;
  dropoffLocation: string | null;
  pickupDate: string | null;
  pickupTime: string | null;
  dropoffDate: string | null;
  dropoffTime: string | null;
  car: Car;
};

type FormValues = {
  pickupLocation: string;
  dropoffLocation?: string;
  pickupDate: Date;
  pickupTime: Date;
  dropoffDate: Date;
  dropoffTime: Date;
};

export default function ConfirmReservationDialog(props: ConfrimReservationDialogProps) {
  const {
    open,
    onClose,
    pickupLocation,
    dropoffLocation,
    pickupDate,
    pickupTime,
    dropoffDate,
    dropoffTime,
    car,
  } = props;
  const [dropOffDifferentLocation, setDropOffDifferentLocation] = useState(false);
  const { user } = useUser();
  const router = useRouter();
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
      pickupLocation: pickupLocation || "",
      dropoffLocation: dropoffLocation || "",
      pickupDate: pickupDate !== null ? new Date(pickupDate) : new Date(),
      pickupTime:
        pickupTime !== null
          ? new Date("December 17, 1995 " + pickupTime)
          : new Date("December 17, 1995 10:00:00"),
      dropoffDate: dropoffDate !== null ? new Date(dropoffDate) : createNewDatePlusThreeDays(),
      dropoffTime:
        dropoffTime !== null
          ? new Date("December 17, 1995 " + dropoffTime)
          : new Date("December 17, 1995 10:00:00"),
    },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = async (data: any) => {
    if (!user) {
      router.push("/auth/signin");
    } else {
      const pickupDate = new Date(data.pickupDate);
      const dropoffDate = new Date(data.dropoffDate);
      const pickupTime = new Date(data.pickupTime);
      const dropoffTime = new Date(data.dropoffTime);
      pickupDate.setHours(pickupTime.getHours());
      dropoffDate.setHours(dropoffTime.getHours());
      pickupDate.setMinutes(pickupTime.getMinutes());
      dropoffDate.setMinutes(dropoffTime.getMinutes());
      let dropoffLocationParams = data.dropoffLocation;
      let dropoffLocation = dropoffLocationParams ? dropoffLocationParams : car.city;
      console.log(data.pickupDate, data.dropoffDate);
      await bookCar(
        car.id,
        user.id,
        data.pickupLocation,
        dropoffLocation,
        pickupDate,
        dropoffDate,
        cost,
        car.securityDeposit
      );
      router.push("/thank-you");
    }
  };
  const [cost, setCost] = useState(
    calculateDaysDiff(form.getValues("pickupDate"), form.getValues("dropoffDate")) * car.pricePerDay
  );
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Reservation</DialogTitle>
      <Box px={"1rem"}>
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
                sx={{ width: 280 }}
                defaultValue={{ label: pickupLocation || "" }}
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
                  sx={{ width: 280 }}
                  defaultValue={{ label: dropoffLocation || "" }}
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
              checked={dropOffDifferentLocation}
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
                      dayjs(value) < dayjs(form.getValues("dropoffDate"))
                        ? true
                        : "Pickup date cannot be earlier than dropoff date",
                  }}
                  render={({ field }) => {
                    return (
                      <DatePicker
                        label="Pick-up date"
                        onChange={(date) => {
                          field.onChange(date);
                          setCost(
                            calculateDaysDiff(form.getValues("pickupDate"), form.getValues("dropoffDate")) *
                              car.pricePerDay
                          );
                        }}
                        value={dayjs(field.value)}
                        sx={{ width: 280 }}
                        slotProps={{
                          textField: {
                            error: errors.pickupDate ? true : false,
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
                        sx={{ width: 280 }}
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
                      dayjs(value) > dayjs(form.getValues("pickupDate"))
                        ? true
                        : "Dropoff date must be later than pickup date",
                  }}
                  render={({ field }) => {
                    return (
                      <DatePicker
                        label="Drop-off date"
                        onChange={(date) => {
                          field.onChange(date);
                          setCost(
                            calculateDaysDiff(form.getValues("pickupDate"), form.getValues("dropoffDate")) *
                              car.pricePerDay
                          );
                        }}
                        value={dayjs(field.value)}
                        sx={{ width: 280 }}
                        slotProps={{
                          textField: {
                            error: errors.dropoffDate ? true : false,
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
                        sx={{ width: 280 }}
                      />
                    );
                  }}
                />
              </Box>
            </LocalizationProvider>
            <Typography variant="h4">Total Price - ${cost}</Typography>
            <Box mt={"1rem"}>
              <Button type="submit" variant="contained" size="large">
                Reserve
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Dialog>
  );
}
