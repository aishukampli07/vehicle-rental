import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Step5BookingDates({ onNext }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!startDate || !endDate || startDate > endDate) {
      setError(true);
      return;
    }
    setError(false);
    onNext({
      startDate: startDate.toISOString().split("T")[0],
      endDate: endDate.toISOString().split("T")[0],
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box className="flex flex-col gap-4 max-w-md mx-auto mt-10 p-4 shadow-md rounded-xl bg-white">
        <Typography variant="h6" className="text-center">
          Select Booking Dates
        </Typography>

        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />

        <DatePicker
          label="End Date"
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />

        {error && (
          <Typography color="error">
            Please select valid start and end dates.
          </Typography>
        )}

        <Button variant="contained" onClick={handleNext}>
          Confirm Booking
        </Button>
      </Box>
    </LocalizationProvider>
  );
}
