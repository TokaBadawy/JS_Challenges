const basket = document.querySelector("#basket");

// Move basket
document.onkeydown = (function () {
  // Local variables
  let basketIncrement = 30;
  let basketLeft = 0;
  
  return function (e) {
    // Check which key was pressed
    if (e.key === "ArrowRight") {
      basketIncrement = Math.abs(basketIncrement);
    } else if (e.key === "ArrowLeft") {
      basketIncrement = -Math.abs(basketIncrement);
    } else {
      return;
    }

    basketLeft += basketIncrement;

    // Check if basket reached window borders
    if (basketLeft <= 0) {
      basketLeft = 0;
    } else if (basketLeft > window.innerWidth - basket.offsetWidth) {
      basketLeft = window.innerWidth - basket.offsetWidth;
    }
    basket.style.left = `${basketLeft}px`;
  };
})();

startGame();
