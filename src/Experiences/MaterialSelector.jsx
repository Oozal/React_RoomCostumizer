import "../Styles/materialSelector.css";
import MaterialCard from "../Components/MaterialCard";

import UseMaterialType from "../Utils/materialTypeHook";

const floorMaterial = [
  { name: "Floor1", imageUrl: "./Textures/Floor/" },
  { name: "Floor2", imageUrl: "./Textures/Floor/" },
  { name: "Floor3", imageUrl: "./Textures/Floor/" },
  { name: "Floor4", imageUrl: "./Textures/Floor/" },
  { name: "Floor5", imageUrl: "./Textures/Floor/" },
  { name: "Floor6", imageUrl: "./Textures/Floor/" },
  { name: "Floor7", imageUrl: "./Textures/Floor/" },
  { name: "Floor8", imageUrl: "./Textures/Floor/" },
];

const wallMaterial = [
  { name: "Wall1", imageUrl: "./Textures/Wall/" },
  { name: "Wall2", imageUrl: "./Textures/Wall/" },
  { name: "Wall3", imageUrl: "./Textures/Wall/" },
  { name: "Wall4", imageUrl: "./Textures/Wall/" },
  { name: "Wall5", imageUrl: "./Textures/Wall/" },
];

let materials = [];

export default function MaterialSelector() {
  const selectedMaterialType = UseMaterialType((s) => s.materialType);

  if (selectedMaterialType === "Floor") {
    materials = floorMaterial;
  } else if (selectedMaterialType === "Wall") {
    materials = wallMaterial;
  }
  return (
    <>
      <div className="material-selector">
        <h2>Materials</h2>
        <div className="material-list">
          <h3>{selectedMaterialType}</h3>
          {materials.map((material, index) => (
            <MaterialCard material={material} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
