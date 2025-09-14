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
  import AlignContent from "./routes/align-content/AlignContent.svelte";

  const routeNames = {
    home: "/",
    justifySelf: "justify-self",
    alignSelf: "align-self",
    alignContent: "align-content",
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
    {
      name: routeNames.alignContent,
      path: `/${routeNames.alignContent}`,
      component: AlignContent,
    },
  ] as const;
  const options: RouterOptions<RouteNames> = {
    routes,
    base: "/trickle-down-features",
    hash: true,
    stripTrailingHash: true,
  } as const;
</script>

<div class="container">
  <RouterContext {options}>
    <RouterView />
  </RouterContext>
</div>

<style>
  .container {
    margin-inline: auto;
    padding-inline: 2rem;
    inline-size: min(80ch, 100%);

    /* https://www.cmuir.co.nz/post/container-query-units/ */
    @container body (min-width: 0rem) {
      inline-size: min(var(--content-width), 100cqw);
    }
  }
</style>
