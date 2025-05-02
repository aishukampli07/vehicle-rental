// import React, { useState } from "react";
// import Step1UserInfo from "./components/Step1UserInfo";

// function App() {
//   const [stepData, setStepData] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       {!stepData ? (
//         <Step1UserInfo onNext={(data) => setStepData(data)} />
//       ) : (
//         <div className="text-center mt-10 text-xl">
//           Hello {stepData.firstName} {stepData.lastName}! 🎉
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;



// import React, { useState } from "react";
// import Step1UserInfo from "./components/Step1UserInfo";
// import Step2Wheels from "./components/Step2Wheels";

// function App() {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({});

//   const handleNext = (data) => {
//     setFormData((prev) => ({ ...prev, ...data }));
//     setStep((prev) => prev + 1);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       {step === 1 && <Step1UserInfo onNext={handleNext} />}
//       {step === 2 && <Step2Wheels onNext={handleNext} />}
//       {step === 3 && (
//         <div className="text-center text-xl mt-10">
//           <p>Thank you! You selected a {formData.wheels}-wheeler.</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import Step1UserInfo from "./components/Step1UserInfo";
import Step2Wheels from "./components/Step2Wheels";
import Step3VehicleType from "./components/Step3VehicleType";
import Step4Model from "./components/Step4Model";
import Step5BookingDates from "./components/Step5BookingDates";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {step === 1 && <Step1UserInfo onNext={handleNext} />}
      {step === 2 && <Step2Wheels onNext={handleNext} />}
      {step === 3 && (
        <Step3VehicleType wheels={formData.wheels} onNext={handleNext} />
      )}
      {step === 4 && (
        <Step4Model vehicleType={formData.vehicleType} onNext={handleNext} />
      )}
      {step === 5 && <Step5BookingDates onNext={handleNext} />}
      {step === 6 && (
        <div className="text-center text-xl mt-10 bg-white p-6 rounded shadow max-w-md mx-auto">
          <p className="mb-2">
            <strong>Booking Confirmed!</strong>
          </p>
          <p className="mb-2">
            <strong>Name:</strong> {formData.firstName} {formData.lastName}
          </p>
          <p className="mb-2">
            <strong>Wheels:</strong> {formData.wheels}
          </p>
          <p className="mb-2">
            <strong>Type:</strong> {formData.vehicleType}
          </p>
          <p className="mb-2">
            <strong>Model:</strong> {formData.vehicleModel} (ID:{" "}
            {formData.vehicleId})
          </p>
          <p className="mb-2">
            <strong>From:</strong> {formData.startDate}
          </p>
          <p className="mb-2">
            <strong>To:</strong> {formData.endDate}
          </p>
          <p className="mt-4 text-green-600 font-semibold">
            ✅ Thank you for booking!
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
