<script lang="ts">
  import type { Snippet } from "svelte";

  import GoBackLink from "../../components/GoBackLink/GoBackLink.svelte";

  type MainLayoutProps = {
    pageTitle: Snippet;
    headerContent?: Snippet;
    pageContent: Snippet;
  };

  let { pageTitle, headerContent, pageContent }: MainLayoutProps = $props();
</script>

<article class="page">
  <header class="header" role="banner">
    <div class="inner-wrapper">
      <h1 class="main-title">Trickle down features</h1>
      <h2 class="page-title" id="page-title">{@render pageTitle()}</h2>
      {@render headerContent?.()}
    </div>
  </header>
  <main class="main">
    {@render pageContent()}
  </main>
  <footer class="footer">
    <GoBackLink />
  </footer>
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
    background: var(--black);
    color: var(--amber);

    & > .inner-wrapper {
      display: flex;
      flex-direction: column;
      margin-inline: auto;
      padding-inline: 2rem;
      padding-block: 1rem;
      inline-size: min(var(--content-width), 100cqw);
      gap: 0.75rem;
    }
  }

  .main-title {
    margin-block: 0;
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  .page-title {
    margin-block: 0;
    font-size: 1.25rem;
  }

  /* .main {
    display: block;
  }

  .footer {
    display: block;
  } */
</style>
