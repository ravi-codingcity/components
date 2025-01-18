import React, { useRef } from "react";

function Forms_code_1() {
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
                  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg border-2 border-cyan-400 rounded-md ">
                      <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl pt-5">
                        Get started today
                      </h1>

                      <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Obcaecati sunt dolores deleniti inventore quaerat
                        mollitia?
                      </p>

                      <form
                        action="#"
                        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                      >
                        <p className="text-center text-lg font-medium">
                          Sign in to your account
                        </p>

                        <div>
                          <label htmlFor="email" className="sr-only">
                            Email
                          </label>

                          <div className="relative">
                            <input
                              type="email"
                              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                              placeholder="Enter email"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="password" className="sr-only">
                            Password
                          </label>

                          <div className="relative">
                            <input
                              type="password"
                              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                              placeholder="Enter password"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        >
                          Sign in
                        </button>

                        <p className="text-center text-sm text-gray-500">
                          No account?
                          <a className="underline" href="#">
                            Sign up
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms_code_1;
