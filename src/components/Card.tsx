import { animated, useSpring } from "@react-spring/three";
import { useRef, useState } from "react";

export function Card() {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);
  const { scale } = useSpring({
    scale: flipped ? 1.5 : 0.5,
  });

  return (
    <animated.mesh
      ref={cardRef}
      onClick={() => setFlipped(!flipped)}
      scale={scale}
    >
      <boxGeometry args={[2.5, 1, 0.1]} />
      <meshBasicMaterial />
    </animated.mesh>
  );
}
