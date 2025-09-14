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
    <h2 class="page-title" id="page-title">{@render pageTitle()}</h2>
    <Link
      linkClass="link-inverted"
      target="https://github.com/maurer2/trickle-down-features"
      >Go back to Readme</Link
    >
  </header>
{/snippet}

<article class="page">
  <div class="header">
    <div class="inner-wrapper">
      {@render masthead()}

      {#if filters}
        <search class="filters">
          {@render filters()}
        </search>
      {/if}
    </div>
  </div>
  <main class="main">
    {@render pageContent()}
  </main>
  <div class="links">
    <GoBackLink />
  </div>
</article>

<style>
  .page {
    display: grid;
    grid-auto-rows: auto;
    gap: 1rem;
  }

  .header {
    /* full bleed */
    margin-inline: calc(-50cqw + 50%);
    background: var(--pink-medium);
    color: var(--gray-light);

    & > .inner-wrapper {
      margin-inline: auto;
      padding-inline: 2rem;
      padding-block: 1rem;
      inline-size: min(var(--content-width), 100cqw);
    }
  }

  .masthead {
    display: grid;
    grid-template-areas:
      "title"
      "page-title"
      "link";
    gap: 1rem;

    @container body (width > 32rem) {
      grid-template-areas:
        "title link"
        "page-title page-title";
      grid-template-columns: 1fr max-content;
      align-items: center;
    }
  }

  .title {
    grid-area: title;
    margin-block: 0;
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  .page-title {
    grid-area: page-title;
    margin-block: 0;
    font-size: 1.25rem;
  }

  .masthead :global(.link-inverted) {
    grid-area: link;
    border-color: var(--gray-light);

    &:global(:where(:hover, :focus)) {
      background: var(--gray-light);
      color: var(--gray-dark);
    }
  }

  .filters {
    margin-block-start: 1rem;
  }

  .links {
    justify-self: start;
  }
</style>
