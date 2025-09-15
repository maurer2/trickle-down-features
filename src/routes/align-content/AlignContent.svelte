<script lang="ts">
  import type { Property } from "csstype";
  import type { Entry, Simplify } from "type-fest";

  import MainLayout from "../../layouts/MainLayout/MainLayout.svelte";
  import HorizontalListExample from "./components/HorizontalListExample/HorizontalListExample.svelte";

  const options = new Map<Property.AlignContent, string>([
    ["normal", "Normal"],
    ["center", "Centre"],
    ["start", "Start"],
    ["end", "End"],
    ["stretch", "Stretch"],
    ["baseline", "Baseline"],
    ["flex-start", "Flex start"],
    ["flex-end", "Flex end"],
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
    align-content
  {/snippet}
  {#snippet pageContent()}
    <div
      class="examples"
      style="--align-content: {selectedOption?.[0] ?? 'normal'}"
    >
      <h3 class="headline">Use cases</h3>
      <section id="horizontal-list">
        <h4>
          Horizontal list with labels of of varying sizes inside columns of
          equal height (<code class="code">ul&gt;li&gt;a/button</code>)
        </h4>
        <div>
          <HorizontalListExample />
        </div>
        <ul class="text-list">
          <li>
            <code class="code">li</code> elements can be set to
            <code class="code">display:contents</code>
            and don't need to be a made flex containers in order to use align-content
            to vertically centre the <code class="code">&lt;a&gt;</code>/
            <code class="code">&lt;button&gt;</code> elements inside
          </li>
          <li>
            The <code class="code">&lt;a&gt;</code> or
            <code class="code">&lt;button&gt;</code> elements can be simple
            block-elements, so no disabling of unwanted flexbox behavior (i.e.<code
              class="code">flex-grow</code
            >
            being disabled by default) is necessary. Content but can still be vertically
            centred by using
            <code class="code">align-content</code>.
          </li>
        </ul>
      </section>
    </div>
  {/snippet}
</MainLayout>

<style>
  .examples {
    margin-block-end: 1rem;
  }

  .headline {
    margin-block-start: 0;
    margin-block-end: 1rem;
  }
</style>
