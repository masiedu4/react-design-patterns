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

// ResourceLoader is an upgrade of both userLoader and CurrentUserLoader.
// It can be used to load any data (both user and product) using their urls.

export const ResourceLoader = ({ resourceName, resourceUrl, children }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    // anonymous async func fetches data from server.js at the resourceUrl endpoint
    // resourceName and resourceUrl are props passed to the ResourceLoader component.
    // Value will the resourceName and resourceUrl prop will be satisfied in the App.jsx file
    (async () => {
      const response = await axios.get(resourceUrl);
      setState(response.data);
    })();
  }, [resourceUrl]);
  return (
    <>
      {/* the logic below ensure that the child components 
     placed under the resourceLoader component will get access to the user state  
    */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }

        return child;
      })}
    </>
  );
};
