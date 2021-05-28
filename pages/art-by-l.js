import { Donut } from "../components/donut";
import Layout from "../components/layout";

import artStyles from "../styles/art-by-l.module.css";

export default function ArtByL() {
  const canvasBackground = "whitesmoke";

  return (
    <Layout hideAvatar>
      <div
        style={{
          background: canvasBackground,
          border: "2px dashed gray",
          height: "80vh",
          position: "relative",
        }}
      >
        <div
          class={artStyles.rotate}
          style={{
            background: "black",
            color: "white",
            width: 45,
            height: 45,
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bottom: 0,
            right: 0,
          }}
        >
          <span style={{ fontSize: 9 }}>❤</span>
          <span style={{ fontSize: 16 }}>☮</span>
          <span style={{ fontSize: 9 }}>🤚</span>
        </div>

        <Donut noSprinkle canvasBackground={canvasBackground} />
        <Donut
          top={240}
          left={240}
          noDrop
          bitten
          canvasBackground={canvasBackground}
        />

        <Donut top={300} left={-60} canvasBackground={canvasBackground} />
      </div>
    </Layout>
  );
}
