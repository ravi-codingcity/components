import React, { useRef } from "react";

function Input_code_1() {
  const codeRef = useRef();

  // Function to handle the copy button click
  const handleCopy = () => {
    navigator.clipboard.writeText(codeRef.current.textContent).then(() => {
      alert("Code copied to clipboard!");
    });
  };
  return (
    <div>
      <div className=" bg-gray-900 text-gray-200 font-mono flex items-center justify-center p-3">
        <div className="w-full max-w-5xl bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center justify-between bg-gray-700 p-3">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="text-sm text-gray-400">index.js</div>
            <button
              onClick={handleCopy}
              className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
            >
              Copy
            </button>
          </div>

          {/* Code Block */}
          <div className="p-4 overflow-auto bg-gray-900">
            <pre
              ref={codeRef}
              className="text-sm text-gray-200 whitespace-pre-wrap"
            >
              <code className="block">
                {`
                                  <label
                      htmlFor="Username"
                      className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 h-10"
                    >
                      <input
                        type="text"
                        id="Username"
                        className="peer  border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 h-10 mx-2"
                        placeholder="Username"
                      />

                      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white dark:bg-black  p-0.5 text-xs text-gray-700 dark:text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                        Username
                      </span>
                    </label>


`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input_code_1;
