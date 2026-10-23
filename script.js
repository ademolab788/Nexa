const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const sidebarLinks = document.querySelectorAll(".sidebar a");

if (menuBtn && sidebar && closeBtn && overlay) {
     menuBtn.addEventListener("click", function () {
    sidebar.classList.add("show");

    overlay.classList.add("show");
  }
);

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show");

    overlay.classList.remove("show");
  }
);

sidebarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      sidebar.classList.remove("show");

      overlay.classList.remove("show");
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      sidebar.classList.remove("show");

      overlay.classList.remove("show");
    }
  }
);
}



