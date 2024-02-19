import React from "react";
import { Button } from "./ui/button";

function CodeHelperEditor() {
  return (
    <div className="__helper_header h-[50px] bg-black text-white p-2 flex items-center justify-between">
      <div className="__btn_container">
        <Button>Save</Button>
        <Button>Share</Button>
      </div>
    </div>
  );
}

export default CodeHelperEditor;
