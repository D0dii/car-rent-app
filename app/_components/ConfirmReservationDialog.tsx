import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import { Car } from "@prisma/client";

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

export default function ConfirmReservationDialog(props: ConfrimReservationDialogProps) {
  const { open, onClose } = props;
  console.log(props);
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Reservation</DialogTitle>
      <Box>Confirm Reservation</Box>
    </Dialog>
  );
}
