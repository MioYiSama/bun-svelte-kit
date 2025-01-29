<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

{@render children()}

<svelte:head>
  <script>
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function update(ev) {
      if (ev.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

    update(darkQuery);

    darkQuery.addEventListener("change", update);
  </script>
</svelte:head>
