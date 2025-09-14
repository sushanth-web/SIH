
  const sidebar = document.getElementById("sidebar");
  const collapseBtn = document.getElementById("collapseBtn");

  collapseBtn.addEventListener("click", () => {
    sidebar.classList.toggle("w-[240px]");
    sidebar.classList.toggle("w-16");

    document.querySelectorAll(".sidebar-text").forEach(el => {
      el.classList.toggle("hidden");
    });

    // Force proper alignment for nav + signout when collapsed
    document.querySelectorAll("#sidebar nav a, #sidebar .sidebar-header, #sidebar > div.pt-8 a").forEach(el => {
      el.classList.toggle("justify-center");
      el.classList.toggle("px-0");
    });

    // Switch arrow
    collapseBtn.querySelector("i").classList.toggle("fa-angle-left");
    collapseBtn.querySelector("i").classList.toggle("fa-angle-right");
  });