<script lang="ts">
  import type { Property } from "csstype";
  import type { Entry, Simplify } from "type-fest";

  import Page from "../../layouts/Page/Page.svelte";
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
    defaultSelectedOption,
  );
</script>

<Page>
  {#snippet pageTitle()}
    align-self
  {/snippet}
  {#snippet filters()}
    <SelectField
      bind:selectedOption
      {options}
      label="Select a value for align-self:"
      name="select-align-self"
    />
  {/snippet}
  {#snippet pageContent()}
    <article>
      <section class="main-section">
        <h3 class="headline">Examples</h3>
        <div
          class="example"
          style="--align-self: {selectedOption?.[0] ?? 'auto'}"
        >
          <h4 class="example-headline">
            Absolute positioned child elements inside relative positioned parent
          </h4>
          <div class="example-wrapper">
            <Example parentClass="parent1" childClass="child1">
              {#snippet title()}
                With non-"auto" value for inset/inset-inline
              {/snippet}
              {#snippet label()}
                Absolute positioned element
              {/snippet}
            </Example>
          </div>
          <div class="example-wrapper">
            <Example parentClass="parent2" childClass="child2">
              {#snippet title()}
                With non-auto value for inset
              {/snippet}
              {#snippet label()}
                Absolute positioned element
              {/snippet}
            </Example>
          </div>
        </div>
      </section>
    </article>
  {/snippet}
</Page>

<style>
  .main-section {
    margin-block-end: 2rem;
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
  .example :where(:global(.parent1), :global(.parent2)) {
    position: relative;
    block-size: 200px;
  }

  .example :global(.child1) {
    position: absolute;
    inset: 1rem; /* important */
    /* inline-size: min(200px, 100%); */
    margin-inline: auto; /* also works on absolute positioned elements */
    align-self: var(--align-self, auto);
  }

  .example :global(child2) {
    position: absolute;
    inset: auto;
    /* inline-size: min(200px, 100%); */
    margin-inline: auto; /* also works on absolute positioned elements */
    align-self: var(--align-self, auto);
  }
</style>
