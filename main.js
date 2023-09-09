let box = document.querySelectorAll("#box");
box.forEach((i) => {
  i.onmouseenter = () => {
    i.style.animation = "colors 2s infinite ease-in-out";
  };
});
