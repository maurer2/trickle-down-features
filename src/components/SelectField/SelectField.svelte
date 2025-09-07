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
    <option value={undefined}>Please select an option</option>
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
    border: 2px solid var(--black);
    border-radius: 25px;
    outline-offset: 0.5rem;
    corner-shape: squircle;

    &::picker-icon {
      transition: rotate var(--transition-duration);
    }

    &:open::picker-icon {
      rotate: 180deg;
    }

    &::picker(select) {
      appearance: base-select;
      padding: 0;
      margin-block-start: 1rem;
      border: 0;
      border-radius: 25px;
      corner-shape: squircle;
      background: var(--black);
      color: var(--white);
      /* opacity: 0;
      transition: opacity var(--transition-duration); */
    }

    /* &:open::picker(select) {
      opacity: 1;

      @starting-style {
        opacity: 0;
      }
    } */
  }

  option {
    position: relative;
    padding-inline: 1rem;
    padding-block: calc(0.5rem + 4px);
    border: 0;

    &:first-of-type {
      font-style: italic;
    }

    &:where(:hover, :focus) {
      background: var(--white);
      color: var(--black);

      &:before {
        position: absolute;
        content: "\27A0";
      }
    }

    &:where(:checked) {
      background: var(--white);
      color: var(--black);
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
