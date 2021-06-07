import { ArtCanvas } from "components/art-canvas";
import Layout from "components/layout";
import { LABSignature } from "components/signature";
import styled from "@emotion/styled";

const CanvasObject = styled.div`
  position: absolute;
`;

const UranusContainer = styled(CanvasObject)`
  top: 100px;
  left: 100px;
`;

const UranusBall = styled(CanvasObject)`
  width: 200px;
  height: 200px;
  border-radius: 100%;

  background: radial-gradient(
    circle at -15% 10%,
    #16bffd 25%,
    #06effe 30%,
    #16bffd 35%,
    #fc87ff 70%,
    #18396d 85%
  );

  /* background: linear-gradient(
    120deg,
    #16bffd 25%,
    #06effe 30%,
    #16bffd 35%,
    #fc87ff 70%,
    #18396d 85%
  ); */

  transform: rotate(105deg);

  z-index: 2;
`;
//

const UranusRingFront = styled(CanvasObject)`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 2px solid lightpink;

  transform: scale(1.5) skew(30deg, 30deg);

  border-top-color: transparent;
  border-right-color: transparent;
  z-index: 3;
`;

const UranusRingBack = styled(CanvasObject)`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 2px solid lightpink;

  transform: scale(1.5) skew(30deg, 30deg);

  border-bottom-color: transparent;
  border-left-color: transparent;
  z-index: 1;
`;

const Uranus = () => (
  <UranusContainer>
    <UranusBall />
    <UranusRingFront />
    <UranusRingBack />
  </UranusContainer>
);

export default function Planets() {
  const canvasBackground = "#333";

  return (
    <Layout hideAvatar name="Planets">
      <ArtCanvas background={canvasBackground}>
        <Uranus />

        <LABSignature />
      </ArtCanvas>
    </Layout>
  );
}
