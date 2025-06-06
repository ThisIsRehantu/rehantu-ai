import { createContext, useState } from "react";
import run from "../config/GeminiAPI";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [resultData, setResultData] = useState("");
  const [loading, setLoading] = useState(false);

  const sendPrompt = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const res = await run(input);
    setResultData(res);
    setLoading(false);
  };

  return (
    <Context.Provider
      value={{ input, setInput, resultData, loading, sendPrompt }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
