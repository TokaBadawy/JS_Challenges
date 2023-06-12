const setImg = function (imgs,indx) {
    slideImg.setAttribute("src", imgs[indx].src);
    slideImg.setAttribute("alt", imgs[indx].alt);
    slideImg.dataset.indx = indx;
  };