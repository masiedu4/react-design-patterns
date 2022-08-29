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
import ControlledForm from "./ControlledForm";
import UncontrolledForm from "./UncontrolledForm";

function App() {
  return (
    <div className="App">
      <UncontrolledForm />
      <hr />
      <ControlledForm />
    </div>
  );
}

export default App;
