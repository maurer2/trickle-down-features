<script lang="ts">
  import { Router, Route } from "svelte-tiny-router";
  import "urlpattern-polyfill";

  import Home from "./routes/home/Home.svelte";
  import JustifySelf from "./routes/justify-self/JustifySelf.svelte";

  const urlPattern = new URLPattern({ pathname: "/:subpage" });
  const isSubpage = urlPattern.test(window.location);
</script>

<Router>
  <main class="container">
    <Route path="/" component={Home} />

    <Route path="/justify-self" component={JustifySelf} />

    <Route>
      <h1>404</h1>
    </Route>

    {#if isSubpage}
      <a href="/" class="back-link">Go back</a>
    {/if}
  </main>
</Router>

<style>
  .container {
    ---transition-duration: 1s;

    inline-size: min(80ch, 100%);
    margin: 0 auto;
    padding: 2rem;

    @media (prefers-reduced-motion: reduce) {
      ---transition-duration: 0;
    }
  }

  .back-link {
    display: block;
    inline-size: fit-content; /* prevents outline from stretching across the entire row */
  }
</style>
