import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Vishwajit from "@/models/Vishwajit.jsx";
import { Suspense } from "react";

function Home() {
  return (
    <div>
      <div className="title z-10 animate-pulse  flex justify-center text-5xl pt-3 mt-6 font-bold animate-slideIn">
        Welcome to My Web Compiler
      </div>
      <h2 className=" text-emerald-300  text-xl text-center font-serif mt-3">
        Upcoming Update
        <div className="text-sm mt-1">Threejs Animation</div>
      </h2>

      <div className="mt-[6vh] z-0 bg-white h-[90vh] flex justify-center">
        <Canvas>
          <ambientLight />
          <OrbitControls />
          <Suspense fallback={null}>
            {/* Set the position property to ensure the model is above other elements */}
            <Vishwajit position={[0, 0, 1]} />
          </Suspense>
          <Environment preset="sunset" />
          <ContactShadows scale={20} />
        </Canvas>
      </div>
      <div className="mt-[10vh] z-0 bg-white h-[90vh] flex justify-center"></div>
    </div>
  );
}

export default Home;
