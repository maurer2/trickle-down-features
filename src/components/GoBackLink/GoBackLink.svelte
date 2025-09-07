<script lang="ts">
  import { useRoute } from "@dvcol/svelte-simple-router/router";

  const { route } = $derived(useRoute());
  const reactiveRoute = $derived(route);

  const urlPattern = new URLPattern({
    //pathname: "/:base/:subpage{/}?", // optional trailing slash
    hash: "/:subpage{/}?",
  });

  // stale
  // const isSubpage = $derived(urlPattern.test(window.location.href));
  const isSubpage = $derived.by(() => {
    return urlPattern.test(window.location.href) || reactiveRoute?.name !== "/";
  });
</script>

{#if isSubpage}
  <a href="/#/" class="link">Go back</a>
{/if}

<style>
  .link {
    display: block;
    inline-size: fit-content; /* prevents outline from stretching across the entire row */
  }
</style>
