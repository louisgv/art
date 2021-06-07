import artStyles from "features/donuts/donuts.module.css";
import { Blueberry, Orange } from "./icon";

export const LABSignature = () => (
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
);

export const OrangePurpleSignature = () => (
  <div
    style={{
      background: "black",
      color: "white",
      width: 44,
      height: 44,
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      bottom: 0,
      right: 0,
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "100%",
        width: "50%",
      }}
    >
      <div
        style={{
          // background: "#FF971A",

          background: "white",
          width: "100%",
          height: "50%",
        }}
      >
        <Orange />
      </div>
      <div
        className={artStyles.cMove}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // color: "black",
          // background: "white",
          background: "#FF971A",
          width: "100%",
          height: "50%",
        }}
      >
        C
      </div>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        height: "100%",
        width: "50%",
      }}
    >
      <div
        className={artStyles.kMove}
        style={{
          background: "#CC6BB1",
          // color: "black",
          // background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "50%",
        }}
      >
        K
      </div>
      <div
        style={{
          // background: "#CC6BB1",

          background: "white",
          width: "100%",
          height: "50%",
        }}
      >
        <Blueberry />
      </div>
    </div>
  </div>
);
