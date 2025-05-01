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

import React, { useState } from "react";
import Step1UserInfo from "./components/Step1UserInfo";
import Step2Wheels from "./components/Step2Wheels";

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
        <div className="text-center text-xl mt-10">
          <p>Thank you! You selected a {formData.wheels}-wheeler.</p>
        </div>
      )}
    </div>
  );
}

export default App;
