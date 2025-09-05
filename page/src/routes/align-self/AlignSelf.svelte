<script lang="ts">
  import type { Property } from "csstype";
  import type { Entry, Simplify } from "type-fest";

  import SelectField from "../../components/SelectField.svelte";

  const options = new Map<Property.AlignSelf, string>([
    ["auto", "Auto"],
    ["normal", "Normal"],
    ["center", "Centre"],
    ["start", "Start"],
    ["end", "End"],
    ["stretch", "Stretch"],
    ["baseline", "Baseline"],
    ["flex-start", "Flex start"], // should be the same as self-start since flex direction is ignored
    ["flex-end", "Flex end"], // should be the same as self-start since flex direction is ignored
    ["self-start", "Self start"],
    ["self-end", "Self end"],
  ]);

  let selectedOption = $state<Simplify<Entry<typeof options>> | undefined>(
    undefined
  );
</script>

<div class="header">
  <h1 class="title">align-self</h1>
  <SelectField
    bind:selectedOption
    {options}
    label="Select a value for align-self:"
    name="select-align-self"
  />
</div>
<div
  class="examples"
  style="--align-self: {selectedOption?.[0] ?? 'auto'}"
  hidden={!selectedOption}
>
  <div>
    <h2 class="headline">
      Absolute positioned child element inside relative positioned parent
    </h2>
    <section class="example">
      <h3 class="subheadline">With correct value for inset</h3>
      <div class="parent">
        <span class="child1">Absolute positioned child element</span>
      </div>
    </section>
    <section class="example">
      <h3 class="subheadline">With inset set to "auto"</h3>
      <div class="parent">
        <span class="child2">Absolute positioned child element</span>
      </div>
    </section>
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
    block-size: 200px;
    border: 3px dashed var(--black);
    border-radius: 25px;
    corner-shape: squircle;
  }

  .child1 {
    position: absolute;
    inset: 1rem; /* important */
    padding: inherit;
    /* inline-size: min(200px, 100%); */
    margin-inline: auto; /* also works on absolute positioned elements */
    align-self: var(--align-self, auto);
    border-radius: 25px;
    text-align: center;
    corner-shape: squircle;
    background: var(--black);
    color: var(--white);
  }

  .child2 {
    position: absolute;
    inset: auto;
    padding: inherit;
    /* inline-size: min(200px, 100%); */
    margin-inline: auto; /* also works on absolute positioned elements */
    align-self: var(--align-self, auto);
    border-radius: 25px;
    text-align: center;
    corner-shape: squircle;
    background: var(--black);
    color: var(--white);
  }
</style>
