/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 12/09/2022 - 15:47:18
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 12/09/2022
 * - Author          : Michael
 * - Modification    :
 **/
// using HOC directly instead of wrapping it in the App.jsx.

import { withEditableUser } from "./withEditableUser";

// wrapping HOC(withEditableUser) around the UserForm component directly
export const UserForm = withEditableUser(
  ({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || null;

    return user ? (
      <>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => onChangeUser({ name: e.target.value })}
          />
        </label>
        <label>
          Age:
          <input
            type="Number"
            value={age}
            onChange={(e) => onChangeUser({ age: e.target.value })}
          />
        </label>
        <label>
          Hair Color:
          <input
            type="text"
            value={hairColor}
            onChange={(e) => onChangeUser({ hairColor: e.target.value })}
          />
        </label>
        <button onClick={onResetUser}> Reset User</button>
        <button onClick={onSaveUser}> Save User</button>
      </>
    ) : (
      <p> Loading...</p>
    );
  },
  //   fetching the user(id=123) from the API
  "123"
);
