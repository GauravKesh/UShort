"use client";
import Quantum from "./loaders/Quantum";

export default function Redirect() {
  return (
    <div className="flex flex-col items-center justify-center text-black">
      <span>
        <Quantum />
      </span>
      <p className="text-2xl font-bold mb-4">Redirecting...</p>
      <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
      <p className="text-base text-gray-700 mt-4">
        Hang tight, taking you to your destination.
      </p>
    </div>
  );
}
