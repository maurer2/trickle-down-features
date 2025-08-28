<script lang="ts">
  import { Router, Route } from 'svelte-tiny-router';

  import Home from './routes/home/Home.svelte';
  import JustifySelf from './routes/justify-self/JustifySelf.svelte';
</script>

<Router>
  <main class="container">
    <Route path="/" component={Home} />

    <Route path="/justify-self" component={JustifySelf} />

    <Route>
      <p>404</p>
    </Route>
  </main>
</Router>

<style>
  .container {
    inline-size: min(80ch, 100%);
    margin: 0 auto;
    padding: 2rem;
  }

</style>
