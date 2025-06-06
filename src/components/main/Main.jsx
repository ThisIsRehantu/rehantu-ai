import { useContext } from "react";
import { Context } from "../context/Context";

const Main = () => {
  const { input, setInput, resultData, loading, sendPrompt } = useContext(Context);

  return (
    <div className="main">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tanya apa saja ke Gemini..."
        className="w-full p-2 border rounded mb-2"
        rows={4}
      />
      <button
        onClick={sendPrompt}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        {loading ? "Mengirim..." : "Kirim"}
      </button>
      <div className="response mt-4">
        {resultData && <p>{resultData}</p>}
      </div>
    </div>
  );
};

export default Main;
