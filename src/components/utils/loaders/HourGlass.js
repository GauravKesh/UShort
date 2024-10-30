import React from "react";
import { hourglass } from "ldrs";

function HourGlass() {
  hourglass.register();
  return (
    <div>
      shown
      <l-hourglass
        size="40"
        bg-opacity="0.1"
        speed="1.75"
        color="black"
      ></l-hourglass>
    </div>
  );
}

export default HourGlass;
