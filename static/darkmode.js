const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

const classList = document.documentElement.classList;

if (darkQuery.matches) {
  classList.add("dark");
}

darkQuery.addEventListener("change", () => {
  classList.toggle("dark");
});
