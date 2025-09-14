<script lang="ts">
  import { useRoute } from "@dvcol/svelte-simple-router/router";

  import Link from "../Link/Link.svelte";

  const { route } = $derived(useRoute());
  const reactiveRoute = $derived(route);

  const urlPattern = new URLPattern({
    //pathname: "/:base/:subpage{/}?", // optional trailing slash
    hash: "/:subpage{/}?",
  });

  // stale
  // const isSubpage = $derived(urlPattern.test(window.location.href));
  const isSubpage = $derived.by(() => {
    console.log(reactiveRoute?.name);
    return urlPattern.test(window.location.href) || reactiveRoute?.name !== "/";
  });
</script>

{#if isSubpage}
  <Link target="#/">Go to examples page</Link>
{/if}
