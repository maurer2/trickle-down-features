<script lang="ts">
  import type { Snippet } from 'svelte';

  import Link from '../Link/Link.svelte';

  type MastheadProp = {
    filters?: Snippet;
  };

  let { filters }: MastheadProp = $props();
</script>

<div class="masthead">
  <h1 class="page-title">Trickle Down Features</h1>
  <Link linkClass="link-inverted" target="https://github.com/maurer2/trickle-down-features"
    >Go back to Readme</Link
  >
  {#if filters}
    <search class="filters">
      {@render filters()}
    </search>
  {/if}
</div>

<style>
  .masthead {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-columns: auto;
    gap: 1rem;
  }

  @container body (inline-size > 34rem) {
    .masthead {
      grid-template-columns: 1fr max-content;
      align-items: center;
    }
  }

  @container style(--current-body-container-size: large) {
    .masthead {
      grid-template-columns: 1fr max-content;
      align-items: center;
    }
  }

  .page-title {
    margin-block: 0;
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  .masthead :global(.link-inverted) {
    border-color: var(--gray-light);

    &:global(:where(:hover, :focus)) {
      background: var(--gray-light);
      color: var(--gray-dark);
    }
  }

  .filters {
    grid-column: 1/-1;
    grid-row: 2;
  }
</style>
