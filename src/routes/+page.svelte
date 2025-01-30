<script lang="ts">
  import type { PageData } from "./$types";
  let count = $state(0);

  function onclick() {
    ++count;
  }

  const { data }: { data: PageData } = $props();
</script>

<button {onclick}>
  Count: {count}
</button>
<p>{data.value}</p>
<p>{data.x}</p>
<p>{data.y}</p>
<p>{data.z}</p>
<a href="/about">About</a>

<style>
  @reference "tailwindcss/theme";

  button {
    @apply rounded-lg px-4 py-1.5 transition;
    @apply border dark:border-white;
    @apply hover:bg-gray-200 dark:hover:bg-gray-800;
    @apply active:bg-gray-400 dark:active:bg-gray-600;
  }

  a {
    @apply underline;
  }
</style>
