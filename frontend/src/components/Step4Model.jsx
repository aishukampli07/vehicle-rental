import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

export default function Step4Model({ onNext, vehicleType }) {
  const [models, setModels] = useState([]);
  const [selectedModelId, setSelectedModelId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!vehicleType) return;

    setLoading(true);
    axios
      .get(`http://localhost:5000/api/vehicles/models/${vehicleType}`)
      .then((res) => {
        console.log("Models fetched:", res.data);
        setModels(res.data);
      })
      .catch((err) => {
        console.error("Error fetching models:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [vehicleType]);

  const handleNext = () => {
    if (!selectedModelId) {
      setError(true);
      return;
    }
    setError(false);
    const selected = models.find((m) => m.id.toString() === selectedModelId);
    onNext({ vehicleModel: selected.model, vehicleId: selected.id });
  };

  return (
    <Box className="flex flex-col gap-4 max-w-md mx-auto mt-10 p-4 shadow-md rounded-xl bg-white">
      <Typography variant="h6" className="text-center">
        Choose a {vehicleType} model:
      </Typography>

      <FormControl disabled={loading || models.length === 0}>
        <FormLabel>Available Models</FormLabel>
        <RadioGroup
          value={selectedModelId}
          onChange={(e) => setSelectedModelId(e.target.value)}
        >
          {models.map((model) => (
            <FormControlLabel
              key={model.id}
              value={model.id.toString()}
              control={<Radio />}
              label={model.model}
            />
          ))}
        </RadioGroup>
      </FormControl>

      {loading && (
        <Box className="flex justify-center">
          <CircularProgress size={20} />
        </Box>
      )}

      {models.length === 0 && !loading && (
        <Typography color="textSecondary">
          No models found for {vehicleType}.
        </Typography>
      )}

      {error && (
        <Typography color="error">Please select a model</Typography>
      )}

      <Button variant="contained" onClick={handleNext}>
        Next
      </Button>
    </Box>
  );
}
