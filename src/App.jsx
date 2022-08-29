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
import { UnControlledModal } from "./UncontrolledModal";
import { useState } from "react";
import { ControlledModal } from "./ControlledModal";

function App() {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <div className="App">
      <ControlledModal
        shouldShow={shouldShow}
        onRequestClose={() => setShouldShow(false)}
      >
        <h1> Hey</h1>
      </ControlledModal>
      <button onClick={() => setShouldShow(!shouldShow)}>
        {" "}
        {shouldShow ? "Hide Modal" : "Show Modal"}
      </button>
    </div>
  );
}

export default App;
