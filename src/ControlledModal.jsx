/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 29/08/2022 - 09:31:30
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 29/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import { useState } from "react";
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
// here, we will pass the state controlled by the...
// parent component to the child component.ie in the App.jsx
export const ControlledModal = ({ shouldShow, onRequestClose, children }) => {
  return shouldShow ? (
    <>
      <ModalBackground onClick={onRequestClose}>
        <ModalBody onClick={onRequestClose}>
          <button onClick={onRequestClose}>Hide Modal</button>
          {children}
        </ModalBody>
      </ModalBackground>
    </>
  ) : null;
};
