const movingImg = document.querySelector("#movingImg");
const imgParent = document.querySelector("#parent");
const startBtn = document.querySelector("#goBtn");

startBtn.onclick = (function () {
  // Local variables
  let isImgMoving = false,
    timerId,
    left = 0,
    increment = 20;
  return function () {
    if (isImgMoving) {
      // Stop movement
      startBtn.innerText = "Go";
      clearInterval(timerId);
      isImgMoving = false;
    } else {
      // Start movement
      startBtn.innerText = "Stop";
      timerId = setInterval(() => {
        left += increment;
        if (left >= imgParent.offsetWidth - movingImg.offsetWidth)
          increment = -increment; // negative increment
        if (left == 0) increment = -increment; // positive increment
        movingImg.style.left = `${left}px`;
      }, 100);
      isImgMoving = true;
    }
  };
})();
