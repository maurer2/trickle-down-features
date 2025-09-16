<script lang="ts">
  import Link from "../../../../components/Link/Link.svelte";
</script>

<div class="container">
  <Link target="#/justify-self" linkClass="link">Call to action</Link>
</div>

<style>
  .container :global(.link) {
    display: block;
    justify-self: center;
  }
</style>
