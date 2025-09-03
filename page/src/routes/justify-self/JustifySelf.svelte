<script lang="ts">
  import type { Property } from "csstype";
  import type { Entry, Simplify } from "type-fest";

  import SelectField from "../../components/SelectField.svelte";

  const options = new Map<string, Property.JustifySelf>([
    ["center", "Center"],
    ["start", "Start"],
    ["end", "End"],
    ["stretch", "Stretch"],
    ["flex-start", "Flex start"],
    ["flex-end", "Flex end"],
    ["left", "Left"],
    ["right", "Right"],
  ]);

  let selectedOption = $state<Simplify<Entry<typeof options>> | undefined>(
    undefined
  );
</script>

<div class="header">
  <h1 class="title">justify-self</h1>
  <SelectField
    bind:selectedOption
    {options}
    label="Select a value for justify-self:"
    name="select-justify-self-1"
  />
</div>
<div
  class="examples"
  style="--justify-self: {selectedOption?.[0] ?? 'auto'}"
  hidden={!selectedOption}
>
  <div>
    <h2 class="headline">Block elements</h2>
    <section>
      <h3 class="subheadline">With explicit inline size</h3>
      <div class="parent">
        <span class="child1">Block element</span>
      </div>
    </section>
    <section>
      <h3 class="subheadline">
        Without explicit inline size (child shrinks to max-content)
      </h3>
      <div class="parent">
        <span class="child2">Block element</span>
      </div>
    </section>
  </div>
</div>

<style>
  .examples {
    height: auto;
    margin-block-end: 2rem;
    overflow: clip;
    transition:
      height var(---transition-duration),
      display var(---transition-duration) allow-discrete;
    interpolate-size: allow-keywords;

    @starting-style {
      height: 0;
      margin-block-end: 0;
    }
    &[hidden] {
      height: 0;
      margin-block-end: 0;
    }
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

  .subheadline {
    margin-block-start: 2rem;
    margin-block-end: 1rem;
  }

  .parent {
    padding: 1rem;
    border: 2px solid var(--black);
  }

  .child1 {
    display: block;
    padding: inherit;
    inline-size: min(200px, 100%);
    border: 2px dashed var(--black);
    justify-self: var(--justify-self, auto);
    text-align: center;
  }

  .child2 {
    display: block;
    padding: inherit;
    border: 2px dashed var(--black);
    justify-self: var(--justify-self, auto);
    text-align: center;
    max-inline-size: 100%; /* to prevent overflow on small viewports */
  }
</style>
