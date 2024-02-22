import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Header() {
  useGSAP(() => {
    // gsap code here...
    gsap.from(".left", { x: -440, rotate: 360 });
  });
  return (
    <div className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center">
      <Link to="/">
        <h2 className="font-bold left text-amber-400 ">Web Compiler</h2>
      </Link>
      <ul className="flex gap-2">
        <li>
          <Link to="/compiler">
            <Button
              className="font-semibold animate-ping text-amber-400 animate-bounce"
              variant="outline"
            >
              Compiler
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
