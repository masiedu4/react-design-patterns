/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 22/08/2022 - 13:51:14
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 22/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React, { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
`;

const Modal = ({ children }) => {
  const [shouldShow, setshouldShow] = useState(false);
  return (
    <>
      <button onClick={() => setshouldShow(true)}> Show Modal </button>
      {shouldShow && (
        <ModalBackground onClick={() => setshouldShow(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setshouldShow(false)}> Hide Modal</button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
