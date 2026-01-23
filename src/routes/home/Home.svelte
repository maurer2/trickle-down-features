<script lang="ts">
  import Page from "../../layouts/Page/Page.svelte";
  import Link from "../../components/Link/Link.svelte";
</script>

<Page>
  {#snippet pageTitle()}
    Examples
  {/snippet}
  {#snippet pageContent()}
    <ul class="links" aria-labelledby="page-title">
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
        <Link target="#/align-content" class="link">align-content</Link>
      </li>
    </ul>
  {/snippet}
</Page>

<style>
  .links {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
    margin: 0;
    padding-inline: 0;
    list-style: none;

    & > li {
      display: flex;
    }
  }

  .links :global(.link) {
    flex: auto;
    align-content: center;
  }
</style>
