function opeNav(){
    document.getElementById("navbar").classList.toggle("start-0")
    document.body.classList.toggle("overFlowHidden")
    document.querySelector(".menuIcon").classList.toggle("cross")
  }
  const topBtn = document.querySelector(".topBtn");
  const show = document.querySelector(".show"); 
      window.addEventListener("scroll", function () {
        if (window.scrollY >600) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        } 
    })
    topBtn.addEventListener("click", function () {
        document.documentElement.scrollTop = 0;
    })
    AOS.init({
      duration: 1200,
      once: true,
  })
  