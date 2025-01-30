export function _darkMode(node: Document) {
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const classList = node.documentElement.classList;

  if (darkQuery.matches) {
    classList.add("dark");
  }

  darkQuery.addEventListener("change", () => {
    classList.toggle("dark");
  });
}
