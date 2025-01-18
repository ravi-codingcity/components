import React, { useRef } from "react";

function Alerts_code_1() {
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
<div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
  <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
</div>
<div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
</div>
<div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
</div>
<div class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
  <span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
</div>
<div class="p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300" role="alert">
  <span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
</div>

`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alerts_code_1;
