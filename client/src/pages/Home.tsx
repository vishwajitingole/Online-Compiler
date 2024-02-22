import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Vishwajit from "@/models/Vishwajit.jsx";
import { Suspense } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Home() {
  useGSAP(() => {
    // gsap code here...
    gsap.from(".title", { y: -10000, stagger: 0.3, ease: "power1.in" });
    gsap.from(".update", { y: 10000, duration: 1 });
    gsap.from(".updatext", { y: 10000, duration: 3, stagger: 0.5 });
  });
  return (
    <div>
      <div className="z-10 flex justify-center gap-2 pt-3 mt-6 text-5xl font-bold animate-pulse animate-slideIn">
        <div className="title">Welcome</div>
        <div className="title">to</div>
        <div className="title">My</div>
        <div className="title">Web</div>
        <div className="title">Compiler</div>
      </div>
      <h2 className="mt-3 font-serif text-xl text-center update text-emerald-300">
        Upcoming Update
        <div className="mt-1 text-sm updatext">Threejs Animation</div>
        <div className="mt-1 text-sm updatext">More Animations</div>
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
