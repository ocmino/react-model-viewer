//create a shoe component with Google Model-Viewer

import React from "react";
import "@google/model-viewer";
import styles from "./Shoe.module.css";

function Shoe() {
  return (
    <model-viewer className={styles.shoe}
      src="Assets/shoe.glb"
      alt="A 3D model of an astronaut"
      ar
      ar-modes="scene-viewer quick-look webxr"
      camera-controls
      auto-rotate
      shadow-intensity="1"
      environment-image="neutral"
      exposure="1"
      style={{ width: "100%", height: "100vh" }}
    ></model-viewer>
  );
}

export default Shoe;
