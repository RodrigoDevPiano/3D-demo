import "@google/model-viewer";

const viewer = document.createElement("model-viewer");
viewer.setAttribute("src", "model.glb");
viewer.setAttribute("auto-rotate", "");
viewer.setAttribute("camera-controls", "");
document.body.appendChild(viewer);
