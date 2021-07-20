const teams = document.querySelectorAll(".team");

teams.forEach((e) => {
  const arrowItem = e.childNodes[1].childNodes[3];
  const teamContent = e.childNodes[3];

  arrowItem.addEventListener("click", function () {
    if (!arrowItem.classList.contains("rotate")) {
      arrowItem.classList.add("rotate");
      teamContent.classList.add("noVisible");
    } else {
      arrowItem.classList.remove("rotate");
      teamContent.classList.remove("noVisible");
    }
  });
});
