import { quantum } from "ldrs";
import React from "react";

export default function Quantum() {
  quantum.register();
  return (
    <div>
      <l-quantum size="45" speed="1.75" color="black"></l-quantum>
    </div>
  );
}
