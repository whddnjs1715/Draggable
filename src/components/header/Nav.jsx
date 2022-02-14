import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <HeaderLayout>
      <HeaderLayer>Bear Robotics</HeaderLayer>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.div`
  background: black;
  width: 100%;
  display: flex;
  color: white;
  padding: 20px;
  font-weight: 600;
  font-size: 20px;
`;

const HeaderLayer = styled.div``;

export default Navbar;
