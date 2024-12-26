// <!--* Navbar => JS -->
const navLis = document.querySelectorAll(".navbar-links .main-li");

addActiveClass(navLis);
// SECTION - Add & Remove Active Class.
function addActiveClass(nodeList) {
  nodeList.forEach((a) => {
    a.addEventListener("click", (e) => {
      nodeList.forEach((a) => {
        a.classList.remove("active");
      });
      a.classList.add("active");
    });
  });
}