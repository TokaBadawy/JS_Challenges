// Assignment 1
const slideImgs = [
  { src: "images/slide1.jpg", alt: "Slide 1" },
  { src: "images/slide2.jpg", alt: "Slide 2" },
  { src: "images/slide3.jpg", alt: "Slide 3" },
  { src: "images/slide4.jpg", alt: "Slide 4" },
  { src: "images/slide5.jpg", alt: "Slide 5" },
  { src: "images/slide6.jpg", alt: "Slide 6" },
];
const nextBtn = document.querySelector("#next-btn");
const previousBtn = document.querySelector("#previous-btn");
const startSlideBtn = document.querySelector("#slide-btn");
const stopBtn = document.querySelector("#stop-btn");
const slideImg = document.querySelector("#slide");

nextBtn.onclick = () => {
  (function (imgsNumber) {
    let nextImgIndx = +slideImg.dataset.indx + 1;
    if (nextImgIndx === imgsNumber) nextImgIndx = 0;
    setImg(slideImgs, nextImgIndx);
  })(slideImgs.length);
};

previousBtn.onclick = () => {
  (function (imgsNumber) {
    let preImgIndx = +slideImg.dataset.indx - 1;
    if (preImgIndx === -1) preImgIndx = imgsNumber - 1;
    setImg(slideImgs, preImgIndx);
  })(slideImgs.length);
};

(function () {
  let timerId;
  startSlideBtn.onclick = function () {
    timerId = setInterval(() => {
      nextBtn.click();
    }, 1000);
  };

  stopBtn.onclick = function () {
    clearInterval(timerId);
  };
})();
