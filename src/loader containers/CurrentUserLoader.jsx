/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 24/08/2022 - 05:35:22
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 24/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React, { useState, useEffect } from "react";
import axios from "axios";

const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // anonymous async func fetches data from server.js at the /current-user endpoint
    (async () => {
      const response = await axios.get("/current-user");
      setUser(response.data);
    })();
  }, []);
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

export default CurrentUserLoader;
