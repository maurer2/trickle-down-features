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
  const uid = $props.id();
</script>

<form class="form">
  <label for={uid} class="label">{label}</label>
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
    id={uid}
    {name}
  >
    <option value={undefined}>Please select a value</option>
    {#each options as [value, label] (value)}
      <option {value}>{label}</option>
    {/each}
  </select>
</form>

<style>
  .form {
    display: flex;
    gap: 1rem;
    flex-flow: row wrap;
    align-items: center;
  }

  .label {
    flex: auto;
  }

  .select {
    appearance: base-select;
    padding-inline: 1rem;
    padding-block: 0.5rem;
    /* https://www.joren.co/flex-grow-9999-hack/ */
    flex: 9999 0 250px;
    align-self: flex-start;
    border: 2px solid var(--gray-light);
    border-radius: var(--border-radius);
    corner-shape: var(--corner-shape);
    outline-offset: 0.5rem;
    font-weight: 700;

    &:where(:hover, :focus-within) {
      background: var(--gray-light);
      color: var(--gray-dark);
    }

    &::picker-icon {
      transition: rotate var(--transition-duration);
    }

    &:open::picker-icon {
      rotate: 180deg;
    }

    /* overlay */
    &::picker(select) {
      appearance: base-select;
      padding: 0;
      margin-block-start: 0.5rem;
      border: 0;
      corner-end-start-shape: var(--corner-shape); /* bottom left corner */
      border-end-start-radius: var(--border-radius);
      corner-end-end-shape: var(--corner-shape); /* bottom right corner */
      border-end-end-radius: var(--border-radius);
      background: var(--pink-medium);
      color: var(--gray-light);

      @container body (width > 34rem) {
        margin-block-start: 2rem;
      }
    }
  }

  option {
    position: relative;
    padding-inline: 1rem;
    padding-block: calc(0.5rem + 4px);
    border: 0;

    &:first-of-type {
      font-style: italic;

      &:where(:hover, :focus):before {
        font-style: normal;
      }
    }

    &:where(:hover, :focus) {
      background: var(--gray-dark);
      color: var(--gray-light);

      &:before {
        position: absolute;
        content: "\27A0";
      }
    }

    &:where(:checked) {
      background: var(--gray-dark);
      color: var(--gray-light);
      font-weight: 700;

      &:before {
        content: none;
      }
    }

    &:focus-visible {
      outline-offset: -0.5rem;
    }
  }
</style>
