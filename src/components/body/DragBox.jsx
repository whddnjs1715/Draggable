import React, { useState } from "react";
import styled from "styled-components";

const DraggableBox = () => {
  const [modal, setModal] = useState(true);
  const [diffX, setDiffX] = useState(0);
  const [diffY, setDiffY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [style, setStyle] = useState({});

  const dragStart = (e) => {
    setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left);
    setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top);
    setDragging(true);
  };

  const dragged = (e) => {
    if (dragged) {
      const left = e.screenX - diffX;
      const top = e.screenY - diffY;

      setStyle({
        styles: {
          left: left,
          top: top,
        },
      });
    }
  };

  const dragEnd = (e) => {
    setDragging(false);
  };

  return (
    <Draggable>
      <Button onClick={() => setModal(true)}>OpenButton</Button>
      {modal === true ? (
        <Box
          style={style.styles}
          onMouseDown={(e) => {
            dragStart(e);
          }}
          onMouseMove={(e) => {
            dragged(e);
          }}
          onMouseUp={(e) => {
            dragEnd(e);
          }}
        >
          <DragContent></DragContent>
          <Button>CloseButton</Button>
        </Box>
      ) : null}
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
