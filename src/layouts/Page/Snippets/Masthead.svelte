<script module lang="ts">
  import type { Snippet } from "svelte";

  import Link from "../../../components/Link/Link.svelte";

  export { masthead };
</script>

{#snippet masthead(filters?: Snippet)}
  <div class="masthead mau">
    <h1 class="page-title">Trickle Down Features</h1>
    <Link
      linkClass="link-inverted"
      target="https://github.com/maurer2/trickle-down-features"
      >Go back to Readme</Link
    >
    {#if filters}
      <search class="filters">
        {@render filters()}
      </search>
    {/if}
  </div>
{/snippet}

<style>
  .masthead {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-columns: auto;
    gap: 1rem;

    @container body (inline-size > 34rem) {
      grid-template-columns: 1fr max-content;
      align-items: center;
    }

    @container style(--current-body-container-size: large) {
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
