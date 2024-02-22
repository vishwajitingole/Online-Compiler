import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

function RenderCode() {
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );

  const combinedCode = `<html><style>${fullCode.css}</style><body>${fullCode.html}</body><script >${fullCode.javascript}</script></html>`;
  const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(
    combinedCode
  )}`;
  return (
    <div className="bg-white h-[100dvh-60px]   w-screen">
      <iframe src={iframeCode} className="h-screen overflow-auto w-full" />
    </div>
  );
}

export default RenderCode;
