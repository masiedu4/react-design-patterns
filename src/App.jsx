/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 29/08/2022 - 01:02:56
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 29/08/2022
 * - Author          : Michael
 * - Modification    :
 **/

// import UncontrolledOnboarding from "./UncontrolledOnboarding";
// const StepOne = ({ goToNext }) => {
//   return (
//     <>
//       <h1> Step One </h1>
//       <button onClick={() => goToNext({ name: "Asiedu" })}> Next</button>
//     </>
//   );
// };
// const StepTwo = ({ goToNext }) => {
//   return (
//     <>
//       <h1> Step two </h1>
//       <button onClick={() => goToNext({ age: "10" })}> Next</button>
//     </>
//   );
// };

// const StepThree = ({ goToNext }) => {
//   return (
//     <>
//       <h1> Step Three </h1>
//       <button onClick={() => goToNext({ hairColor: "brown" })}> Next</button>
//     </>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <UncontrolledOnboarding
//         onFinish={(data) => {
//           console.log(data);
//           alert("Onboarding finished");
//         }}
//       >
//         <StepOne />
//         <StepTwo />
//         <StepThree />
//       </UncontrolledOnboarding>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { ControlledOnboarding } from "./ControlledOnboaring";
const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 50 })}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <p>Congratulations! You qualify for our senior discount</p>
    <button onClick={() => goToNext({})}>Next</button>
  </>
);
const StepFour = ({ goToNext }) => (
  <>
    <h1>Step 4</h1>
    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
);

function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <ControlledOnboarding currentIndex={currentIndex} onNext={onNext}>
      <StepOne />
      <StepTwo />
      {onboardingData.age >= 62 && <StepThree />}
      <StepFour />
    </ControlledOnboarding>
  );
}

export default App;
