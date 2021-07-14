const carouselItems = document.querySelectorAll(".carousel");
const dotsItem = document.querySelectorAll(".dot");

dotsItem.forEach((e) => {
  e.addEventListener("click", function (e) {
    const dotItem = e.target;
    let dotTarget;

    for (let i = 0; i < dotsItem.length; i++) {
      if (dotsItem[i].id === dotItem.id) {
        dotTarget = i;
        dotsItem[i].classList.add("active");
      } else {
        dotsItem[i].classList.remove("active");
      }
    }

    const carouselItem = carouselItems[dotTarget];

    for (let i = 0; i < carouselItems.length; i++) {
      const item = carouselItems[i];

      if (item.id === carouselItem.id) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    }
  });
});
