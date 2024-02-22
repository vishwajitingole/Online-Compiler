import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import React from "react";
import { tags as t } from "@lezer/highlight";
import { dracula, draculaInit } from "@uiw/codemirror-theme-dracula";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { useSelector } from "react-redux";

function CodeEditor() {
  const [value, setValue] = React.useState(
    "console.log('Vishwajit ke web dev wale console mein aapka swagat hai !🙏');"
  );
  const onChange = React.useCallback((val: any) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  const currentLanguage = useSelector(
    (state) => state.compilerSlice.currentLanguage
  );
  return (
    <CodeMirror
      theme={dracula}
      value={value}
      height="calc(100vh-60px-50px)"
      extensions={[loadLanguage(currentLanguage)]}
      onChange={onChange}
    />
  );
}

export default CodeEditor;
