import React from "react";
import styled from "styled-components";

const DraggableBox = () => {
  return (
    <Draggable>
      <Button>OpenButton</Button>
      <Box>
        <DragContent></DragContent>
        <Button>CloseButton</Button>
      </Box>
    </Draggable>
  );
};

const Draggable = styled.div``;
const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: lightgrey;
  border-radius: 10px;
  border: 3px solid grey;
  position: absolute;
  cursor: move;
  top: 150px;
  left: 50px;
`;

const DragContent = styled.div``;

const Button = styled.button`
  border-radius: 10px;
  border: 3px solid black;
  margin-left: 10px;
  width: 100px;
  height: 30px;
  margin-top: 10px;
  margin: 0 auto;
  margin-top: 10px;
`;

export default DraggableBox;
