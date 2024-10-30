import React from "react";
import Quantum from "./loaders/Quantum";

export default function RedirectError({ errorMessage, clearMessage }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-black">
        <span>
          <Quantum />
        </span>
        <p className="text-2xl font-bold mb-4">{errorMessage}.</p>
        <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        <p className="text-base text-gray-700 mt-4">{clearMessage}</p>
      </div>
    </div>
  );
}
