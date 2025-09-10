<script lang="ts">
  import type { Property } from "csstype";
  import type { Entry, Simplify } from "type-fest";

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

<div class="header">
  <h1 class="title">align-content</h1>
</div>
<div
  class="examples"
  style="--align-content: {selectedOption?.[0] ?? 'normal'}"
>
  <h2 class="headline">Use cases</h2>
  <section id="horizontal-list">
    <h3>
      Horizontal list with labels of of varying sizes inside columns of equal
      height (<code class="code">ul&gt;li&gt;a/button</code>)
    </h3>
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

<style>
  .examples {
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

  .text-list {
    display: flex;
    margin: 0;
    padding-inline-start: 1rem;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
