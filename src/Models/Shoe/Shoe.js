//create a shoe component with Google Model-Viewer

import React from "react";
import "@google/model-viewer";


function Shoe() {

const style = {
  width: "100%",
  height: "100vh",
  background: "transparent",
  //make fit height of screen
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "10%",
  margin: "auto",
};

const buttonStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  margin: "auto",
  width: "100px",
  height: "100px",
  background: "transparent",
  border: "none",
  color: "white",
  fontSize: "20px",
  fontWeight: "bold",
  cursor: "pointer",
};



  return (

    <model-viewer
      src="Assets/shoe.glb"
      alt="A 3D model of an astronaut"
      ar
      ar-modes="scene-viewer quick-look webxr"
      ar-scale="auto"
      ar-placement="floor"
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
