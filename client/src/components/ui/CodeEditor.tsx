import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import React from "react";
import { tags as t } from "@lezer/highlight";
import { dracula, draculaInit } from "@uiw/codemirror-theme-dracula";
import {
  loadLanguage,
  langNames,
  langs,
} from "@uiw/codemirror-extensions-langs";

function CodeEditor() {
  const [value, setValue] = React.useState(
    "console.log('Vishwajit ke web dev wale console mein aapka swagat hai !🙏');"
  );
  const onChange = React.useCallback((val) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  return (
    <CodeMirror
      theme={dracula}
      value={value}
      height="100vh"
      extensions={[langs.tsx()]}
      onChange={onChange}
    />
  );
}

export default CodeEditor;
