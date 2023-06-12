const allBoxes = document.querySelectorAll(".box");
const boxesHolder = document.querySelector("#boxes");

[...allBoxes].forEach((box) => {
  box.onclick = () => handleClone(box, boxesHolder);
});
