<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ClassValue } from "svelte/elements";

  type ExampleProps = {
    parentClass: ClassValue;
    childClass: ClassValue;
    title: Snippet;
    label: Snippet;
  };

  let { title, label, parentClass, childClass }: ExampleProps = $props();
</script>

<div class="example">
  <h4 class="example-headline">
    {@render title()}
  </h4>
  <div class="parent squircle {parentClass}">
    <div class="child squircle {childClass}">
      {@render label()}
    </div>
  </div>
</div>

<style>
  .example-headline {
    margin-block-start: 0;
    margin-block-end: 1rem;
  }

  .parent {
    padding: 1rem;
    border: 3px dashed var(--gray-dark);
    border-radius: 25px;
  }

  .child {
    padding: inherit;
    border-radius: 25px;
    text-align: center;
    font-weight: 700;
    background: var(--gray-dark);
    color: var(--gray-light);
  }
</style>
