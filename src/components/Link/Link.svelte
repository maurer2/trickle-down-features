<script lang="ts">
  import type {
    ClassValue,
    HTMLAnchorAttributes,
    AriaAttributes,
  } from "svelte/elements";
  import type { Snippet } from "svelte";

  type LinkProps = HTMLAnchorAttributes & {
    linkClass?: ClassValue;
    target: string;
    "aria-disabled"?: AriaAttributes["aria-disabled"];
    children: Snippet;
  };

  let {
    linkClass,
    target,
    children,
    "aria-disabled": ariaDisabled,
    ...htmlAttributes
  }: LinkProps = $props();
</script>

<!-- https://www.scottohara.me/blog/2021/05/28/disabled-links.html#correctly-using-aria -->
<a
  href={ariaDisabled ? undefined : target}
  role={ariaDisabled ? "link" : undefined}
  aria-disabled={ariaDisabled}
  class="link squircle {linkClass}"
  {...htmlAttributes}
>
  {@render children()}</a
>

<style>
  .link {
    display: inline-block;
    padding-inline: 1rem;
    padding-block: 0.5rem;
    border: 2px solid var(--black);
    border-radius: 25px;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    color: currentColor;
    cursor: pointer;

    &[aria-disabled] {
      opacity: 0.5;
      text-decoration: line-through;
      cursor: not-allowed;
    }

    &:where(:hover, :focus):not([aria-disabled]) {
      background: var(--black);
      color: var(--white);
    }
  }
</style>
