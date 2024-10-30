"use client"; // Marking this as a client component
import React, { useEffect } from "react";
import { tailChase } from "ldrs";

function TailChase() {
  useEffect(() => {
    tailChase.register();

    return () => {};
  }, []);

  return (
    <div>
      <l-tail-chase size="30" speed="1.75" color="white"></l-tail-chase>
    </div>
  );
}

export default TailChase;
