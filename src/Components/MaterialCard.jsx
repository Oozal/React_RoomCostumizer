import "../Styles/materialCard.css";
import UseMaterialType from "../Utils/materialTypeHook";

export default function MaterialCard({ material }) {
  const setWallTexture = UseMaterialType((s) => s.setWallTexture);
  const setFloorTexture = UseMaterialType((s) => s.setFloorTexture);

  const getMaterialType = UseMaterialType((s) => s.materialType);
  return (
    <div
      className="material-card"
      onClick={() => {
        if (getMaterialType === "Floor") {
          setFloorTexture(`${material.imageUrl}${material.name}.jpg`);
        } else if (getMaterialType === "Wall") {
          setWallTexture(`${material.imageUrl}${material.name}.jpg`);
        }
      }}
    >
      <div className="material-preview">
        <img
          src={`${material.imageUrl}preview_${material.name}.png`}
          alt={material.name}
          className="material-image"
        />
      </div>
      <div className="material-name">{material.name}</div>
    </div>
  );
}
