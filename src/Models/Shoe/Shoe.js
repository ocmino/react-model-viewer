//create a shoe component with Google Model-Viewer

import React from "react";
import "@google/model-viewer";

function Shoe() {
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
      style={{
        display: "block",
        width: "100%",
        height: "100vh",
        margin: "auto",
        screen: "cover",

      }}
    ></model-viewer>

    
  );
}

export default Shoe;
