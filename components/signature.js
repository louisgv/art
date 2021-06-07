import artStyles from "features/donuts/donuts.module.css";

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
