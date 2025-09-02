<script lang="ts">
  import type { ComponentProps } from "svelte";
  import type { Property } from "csstype";

  import SelectField from "../../components/SelectField.svelte";

  type SelectFieldProp = ComponentProps<typeof SelectField>;
  type SelectFieldOptionProp = {
    label: SelectFieldProp["options"][number]["label"];
    value: Property.JustifySelf;
  };

  const options: SelectFieldOptionProp[] = [
    { label: "Centre", value: "center" },
    { label: "Start", value: "start" },
    { label: "End", value: "end" },
    { label: "Stretch", value: "stretch" },
    { label: "Flex-start", value: "flex-start" },
    { label: "Flex-end", value: "flex-end" },
    { label: "Left", value: "left" },
    { label: "Right", value: "right" },
  ];
  let selectedOption = $state(options[0]);
</script>

<div class="header">
  <h1 class="headline">justify-self</h1>
  <SelectField
    bind:selectedOption
    {options}
    label="Select a value for justify-self:"
    name="select-justify-self-1"
  />
</div>

<div class="examples" style="--justify-self: {selectedOption.value}">
  <h2 class="subheadline">With explicit inline size</h2>
  <div class="parent">
    <span class="child1">Block element</span>
  </div>

  <h2 class="subheadline">
    Without explicit inline size (child shrinks to max-content)
  </h2>
  <div class="parent">
    <span class="child2">Block element</span>
  </div>
</div>

<style>
  .header {
    container-type: inline-size;
    container-name: header;
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
    justify-self: var(--justify-self, center);
    text-align: center;
  }

  .child2 {
    display: block;
    padding: inherit;
    border: 2px dashed var(--black);
    justify-self: var(--justify-self, center);
    text-align: center;
    max-inline-size: 100%; /* to prevent overflow on small viewports */
  }
</style>
