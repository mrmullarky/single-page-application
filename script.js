function navResponse() {
    var x = document.getElementById("nav");
    if (x.className === "navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
  }

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("toTopButton").style.opacity = 1;
  } else {;
    document.getElementById("toTopButton").style.opacity = 0;
  }
}

function backToTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}