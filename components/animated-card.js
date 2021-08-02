import styled from "@emotion/styled";
import { useSpring, animated, to } from "@react-spring/web";
import React, { useRef, useEffect, Fragment } from "react";
import { useGesture } from "react-use-gesture";

const Card = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-grow: 1;

  height: 180px;

  color: white;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  position: relative;

  margin: 8px;

  h1,
  h3 {
    margin: 0;
  }
`;

const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20;

const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20;

export const AnimatedCard = ({ children, style }) => {
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();

    document.addEventListener("gesturestart", preventDefault);
    document.addEventListener("gesturechange", preventDefault);

    return () => {
      document.removeEventListener("gesturestart", preventDefault);
      document.removeEventListener("gesturechange", preventDefault);
    };
  }, []);

  const domTarget = useRef(null);

  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
    })
  );

  useGesture(
    {
      onDrag: ({ active, offset: [x, y] }) =>
        api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
      onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.1,
        }),
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    { domTarget, eventOptions: { passive: false } }
  );

  return (
    <Card
      style={{
        transform: "perspective(600px)",
        x,
        y,
        scale: to([scale, zoom], (s, z) => s + z),
        rotateX,
        rotateY,
        rotateZ,
        ...style,
      }}
      ref={domTarget}
    >
      {children}
    </Card>
  );
  // <Card>{children}</Card>;
  // <Card>{children}</Card>;
};
