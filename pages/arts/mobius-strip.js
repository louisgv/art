import { useEffect, useRef } from "react";
import Layout from "components/layout";
import { ArtCanvas } from "components/art-canvas";
import { OrangePurpleSignature } from "components/signature";
import styled from "@emotion/styled";
// draw a mobius strip on top of
// the canvas
function drawMobiusStrip(ctx) {
  // using black stroke color and 1px line width
  ctx.strokeStyle = "black";
  ctx.lineWidth = 1;
  // draw a 2D mobius strip cartoon on the canvas
  // that is a 3D mapping representation of the shape
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 100);
  ctx.lineTo(100, 100);
  ctx.lineTo(100, 0);
  ctx.lineTo(0, 0);
  ctx.stroke();
}

const FlexBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow: scroll;
  height: 100%;
`;

const Box = styled.div`
  display: flex;
  position: relative;
  flex-basis: 150px;
  max-width: 150px;
  width: auto;
  flex-grow: 1;
  height: 300px;
  border-radius: 12px;
  /* padding: 12px; */

  align-items: center;
  justify-content: center;
  color: #aaa;

  margin: 8px;
`;

// an array of objects that represent a random color and a random number between 1 and 200
const colorBoxes = [
  { color: "red", number: 1 },
  { color: "orange", number: 2 },
  { color: "yellow", number: 3 },
  { color: "green", number: 4 },
  { color: "blue", number: 5 },
  { color: "purple", number: 6 },
  { color: "pink", number: 7 },
  { color: "black", number: 8 },
  { color: "white", number: 9 },
  { color: "gray", number: 10 },
];

const OrangeBox = styled(Box)`
  background-color: orange;
`;

const PurpleBox = styled(Box)`
  background-color: purple;
`;

const CyanBox = styled(Box)`
  background-color: cyan;
`;

export default function MobiusStrip() {
  const canvasRef = useRef(null);

  // useEffect(() => {
  //   const ctx = canvasRef.current.getContext("2d");

  //   drawMobiusStrip(ctx);
  // }, []);

  return (
    <Layout hideAvatar name="Mobius Strip">
      <ArtCanvas>
        <FlexBoxContainer>
          {/* <OrangeBox />
          <PurpleBox />
          <CyanBox /> */}

          {colorBoxes.map(({ color, number }, i) => (
            <Box
              key={number + "-" + i}
              style={{
                backgroundColor: color,
              }}
            >
              {number}
            </Box>
          ))}
        </FlexBoxContainer>

        {/* <canvas style={{ width: "100%", height: "100%" }} ref={canvasRef} /> */}
        <OrangePurpleSignature />
      </ArtCanvas>
    </Layout>
  );
}
