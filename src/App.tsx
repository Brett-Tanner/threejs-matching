import { Canvas } from "@react-three/fiber";
import { Card } from "./components/Card";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function App() {
  return (
    <main id="canvas-container" style={{ width: "100vw", height: "100vh" }}>
      <Canvas frameloop="demand">
        <ambientLight intensity={0.5} />
        <directionalLight color="red" position={[0, 0, 5]} />
        {cards.map((card) => (
          <Card key={card} />
        ))}
      </Canvas>
    </main>
  );
}

export default App;
