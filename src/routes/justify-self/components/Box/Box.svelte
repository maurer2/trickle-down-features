<script lang="ts">
  import Link from "../../../../components/Link/Link.svelte";
</script>

<div class="link-container">
  <Link target="#/justify-self" linkClass="link">Call to action</Link>
</div>

<style>
  .link-container :global(.link) {
    display: block;
    justify-self: center;
  }
</style>
