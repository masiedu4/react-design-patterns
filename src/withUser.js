/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 31/08/2022 - 07:14:36
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 31/08/2022
 * - Author          : Michael
 * - Modification    :
 **/

// what are Higher-Order Components?
// Well, HOCs returns a component instead of a JSX element.
// HOC can be used to share common complex functionality between components.
// Can also be used to add additional functionality to a component.

import { useState } from "react";

export const withUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        console.log(response);
        setUser(response.data);
      })();
    }, []);
    // user prop is passed to the component.
    // This is the user data fetched from the API.
    return <Component {...props} user={user} />;
  };
};
