import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Typography,
  Box,
} from "@mui/material";

export default function Step2Wheels({ onNext }) {
  const [wheels, setWheels] = useState("");
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!wheels) {
      setError(true);
      return;
    }
    setError(false);
    onNext({ wheels: parseInt(wheels) });
  };

  return (
    <Box className="flex flex-col gap-4 max-w-md mx-auto mt-10 p-4 shadow-md rounded-xl">
      <Typography variant="h6" className="text-center">
        How many wheels does the vehicle have?
      </Typography>

      <FormControl>
        <FormLabel>Number of Wheels</FormLabel>
        <RadioGroup
          value={wheels}
          onChange={(e) => setWheels(e.target.value)}
        >
          <FormControlLabel value="2" control={<Radio />} label="2 Wheeler" />
          <FormControlLabel value="4" control={<Radio />} label="4 Wheeler" />
        </RadioGroup>
      </FormControl>

      {error && (
        <Typography color="error">Please select an option</Typography>
      )}

      <Button variant="contained" onClick={handleNext}>
        Next
      </Button>
    </Box>
  );
}
