const getRandomPosition = (min, max) => {
  const randomNum = Math.floor(Math.random() * (max - min) + min);
  return randomNum;
};

const createEgg = () => {
  const eggWidth = 70;

  // Create egg element
  const egg = document.createElement("img");
  egg.setAttribute("src", "images/fallenEgg.png");
  egg.classList.add("egg", "fallenEgg");

  // Get random position
  const leftPosition = getRandomPosition(0, window.innerWidth - eggWidth);
  egg.style.left = `${leftPosition}px`;

  // Append img
  document.body.append(egg);

  return egg;
};

const startGame = () => {
  let eggTop = 0;
  const eggIncrement = 20;

  // Create egg
  const fallenEgg = createEgg();

  const timerId = setInterval(() => {
    eggTop += eggIncrement;

    // Check if egg has fallen to ground
    if (eggTop >= window.innerHeight - fallenEgg.offsetHeight) {
      clearInterval(timerId);
      eggTop = window.innerHeight - fallenEgg.offsetHeight;
      fallenEgg.setAttribute("src", "images/brokenEgg.png");
    } else if (
      basket.offsetTop - eggTop <= fallenEgg.offsetHeight &&
      fallenEgg.offsetLeft >= basket.offsetLeft &&
      fallenEgg.offsetLeft <= basket.offsetLeft + basket.offsetWidth
    ) {
      // Check if egg has reached the basket
      clearInterval(timerId);
      fallenEgg.remove();
    }

    fallenEgg.style.top = `${eggTop}px`;
  }, 250);
};
