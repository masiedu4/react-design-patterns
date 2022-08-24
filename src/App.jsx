/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 16/08/2022 - 17:18:36
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 16/08/2022
 * - Author          : Michael
 * - Modification    :
 **/

import CurrentUserLoader from "./CurrentUserLoader";
import { UserInfo } from "./components/UserInfo";
import { UserLoader } from "./UserLoader";

function App() {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>

      <UserLoader userId="1">
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;
