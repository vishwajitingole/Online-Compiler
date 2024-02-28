import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Vishwajit from "@/models/Vishwajit.jsx";
import { Suspense, useState } from "react";
import { motion } from "framer-motion";

function Home() {
  const [move, setMove] = useState(false);
  const [laptop, setLaptop] = useState(false);

  return (
    <div>
      <motion.div
        animate={{ x: 0, scale: 1 }}
        initial={{ x: -1000, scale: 0 }}
        transition={{ duration: 1 }}
        drag
        whileDrag={{ scale: 1.2 }}
        className="z-10 flex justify-center gap-2 pt-3 mt-6 text-5xl font-bold animate-pulse animate-slideIn"
      >
        <div className="title">Welcome</div>
        <div className="title">to</div>
        <div className="title">My</div>
        <div className="title">Web</div>
        <div className="title">Compiler</div>
      </motion.div>
      <div className="flex justify-center mt-3">
        <motion.div
          animate={{ x: laptop ? -20 : 0, y: 20000 }}
          initial={{ y: 0 }}
          transition={{ type: "inertia", velocity: 30 }}
          className=""
          onClick={() => {
            setLaptop(!laptop);
          }}
        >
          <img src="../../public/laptop.png" className="" alt="" />
        </motion.div>

        <motion.h2
          animate={{ x: move ? -500 : 0, scale: move ? 1 : 1 }}
          transition={{ bounce: 1 }}
          onClick={() => setMove(!move)}
          whileHover={{ scale: 1.1 }}
          whileDrag={{ x: 200 }}
          drag
          className="mt-3 font-serif text-xl text-center update text-emerald-300"
        >
          Upcoming Update (Click me)
          <div className="mt-1 text-sm updatext">Threejs Animation</div>
          <div className="mt-1 text-sm updatext">Framer Motion Animations</div>
          <motion.div
            animate={{ zoom: 1 }}
            initial={{ zoom: 2 }}
            className="mt-1 text-sm updatext animate-bounce"
          >
            Zoom-in the Avatar
          </motion.div>
        </motion.h2>
      </div>

      <div className="mt-[6vh] z-0 bg-sky-800 h-[90vh] flex justify-center">
        <Canvas>
          <ambientLight />
          <pointLight
            position={[100, 2, 10]}
            intensity={2000}
            color="#59100d"
          />
          <OrbitControls />
          <PerspectiveCamera
            makeDefault
            position={[5, 5, 5]}
            fov={75}
            near={1.2}
            far={100}
          />

          <Suspense fallback={null}>
            {/* Set the position property to ensure the model is above other elements */}
            <Vishwajit position={[0, 0, 2]} />
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
