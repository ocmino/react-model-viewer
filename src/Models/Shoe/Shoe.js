//create a shoe component with Google Model-Viewer

import React from "react";
import "@google/model-viewer";


function Shoe() {

const style = {
  width: "100%",
  height: "100vh",
  background: "transparent",
};




  return (
    <model-viewer
      src="Assets/shoe.glb"
      alt="A 3D model of an astronaut"
      ar
      ar-modes="scene-viewer quick-look webxr"
      ar-scale="auto"
      camera-controls
      auto-rotate
      shadow-intensity="1"
      environment-image="neutral"
      exposure="1"
      style={style}
    
       
    ></model-viewer>

    
  );
}

export default Shoe;
