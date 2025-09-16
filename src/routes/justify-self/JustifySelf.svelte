<script lang="ts">
  import type { Property } from "csstype";
  import type { Entry, Simplify } from "type-fest";

  import MainLayout from "../../layouts/MainLayout/MainLayout.svelte";
  import SelectField from "../../components/SelectField/SelectField.svelte";
  import Example from "../../components/Example/Example.svelte";
  import Box from "./components/Box/Box.svelte";

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

<MainLayout>
  {#snippet pageTitle()}
    justify-self
  {/snippet}
  {#snippet filters()}
    <SelectField
      bind:selectedOption
      {options}
      label="Select a value for justify-self:"
      name="select-justify-self"
    />
  {/snippet}
  {#snippet pageContent()}
    <article>
      <section class="main-section">
        <h3 class="headline">Examples</h3>
        <div
          class="example"
          style="--justify-self: {selectedOption?.[0] ?? 'auto'}"
        >
          <h4 class="example-headline">
            Block elements (not supported in Firefox and Safari)
          </h4>
          <div class="example-wrapper">
            <Example parentClass="parent1" childClass="child1">
              {#snippet title()}
                With explicit inline size
              {/snippet}
              {#snippet label()}
                Block element
              {/snippet}
            </Example>
          </div>
          <div class="example-wrapper">
            <Example parentClass="parent2" childClass="child2">
              {#snippet title()}
                Without explicit inline size (child shrinks to max-content)
              {/snippet}
              {#snippet label()}
                Block element
              {/snippet}
            </Example>
          </div>
        </div>
        <div
          class="example"
          style="--justify-self: {selectedOption?.[0] ?? 'auto'}"
        >
          <h4 class="example-headline">Absolute positioned elements</h4>
          <div class="example-wrapper">
            <Example parentClass="parent3" childClass="child3">
              {#snippet title()}
                With non-"auto" value for inset/inset-inline
              {/snippet}
              {#snippet label()}
                Absolute positioned element
              {/snippet}
            </Example>
          </div>
        </div>
      </section>
      <section class="main-section">
        <h3 class="headline">Use cases</h3>
        <div id="use-case-1">
          <h4 class="example-headline">
            Single elements (CTAs, Images etc.) inside a container
          </h4>
          <div class="example-component">
            <Box />
          </div>
          <ul class="text-list" aria-label="Benefits">
            <li>
              The container element doesn't need to be a flex-container and no
              unwanted default flexbox behavior needs to be overridden (i.e.<code
                class="code">flex-grow</code
              >
              being disabled by default) in the child element.
            </li>
            <li>
              Inline margins can still be used to move container out of
              alignment, for example when centred as auto-margins are not used
              for alignment, e.g no <code class="code">margin-inline: auto</code
              >.
            </li>
          </ul>
        </div>
      </section>
    </article>
  {/snippet}
</MainLayout>

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
  }
  .example :where(:global(.parent1), :global(.parent2)) {
    position: relative;
  }

  .example :global(.parent3) {
    position: relative;
    block-size: 200px;
  }
  .example :global(.child1) {
    display: block;
    inline-size: min(200px, 100%);
    justify-self: var(--justify-self, auto);
  }

  .example :global(.child2) {
    display: block;
    max-inline-size: 100%; /* to prevent overflow on small viewports */
    justify-self: var(--justify-self, auto);
  }

  .example :global(.child3) {
    position: absolute;
    inset: 1rem; /* important */
    justify-self: var(--justify-self, auto);
  }

  .example-component {
    margin-block: 1rem;
  }
</style>
