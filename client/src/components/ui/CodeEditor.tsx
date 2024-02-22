import CodeMirror from "@uiw/react-codemirror";

import React from "react";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { useSelector, useDispatch } from "react-redux";

import { updateCodeValue } from "@/redux/slices/compilerSlice";
import type { RootState } from "../../redux/store";

function CodeEditor() {
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );

  const d = useDispatch();

  const onChange = React.useCallback((value: string) => {
    d(updateCodeValue(value));
  }, []);
  return (
    <CodeMirror
      theme={dracula}
      value={fullCode[currentLanguage]}
      height="calc(100vh - 60px - 50px)"
      extensions={[loadLanguage(currentLanguage)!]}
      onChange={onChange}
    />
  );
}

export default CodeEditor;
