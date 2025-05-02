// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   Button,
//   Typography,
//   Box,
//   CircularProgress,
// } from "@mui/material";

// export default function Step3VehicleType({ onNext, wheels }) {
//   const [vehicleTypes, setVehicleTypes] = useState([]);
//   const [selectedType, setSelectedType] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     if (!wheels) return;

//     setLoading(true);
//     const url = `http://localhost:5000/api/vehicles/types/${wheels}`;
//     console.log("Step3: wheels =", wheels);
//     console.log("Fetching from:", url);

//     axios
//       .get(url)
//       .then((res) => {
//         const types = res.data.map((item) => item.type);
//         console.log("Step3: types received =", types);
//         setVehicleTypes(types);
//       })
//       .catch((err) => {
//         console.error("Step3: Error fetching types:", err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [wheels]);

//   const handleNext = () => {
//     if (!selectedType) {
//       setError(true);
//       return;
//     }
//     setError(false);
//     onNext({ vehicleType: selectedType });
//   };

//   return (
//     <Box className="flex flex-col gap-4 max-w-md mx-auto mt-10 p-4 shadow-md rounded-xl bg-white">
//       <Typography variant="h6" className="text-center">
//         What type of {wheels}-wheeler do you want?
//       </Typography>

//       <FormControl disabled={loading || vehicleTypes.length === 0}>
//         <FormLabel>Vehicle Type</FormLabel>
//         <RadioGroup
//           value={selectedType}
//           onChange={(e) => setSelectedType(e.target.value)}
//         >
//           {vehicleTypes.map((type) => (
//             <FormControlLabel
//               key={type}
//               value={type}
//               control={<Radio />}
//               label={type}
//             />
//           ))}
//         </RadioGroup>
//       </FormControl>

//       {loading && (
//         <Box className="flex justify-center">
//           <CircularProgress size={20} />
//         </Box>
//       )}

//       {vehicleTypes.length === 0 && !loading && (
//         <Typography color="textSecondary">
//           No vehicle types available for {wheels}-wheeler.
//         </Typography>
//       )}

//       {error && (
//         <Typography color="error">Please select a vehicle type</Typography>
//       )}

//       <Button variant="contained" onClick={handleNext}>
//         Next
//       </Button>
//     </Box>
//   );
// }




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

export default function Step3VehicleType({ onNext, wheels }) {
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!wheels) return;

    setLoading(true);
    const url = `http://localhost:5000/api/vehicles/types/${wheels}`;
    console.log("Step3: wheels =", wheels);
    console.log("Fetching from:", url);

    axios
      .get(url)
      .then((res) => {
        const types = res.data.map((item) => item.type);
        console.log("Step3: types received =", types);
        setVehicleTypes(types);
      })
      .catch((err) => {
        console.error("Step3: Error fetching types:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [wheels]);

  const handleNext = () => {
    if (!selectedType) {
      setError(true);
      return;
    }
    setError(false);
    onNext({ vehicleType: selectedType });
  };

  return (
    <Box className="flex flex-col gap-4 max-w-md mx-auto mt-10 p-4 shadow-md rounded-xl bg-white">
      <Typography variant="h6" className="text-center">
        What type of {wheels}-wheeler do you want?
      </Typography>

      <FormControl disabled={loading || vehicleTypes.length === 0}>
        <FormLabel>Vehicle Type</FormLabel>
        <RadioGroup
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          {vehicleTypes.map((type) => (
            <FormControlLabel
              key={type}
              value={type}
              control={<Radio />}
              label={type}
            />
          ))}
        </RadioGroup>
      </FormControl>

      {loading && (
        <Box className="flex justify-center">
          <CircularProgress size={20} />
        </Box>
      )}

      {vehicleTypes.length === 0 && !loading && (
        <Typography color="textSecondary">
          No vehicle types available for {wheels}-wheeler.
        </Typography>
      )}

      {error && (
        <Typography color="error">Please select a vehicle type</Typography>
      )}

      <Button variant="contained" onClick={handleNext}>
        Next
      </Button>
    </Box>
  );
}
