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
const StepOne = ({ goToNext, goToPrevious }) => {
  return (
    <>
      <h1> Step One </h1>
      <button onClick={goToNext}> Next</button>
      <button onClick={goToPrevious}>Previous</button>
    </>
  );
};
const StepTwo = ({ goToNext, goToPrevious }) => {
  return (
    <>
      <h1> Step two </h1>
      <button onClick={goToNext}> Next</button>
      <button onClick={goToPrevious}>Previous</button>
    </>
  );
};

const StepThree = ({ goToNext, goToPrevious }) => {
  return (
    <>
      <h1> Step Three </h1>
      <button onClick={goToNext}> Next</button>
      <button onClick={goToPrevious}>Previous</button>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <UncontrolledOnboarding>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboarding>
    </div>
  );
}

export default App;
