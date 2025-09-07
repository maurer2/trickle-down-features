<script lang="ts">
  import "urlpattern-polyfill";
  import type {
    Route,
    RouterOptions,
  } from "@dvcol/svelte-simple-router/models";
  import {
    RouterView,
    RouterContext,
  } from "@dvcol/svelte-simple-router/components";

  import Home from "./routes/home/Home.svelte";
  import JustifySelf from "./routes/justify-self/JustifySelf.svelte";
  import AlignSelf from "./routes/align-self/AlignSelf.svelte";
  import GoBackLink from "./components/GoBackLink/GoBackLink.svelte";

  const routeNames = {
    home: "/",
    justifySelf: "justify-self",
    alignSelf: "align-self",
  } as const;
  type RouteNames = (typeof routeNames)[keyof typeof routeNames];

  const routes: Route<RouteNames>[] = [
    {
      name: routeNames.home,
      path: routeNames.home,
      component: Home,
    },
    {
      name: routeNames.justifySelf,
      path: `/${routeNames.justifySelf}`,
      component: JustifySelf,
    },
    {
      name: routeNames.alignSelf,
      path: `/${routeNames.alignSelf}`,
      component: AlignSelf,
    },
  ] as const;
  const options: RouterOptions<RouteNames> = {
    routes,
    base: "/trickle-down-features",
    hash: true,
    stripTrailingHash: true,
  } as const;
</script>

<main class="container">
  <RouterContext {options}>
    <RouterView />
    <GoBackLink />
  </RouterContext>
</main>

<style>
  .container {
    inline-size: min(80ch, 100%);
    margin-inline: auto;
    margin-block: 0;
    padding: 2rem;
  }
</style>
