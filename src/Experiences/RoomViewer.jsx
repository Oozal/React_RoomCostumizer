import { Stage, Center, useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Room";

import "../Styles/roomViewer.css";
export default function RoomViewer() {
  return (
    <>
      <Canvas camera={{ position: [5, 5, 40] }} className="three-canvas">
        <Stage environment="city" intensity={0.2} adjustCamera={0}>
          <Center>
            <OrbitControls
              enableDamping
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={(Math.PI * 3) / 4}
              minAzimuthAngle={-Math.PI / 4}
              maxAzimuthAngle={Math.PI / 4}
              minDistance={5}
              maxDistance={80}
            />
            <Model />
          </Center>
        </Stage>
      </Canvas>
    </>
  );
}
