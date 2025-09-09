<script lang="ts">
  import Link from "../../components/Link/Link.svelte";
</script>

<h1 class="title" id="title">Examples</h1>

<ul class="links" aria-describedby="title">
  <li><Link target="#/justify-self" class="link">justify-self</Link></li>
  <li><Link target="#/align-self" class="link">align-self</Link></li>

  <li>
    <Link target="#/place-self" class="link" aria-disabled>place-self</Link>
  </li>
  <li>
    <Link target="#/justify-items" class="link" aria-disabled
      >justify-items</Link
    >
  </li>
  <li>
    <Link target="#/align-content" class="link" aria-disabled
      >align-content</Link
    >
  </li>
</ul>

<style>
  .title {
    margin-block-start: 0;
    margin-block-end: 1rem;
  }

  .links {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
    list-style: none;
    margin-inline: 0;
    padding-inline: 0;

    & > li {
      display: flex;
    }
  }

  .links :global(.link) {
    height: 100%;
    height: stretch;
    flex: auto;
    align-content: center;
  }
</style>
