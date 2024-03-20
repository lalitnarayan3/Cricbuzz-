document.addEventListener("DOMContentLoaded", function () {
  const sidebarIcon = document.querySelector(".sidebar-icon");
  const sidebar = document.querySelector(".sidebar");

  sidebarIcon.addEventListener("click", function () {
    if (sidebar.style.display === "block") {
      sidebar.style.display = "none";
    } else {
      sidebar.style.display = "block";
    }
  });
});
