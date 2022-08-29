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

import UncontrolledOnboarding from "./UncontrolledOnboarding";
const StepOne = ({ goToNext }) => {
  return (
    <>
      <h1> Step One </h1>
      <button onClick={() => goToNext({ name: "Asiedu" })}> Next</button>
    </>
  );
};
const StepTwo = ({ goToNext }) => {
  return (
    <>
      <h1> Step two </h1>
      <button onClick={() => goToNext({ age: "10" })}> Next</button>
    </>
  );
};

const StepThree = ({ goToNext }) => {
  return (
    <>
      <h1> Step Three </h1>
      <button onClick={() => goToNext({ hairColor: "brown" })}> Next</button>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <UncontrolledOnboarding
        onFinish={(data) => {
          console.log(data);
          alert("Onboarding finished");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboarding>
    </div>
  );
}

export default App;
