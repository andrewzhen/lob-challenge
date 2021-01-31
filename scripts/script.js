function setToggleHover() {
  var dropdown = document.getElementById("dropdown");
  if (window.innerWidth <= 767) {
    dropdown.addEventListener("click", toggleHover);;  
  } else {
    dropdown.removeEventListener("click", toggleHover);;
  }
}

function toggleHover() {
  dropdown.classList.toggle("hover");
}

window.onload = function() {
  console.log("Hi Emily and team! Thanks for your consideration.");
  setToggleHover();
};

window.onresize = function() {
  setToggleHover();
}