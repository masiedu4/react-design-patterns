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
import { UserForm } from "./UserForm";
import UserInfo from "./UserInfo";
import { withUser } from "./withUser";

const UserWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, "123");
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

      <UserForm />
    </>
  );
}

export default App;
