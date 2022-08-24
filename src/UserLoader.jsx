/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 24/08/2022 - 05:56:36
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 24/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React, { useState, useEffect } from "react";
import axios from "axios";

// UserLoader is an upgrade Of CurrentUserLoader.
// It can be used to load any user using their ids.

export const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // anonymous async func fetches data from server.js at the /user/${id} endpoint
    // userId is a prop passed to the UserLoader component.
    // Value will the userId prop will be satisfied in the App.jsx file
    (async () => {
      const response = await axios.get(`users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);
  return (
    <>
      {/* the logic below ensure that the child components 
     placed under the currentUserLoader component will get access to the user state  
    */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }

        return child;
      })}
    </>
  );
};
