<script lang="ts">
  import "urlpattern-polyfill";
  import { Router, type RouteConfig } from "@mateothegreat/svelte5-router";

  import Home from "./routes/home/Home.svelte";
  import JustifySelf from "./routes/justify-self/JustifySelf.svelte";
  import AlignSelf from "./routes/align-self/AlignSelf.svelte";

  const urlPattern = new URLPattern({
    // pathname: "/:base{/:subpage}?",
    pathname: "/:base/:subpage{/}?", // optional trailing slash
  });
  const isSubpage = urlPattern.test(window.location.href);
  console.log(urlPattern.exec(window.location.href));

  const routes: RouteConfig[] = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "justify-self",
      component: JustifySelf,
    },
    {
      path: "align-self",
      component: AlignSelf,
    },
  ];
</script>

<main class="container">
  <Router {routes} basePath="/trickle-down-features" />

  {#if isSubpage}
    <a href="/" class="back-link">Go back</a>
  {/if}
</main>

<style>
  .container {
    inline-size: min(80ch, 100%);
    margin: 0 auto;
    padding: 2rem;
  }

  .back-link {
    display: block;
    inline-size: fit-content; /* prevents outline from stretching across the entire row */
  }
</style>
