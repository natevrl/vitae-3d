import { Environment } from "@react-three/drei";
import FloatingCan from "@/components/ui/3d/FloatingCan";


function MainScene() {
  return (
    <group>
      <Environment files="/images/hdrs/lobby.hdr" environmentIntensity={1.5} />
      <FloatingCan />
    </group>
  );
}

export default MainScene;
