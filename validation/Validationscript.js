window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 10) {
      document.getElementById("headernav").classList.add("fixed");
    } else {
      document.getElementById("headernav").classList.remove("fixed");
    }
  }