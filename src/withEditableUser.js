/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 12/09/2022 - 14:46:51
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 12/09/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React, { useState, useEffect } from "react";
import axios from "axios";

export const withEditableUser = (Component, userId) => {
  return (props) => {
    const [originalUser, setOriginalUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setOriginalUser(response.data);
        setUser(response.data);
      })();
    }, []);

    const onChangeUser = (changes) => {
      setUser({ ...user, ...changes });
    };

    const onSaveUser = async () => {
      const response = await axios.post(`users/${userId}`, { user });
      setOriginalUser(response.data);
      setUser(response.data);
    };

    const onResetUser = () => {
      setUser(originalUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onSaveUser={onSaveUser}
        onChangeUser={onChangeUser}
        onResetUser={onResetUser}
      />
    );
  };
};
