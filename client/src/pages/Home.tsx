import React from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Vishwajit from "../../public/Vishwajit.jsx";
import { Suspense } from "react";

function Home() {
  return (
    <div>
      <div className="title z-10 flex justify-center text-4xl pt-3 mt-6 font-bold ">
        Welcome to My Compiler Project
      </div>
      <div className="mt-[10vh] z-0 bg-white h-[90vh] flex justify-center">
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
    </div>
  );
}

export default Home;
