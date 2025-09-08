<script lang="ts">
  import type { Property } from "csstype";
  import type { Entry, Simplify } from "type-fest";

  import SelectField from "../../components/SelectField/SelectField.svelte";
  import Example from "../../components/Example/Example.svelte";

  const options = new Map<Property.JustifySelf, string>([
    ["auto", "Auto"],
    ["center", "Centre"],
    ["start", "Start"],
    ["end", "End"],
    ["stretch", "Stretch"],
    ["flex-start", "Flex start"],
    ["flex-end", "Flex end"],
    ["left", "Left"],
    ["right", "Right"],
  ]);
  const defaultSelectedOption = options.entries().next().value;

  let selectedOption = $state<Simplify<Entry<typeof options>> | undefined>(
    defaultSelectedOption
  );
</script>

<div class="header">
  <h1 class="title">justify-self</h1>
  <SelectField
    bind:selectedOption
    {options}
    label="Select a value for justify-self:"
    name="select-justify-self"
  />
</div>
<div class="examples" style="--justify-self: {selectedOption?.[0] ?? 'auto'}">
  <h2 class="headline">With explicit inline size</h2>
  <section class="example-wrapper">
    <Example parentClass="parent1" childClass="child1">
      {#snippet title()}
        Block element
      {/snippet}
      {#snippet label()}
        Block element
      {/snippet}
    </Example>
  </section>
  <section class="example-wrapper">
    <Example parentClass="parent2" childClass="child2">
      {#snippet title()}
        Without explicit inline size (child shrinks to max-content)
      {/snippet}
      {#snippet label()}
        Block element
      {/snippet}
    </Example>
  </section>
  <h2 class="headline">Absolute positioned elements</h2>
  <section class="example-wrapper">
    <Example parentClass="parent3" childClass="child3">
      {#snippet title()}
        With non-"auto" value for inset/inset-inline
      {/snippet}
      {#snippet label()}
        Absolute positioned element
      {/snippet}
    </Example>
  </section>
</div>

<style>
  .examples {
    margin-block-end: 2rem;
  }

  .example-wrapper {
    margin-block-end: 2rem;
  }

  .header {
    container-type: inline-size;
    container-name: header;
    margin-block-end: 2rem;
  }

  .title {
    margin-block-start: 0;
    margin-block-end: 1rem;
  }

  .headline {
    margin-block-start: 0;
    margin-block-end: 1rem;
  }
  .examples :where(:global(.parent1), :global(.parent2)) {
    position: relative;
  }

  .examples :global(.parent3) {
    position: relative;
    block-size: 200px;
  }
  .examples :global(.child1) {
    display: block;
    inline-size: min(200px, 100%);
    justify-self: var(--justify-self, auto);
  }

  .examples :global(.child2) {
    display: block;
    max-inline-size: 100%; /* to prevent overflow on small viewports */
    justify-self: var(--justify-self, auto);
  }

  .examples :global(.child3) {
    position: absolute;
    inset: 1rem; /* important */
    justify-self: var(--justify-self, auto);
  }
</style>
