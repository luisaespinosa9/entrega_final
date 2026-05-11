const btn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

btn?.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});