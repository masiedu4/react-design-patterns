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
import { printProps } from "./printProps";
import UserInfo from "./UserInfo";
import { withUser } from "./withUser";

const UserWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo);
function App() {
  return (
    <>
      <UserWrapped
        person={{
          name: "Michael",
          age: 30,
          hairColor: "brown",
          hobbies: ["programming", "reading", "writing"],
        }}
      />

      <UserInfoWithLoader />
    </>
  );
}

export default App;
