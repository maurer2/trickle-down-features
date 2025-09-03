<script lang="ts">
  import type { Entry, Simplify } from "type-fest";

  type SelectFieldProp = {
    label: string;
    name: string;
    options: Map<string, string>;
    selectedOption?: Simplify<Entry<SelectFieldProp["options"]>>;
  };

  let {
    selectedOption = $bindable(),
    options,
    label,
    name,
  }: SelectFieldProp = $props();
</script>

<form class="form">
  <label for={name}>{label}</label>
  <select
    bind:value={
      () => selectedOption?.[0],
      (newSelectedValue) => {
        if (!newSelectedValue || !options.has(newSelectedValue)) {
          selectedOption = undefined;
          return;
        }

        // https://2ality.com/2025/06/checking-map-keys-array-indices-typescript.html#key-checks-for-maps
        selectedOption = [newSelectedValue, options.get(newSelectedValue)!];
      }
    }
    class="select"
    id={name}
    {name}
  >
    {#each options as [value, label], index (value)}
      {#if index === 0}
        <option value={undefined}>Please select an option</option>
      {/if}
      <option {value}>{label}</option>
    {/each}
  </select>

  <!-- <pre class="debug"><code
      >{$state.snapshot(JSON.stringify(selectedOption, null, 4))}</code
    ></pre> -->
</form>

<style>
  .form {
    display: grid inline;
    grid-template-columns: 1fr;
    row-gap: 1rem;

    @container header (width >= 480px) {
      grid-template-columns: auto auto;
      row-gap: 0;
      column-gap: 1rem;
      align-items: safe start;
    }
  }

  .select {
    appearance: base-select;
    inline-size: 250px;
    padding: 0.25rem;
    outline-offset: 0.5rem;
    border: 2px solid var(--black);
    border-radius: 0;
  }

  /* .debug {
    overflow: hidden;

    @container header (width >= 480px) {
      grid-column-start: 2;
      grid-row-start: 2;
    }
  } */
</style>
