// toggel

const navigasi = document.querySelector(".navigasi-menu");

//ketika hamberger menu di klik
document.querySelector("#hamberger").onclick = () => {
  navigasi.classList.toggle("active");
};

//keluar hamberger dimana saja
document.addEventListener("click", function (e) {
  if (!hamberger.contains(e.target) && !navigasi.contains(e.target)) {
    navigasi.classList.remove("active");
  }
});
