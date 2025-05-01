import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

export default function Step1UserInfo({ onNext }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (firstName.trim() === "" || lastName.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    onNext({ firstName, lastName });
  };

  return (
    <Box className="flex flex-col gap-4 max-w-md mx-auto mt-10 p-4 shadow-md rounded-xl">
      <Typography variant="h6" className="text-center">
        What is your name?
      </Typography>

      <TextField
        label="First Name"
        variant="outlined"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        fullWidth
        error={error && !firstName}
      />

      <TextField
        label="Last Name"
        variant="outlined"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        fullWidth
        error={error && !lastName}
      />

      {error && (
        <Typography color="error">Please fill out both fields</Typography>
      )}

      <Button variant="contained" onClick={handleNext}>
        Next
      </Button>
    </Box>
  );
}
