<script lang="ts">
  import type { Snippet } from "svelte";

  import { masthead } from "./Snippets/Masthead.svelte";
  import GoBackLink from "../../components/GoBackLink/GoBackLink.svelte";

  type PageProps = {
    pageTitle: Snippet;
    pageContent: Snippet;
    filters?: Snippet;
  };

  let { pageTitle, pageContent, filters }: PageProps = $props();
</script>

<div class="page">
  <header class="header container--full-bleed">
    <div class="content container--constrained">
      {@render masthead(filters)}
    </div>
  </header>
  <main class="container--constrained">
    <h2 class="content-title" id="content-title">{@render pageTitle()}</h2>
    {@render pageContent()}
    <GoBackLink />
  </main>
</div>

<style>
  .header {
    background: var(--pink-medium);
    color: var(--gray-light);
  }

  .content-title {
    margin-block-start: 0;
    margin-block-end: 1rem;
    font-size: 1.25rem;
  }
</style>
