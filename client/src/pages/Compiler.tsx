import CodeHelperEditor from "@/components/CodeHelperEditor";
import CodeEditor from "@/components/ui/CodeEditor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import React from "react";

function Compiler() {
  return (
    <ResizablePanelGroup direction="horizontal" className="  ">
      <ResizablePanel
        className="h-[calc(100dvh-60px)] min-w-[200px]"
        defaultSize={50}
      >
        <CodeHelperEditor />
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        className="h-[calc(100dvh-60px)] min-w-[200px]"
        defaultSize={50}
      >
        RIght Side
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default Compiler;
