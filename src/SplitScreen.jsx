/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 16/08/2022 - 17:33:23
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 16/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: 1;
`;
const SplitScreen = ({ left: Left, right: Right }) => {
  // props for the left and right hand will be passed in the App.jsx
  return (
    <Container>
      <Pane>
        <Left />
      </Pane>
      <Pane>
        <Right />
      </Pane>
    </Container>
  );
};

export default SplitScreen;
