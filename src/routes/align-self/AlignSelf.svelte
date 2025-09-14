<script lang="ts">
  import type { Property } from "csstype";
  import type { Entry, Simplify } from "type-fest";

  import MainLayout from "../../layouts/MainLayout/MainLayout.svelte";
  import SelectField from "../../components/SelectField/SelectField.svelte";
  import Example from "../../components/Example/Example.svelte";

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
  const defaultSelectedOption = options.entries().next().value;

  let selectedOption = $state<Simplify<Entry<typeof options>> | undefined>(
    defaultSelectedOption
  );
</script>

<MainLayout>
  {#snippet pageTitle()}
    align-self
  {/snippet}
  {#snippet headerContent()}
    <SelectField
      bind:selectedOption
      {options}
      label="Select a value for align-self:"
      name="select-align-self"
    />
  {/snippet}
  {#snippet pageContent()}
    <div class="examples" style="--align-self: {selectedOption?.[0] ?? 'auto'}">
      <h3 class="headline">
        Absolute positioned child elements inside relative positioned parent
      </h3>
      <section class="example-wrapper">
        <Example parentClass="parent1" childClass="child1">
          {#snippet title()}
            With non-"auto" value for inset/inset-inline
          {/snippet}
          {#snippet label()}
            Absolute positioned element
          {/snippet}
        </Example>
      </section>
      <section class="example-wrapper">
        <Example parentClass="parent2" childClass="child2">
          {#snippet title()}
            With non-auto value for inset
          {/snippet}
          {#snippet label()}
            Absolute positioned element
          {/snippet}
        </Example>
      </section>
    </div>
  {/snippet}
</MainLayout>

<style>
  .examples {
    margin-block-end: 1rem;
  }

  .example-wrapper:not(:last-child) {
    margin-block-end: 2rem;
  }

  .headline {
    margin-block-start: 0;
    margin-block-end: 1rem;
    /* text-wrap: balance; */
  }

  /* reference to wrapper element and :global required to pass style class as prop to child */
  .examples :where(:global(.parent1), :global(.parent2)) {
    position: relative;
    block-size: 200px;
  }

  .examples :global(.child1) {
    position: absolute;
    inset: 1rem; /* important */
    /* inline-size: min(200px, 100%); */
    margin-inline: auto; /* also works on absolute positioned elements */
    align-self: var(--align-self, auto);
  }

  .examples :global(child2) {
    position: absolute;
    inset: auto;
    /* inline-size: min(200px, 100%); */
    margin-inline: auto; /* also works on absolute positioned elements */
    align-self: var(--align-self, auto);
  }
</style>
