import React, { useState, useEffect, useRef } from "react";
import GlobalStyle from "./global.style";
import Button from "@mui/material/Button";
import CodeTextArea from "./components/text-area";
import * as esbuild from "esbuild-wasm";
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin";

const App: React.FC = () => {
  const ref = useRef<any>();
  const [input, setInput] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "/esbuild.wasm",
    });
  };
  useEffect(() => {
    startService();
  }, []);

  const textChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };
  const onBtnClick = async () => {
    if (!ref.current) {
      return;
    }
    const result = await ref.current.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin()],
      define: {
        "process.env.NODE_ENV": "'production'",
        global: "window",
      },
    });
    console.log(result);
    setCode(result.outputFiles[0].text);
  };
  return (
    <div>
      <GlobalStyle />
      <CodeTextArea code={input} onValueChange={textChange} />
      <br />
      <Button onClick={onBtnClick} variant="contained">
        Submit
      </Button>
      <pre>{code}</pre>
    </div>
  );
};

export default App;
