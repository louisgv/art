import { Donut } from "features/donuts/donut";

import Layout from "components/layout";

import { ArtCanvas } from "components/art-canvas";
import { OrangePurpleSignature } from "components/signature";

export default function Donuts() {
  const canvasBackground = "whitesmoke";

  return (
    <Layout hideAvatar name="Donuts">
      <ArtCanvas>
        <OrangePurpleSignature />

        <Donut noSprinkle canvasBackground={canvasBackground} />
        <Donut
          top={240}
          left={240}
          noDrop
          bitten
          canvasBackground={canvasBackground}
        />

        <Donut top={300} left={-60} canvasBackground={canvasBackground} />
      </ArtCanvas>
    </Layout>
  );
}
