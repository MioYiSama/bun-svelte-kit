<script lang="ts">
  import type { Snippet } from "svelte";
  import "../app.css";
  import { _darkMode } from "./+layout";

  const { children }: { children: Snippet } = $props();
</script>

<svelte:document use:_darkMode />

{@render children()}
