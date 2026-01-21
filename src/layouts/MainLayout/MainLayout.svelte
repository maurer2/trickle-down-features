<script lang="ts">
  import type { Snippet } from "svelte";

  import Link from "../../components/Link/Link.svelte";
  import GoBackLink from "../../components/GoBackLink/GoBackLink.svelte";

  type MainLayoutProps = {
    pageTitle: Snippet;
    pageContent: Snippet;
    filters?: Snippet;
  };

  let { pageTitle, pageContent, filters }: MainLayoutProps = $props();
</script>

{#snippet masthead()}
  <header class="masthead">
    <h1 class="title">Trickle Down Features</h1>
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
  </header>
{/snippet}

<div class="page">
  <div class="header">
    <div class="inner-page">
      {@render masthead()}
    </div>
  </div>
  <main class="main inner-page">
    <h2 class="page-title" id="page-title">{@render pageTitle()}</h2>
    {@render pageContent()}
    <GoBackLink />
  </main>
</div>

<style>
  .inner-page {
    margin-inline: auto;
    padding-block: 2rem;
    padding-inline: 2rem;
    inline-size: var(--inner-width);
  }

  .header {
    /* full bleed */
    margin-inline: calc(-50cqi + 50%);
    background: var(--pink-medium);
    color: var(--gray-light);
  }

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

  .title {
    margin-block: 0;
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  .page-title {
    margin-block-start: 0;
    margin-block-end: 1rem;
    font-size: 1.25rem;
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
