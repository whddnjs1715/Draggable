import styled from "styled-components";
import React from "react";

function Navbar() {
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

  return (
    <HeaderLayout>
      <HeaderLayer>Bear Robotics</HeaderLayer>
    </HeaderLayout>
  );
}

export default Navbar;
