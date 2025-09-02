<script lang="ts">
  type SelectFieldProp = {
    label: string;
    name: string;
    options: { label: string; value: string }[];
    selectedOption: SelectFieldProp["options"][number];
  };

  let {
    selectedOption = $bindable(),
    options,
    label,
    name,
  }: SelectFieldProp = $props();

  const optionsAsMap = $derived(
    Object.fromEntries(
      options.map((option) => [
        option.value,
        { label: option.label, value: option.value },
      ])
    )
  );
</script>

<form class="form">
  <label for={name}>{label}</label>
  <select
    bind:value={
      () => selectedOption.value, // getter
      (newSelectedOption) => (selectedOption = optionsAsMap[newSelectedOption])
    }
    class="select"
    id={name}
    {name}
  >
    {#each options as option}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>

  <pre class="debug"><code
      >{$state.snapshot(JSON.stringify(selectedOption, null, 4))}</code
    ></pre>
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
    inline-size: 150px;
    padding: 0.25rem;
    outline-offset: 0.5rem;
    border: 2px solid var(--black);
    border-radius: 0;
  }

  .debug {
    overflow: hidden;

    @container header (width >= 480px) {
      grid-column-start: 2;
      grid-row-start: 2;
    }
  }
</style>
