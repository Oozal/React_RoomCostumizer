import { create } from "zustand";

const UseMaterialType = create((set) => ({
  materialType: "Floor",
  floorTextureUrl: "./Textures/Floor/Floor1.jpg",
  wallTextureUrl: "./Textures/Wall/Wall1.jpg",
  setMaterialType: (materialType) => set({ materialType }),
  setFloorTexture: (floorTextureUrl) => set({ floorTextureUrl }),
  setWallTexture: (wallTextureUrl) => set({ wallTextureUrl }),
}));

export default UseMaterialType;
