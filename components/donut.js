import { Fragment } from "react";
import { between } from "../pages/api/randomid";

const roundCenterItem = {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100%",
};

const sprinkeColors = ["yellow", "red", "blue", "green"];

let i = 0;

const getSprinkleColor = () => {
  if (i === sprinkeColors.length) i = between(0, sprinkeColors.length - 1);
  return sprinkeColors[i++];
};

const Sprinkle = ({
  top = "auto",
  left = "auto",
  bottom = "auto",
  right = "auto",
  rotation = between(0, 360),
}) => (
  <div
    style={{
      zIndex: 50,
      boxShadow: "4px 4px 4px rgba(222,38,141,255)",
      background: getSprinkleColor(),
      width: 12,
      height: 4,
      position: "absolute",
      top,
      left,
      bottom,
      right,
      borderRadius: 10,
      transform: `rotateZ(${rotation}deg)`,
    }}
  />
);

const makeSprinkles = (length = between(16, 32)) => {
  return Array.from({
    length,
  }).map((_, i) => (
    <Fragment key={"sprinkle=" + i}>
      <Sprinkle top={between(0, 120)} left={between(0, 120)} />

      <Sprinkle bottom={between(0, 120)} left={between(0, 120)} />

      <Sprinkle top={between(0, 120)} right={between(0, 120)} />

      <Sprinkle bottom={between(0, 120)} right={between(0, 120)} />
    </Fragment>
  ));
};

const CreamDrop = ({
  top = "auto",
  left = "auto",
  bottom = "auto",
  right = "auto",
  scale = 1,
}) => (
  <div
    style={{
      background: "white",
      borderRadius: "100%",
      width: 0.8 * scale,
      height: 0.8 * scale,
      position: "absolute",
      zIndex: 100,
      top,
      left,
      bottom,
      right,
    }}
  />
);

const BiteMark = ({ background }) => (
  <>
    <div
      style={{
        zIndex: 200,
        background,
        borderRadius: "100%",
        position: "absolute",
        width: 64,
        height: 64,
        top: 20,
        right: 20,
      }}
    />

    <div
      style={{
        zIndex: 200,
        background,
        borderRadius: "100%",
        position: "absolute",
        width: 64,
        height: 64,
        top: -8,
        right: 48,
      }}
    />
    <div
      style={{
        zIndex: 200,
        background,
        borderRadius: "100%",
        position: "absolute",
        width: 64,
        height: 64,
        top: 48,
        right: -16,
      }}
    />
  </>
);
const staticDrops = () => [
  { top: between(64, 80), left: between(40, 80), scale: between(15, 40) },
  { top: between(64, 80), left: between(40, 80), scale: between(15, 40) },
];

export const Donut = ({
  top = 0,
  left = 0,
  bitten = false,
  noDrop = false,
  noSprinkle = false,
  canvasBackground = "white",
}) => (
  <div
    style={{
      top,
      left,
      background: "rgba(255,0,154,255)",
      width: 320,
      height: 320,
      position: "absolute",
      boxShadow: "8px 12px rgba(242,201,121,255)",
      border: "2px solid pink",
      ...roundCenterItem,
    }}
  >
    {bitten && <BiteMark background={canvasBackground} />}
    {!noDrop &&
      staticDrops().map((cProps, i) => (
        <CreamDrop key={"cdrop-" + i} {...cProps} />
      ))}

    <div
      style={{
        background: "rgba(255,0,154,255)",
        width: 240,
        height: 240,
        position: "absolute",
        ...roundCenterItem,
      }}
    >
      <div
        style={{
          background: "rgba(223,38,140,255)",
          width: 180,
          height: 180,
          ...roundCenterItem,
        }}
      >
        <div
          style={{
            zIndex: 100,
            background: canvasBackground,
            width: 120,
            height: 120,
            borderRadius: "100%",
          }}
        />
      </div>
      {!noSprinkle && makeSprinkles()}
    </div>
  </div>
);
