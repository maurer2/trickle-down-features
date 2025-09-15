<script lang="ts">
  import Link from "../../../../components/Link/Link.svelte";
</script>

<ul class="links" aria-label="Example horizontal list">
  <li>
    <Link target="#/place-self" linkClass="link"
      >A long label that wraps to multiple lines</Link
    >
  </li>
  <li>
    <Link target="#/place-self" linkClass="link">A somewhat shorter label</Link>
  </li>
  <li>
    <Link target="#/place-self" linkClass="link">An even shorter label</Link>
  </li>
  <li>
    <Link target="#/place-self" linkClass="link" aria-label="A label">
      <span class="icon" aria-hidden="true">&#127991;</span></Link
    >
  </li>
</ul>

<style>
  .links {
    display: grid;
    margin-inline: 0;
    padding-inline: 0;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 10rem), 1fr));
    gap: 1rem;
    grid-auto-rows: 1fr; /*  keep same row height when wrapping; */
    list-style: none;

    & > li {
      display: contents;
    }
  }

  .links :global(.link) {
    align-content: center;

    /* :global(&) .icon // :global() not needed here */
    & .icon {
      filter: invert() grayscale();
      font-size: 2rem;
    }

    /* &:where(:hover, :focus) .icon, // :global() needed here */
    :global(&:where(:hover, :focus)) .icon {
      filter: grayscale();
    }
  }
</style>
