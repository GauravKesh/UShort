import React from "react";
import { tailChase } from "ldrs";
function Zoomies() {

  tailChase.register();
  return (
    <div>
      <l-tail-chase size="30" speed="1.75" color="white"></l-tail-chase>
    </div>
  );
}

export default Zoomies;




