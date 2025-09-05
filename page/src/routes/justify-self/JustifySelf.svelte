<script lang="ts">
  import type { Property } from "csstype";
  import type { Entry, Simplify } from "type-fest";

  import SelectField from "../../components/SelectField.svelte";

  const options = new Map<Property.JustifySelf, string>([
    ["center", "Centre"],
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
    name="select-justify-self"
  />
</div>
<div
  class="examples"
  style="--justify-self: {selectedOption?.[0] ?? 'auto'}"
  hidden={!selectedOption}
>
  <div>
    <h2 class="headline">Block elements</h2>
    <section class="example">
      <h3 class="subheadline">With explicit inline size</h3>
      <div class="parent">
        <span class="child1">Block element</span>
      </div>
    </section>
    <section class="example">
      <h3 class="subheadline">
        Without explicit inline size (child shrinks to max-content)
      </h3>
      <div class="parent">
        <span class="child2">Block element</span>
      </div>
    </section>

    <h2 class="headline">Absolute positioned elements</h2>
    <p>Todo</p>
  </div>
</div>

<style>
  .examples {
    margin-block-end: 2rem;
    overflow: clip;
    opacity: 1;
    transition:
      opacity var(--transition-duration),
      display var(--transition-duration) allow-discrete;

    @starting-style {
      opacity: 0;
    }

    &[hidden] {
      opacity: 0;
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
    margin-block-start: 0;
    margin-block-end: 1rem;
  }

  .example {
    margin-block-end: 2rem;
  }

  .parent {
    padding: 1rem;
    position: relative;
    border: 3px dashed var(--black);
    border-radius: 25px;
    corner-shape: squircle;
  }

  .child1 {
    display: block;
    padding: inherit;
    inline-size: min(200px, 100%);
    justify-self: var(--justify-self, auto);
    border-radius: 25px;
    text-align: center;
    corner-shape: squircle;
    background: var(--black);
    color: var(--white);
  }

  .child2 {
    display: block;
    padding: inherit;
    max-inline-size: 100%; /* to prevent overflow on small viewports */
    justify-self: var(--justify-self, auto);
    border-radius: 25px;
    text-align: center;
    corner-shape: squircle;
    background: var(--black);
    color: var(--white);
  }
</style>
