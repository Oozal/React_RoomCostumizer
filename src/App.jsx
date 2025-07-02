import { useState } from "react";
import TemplateScene from "./Experiences/templateScene";
import Experience from "./Experiences/experience";
import "./app.css";
import RoomViewer from "./Experiences/RoomViewer";
import { Material } from "three";
import MaterialSelector from "./Experiences/MaterialSelector";

export default function App() {
  return (
    <div className="component">
      <MaterialSelector />
      <RoomViewer />
    </div>
  );
}
