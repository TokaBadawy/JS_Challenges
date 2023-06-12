function handleClone(originalBox, boxesHolder) {
  // Create clone
  const cloneBox = document.createElement("div");
  cloneBox.classList.add(...originalBox.classList.value.split(" "));
  cloneBox.onclick = () => handleClone(cloneBox,boxesHolder);
  boxesHolder.append(cloneBox);

  // Disable original box
  originalBox.onclick = null;
  originalBox.classList.add("disabled");
}
