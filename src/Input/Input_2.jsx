import React from "react";

function Input_1() {
  return (
    <>
      <div className="max-w-md m-auto">
        <label
          htmlFor="UserEmail"
          className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
        >
          <input
            type="email"
            id="UserEmail"
            placeholder="Email"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
          <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 dark:text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            Email
          </span>
        </label>
      </div>
    </>
  );
}

export default Input_1;
