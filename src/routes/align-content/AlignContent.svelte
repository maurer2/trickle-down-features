<script lang="ts">
  import type { Property } from "csstype";
  import type { Entry, Simplify } from "type-fest";

  import MainLayout from "../../layouts/MainLayout/MainLayout.svelte";
  import SelectField from "../../components/SelectField/SelectField.svelte";
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
  {#snippet filters()}
    <SelectField
      bind:selectedOption
      {options}
      label="Select a value for align-content:"
      name="select-align-self"
    />
  {/snippet}
  {#snippet pageContent()}
    <article>
      <section class="main-section">
        <h3 class="headline">Examples</h3>
        <div
          class="example"
          style="--align-content: {selectedOption?.[0] ?? 'normal'}"
        >
          <figure class="example-wrapper">
            <figcaption class="example-headline" id="example-1-title">
              Table cells (<code class="code">&lt;th&gt;</code> and
              <code class="code">&lt;td&gt;</code>)
            </figcaption>
            <div class="scroll-inline-container">
              <!-- https://www.w3.org/WAI/tutorials/tables/caption-summary/ -->
              <table aria-labelledby="example-1-title" class="table">
                <thead>
                  <tr>
                    <th scope="col">Column 1 header</th>
                    <th scope="col"
                      >Column 2 header <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed eiusmod tempor incidunt ut labore et dolore magna
                        aliqua.
                      </p></th
                    >
                    <th scope="col">Column 3 header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Row 1 header</th>
                    <td>Column 2</td>
                    <td
                      >Column 3 <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed eiusmod tempor incidunt ut labore et dolore magna
                        aliqua.
                      </p></td
                    >
                  </tr>
                </tbody>
              </table>
            </div>
          </figure>
        </div>
      </section>
      <section class="main-section">
        <h3 class="headline">Use cases</h3>
        <div id="use-case-1">
          <h4>
            Horizontal list with labels of of varying sizes inside columns of
            equal height (<code class="code">ul&gt;li&gt;a/button</code>)
          </h4>
          <div class="example-component">
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
              <code class="code">align-content</code>
            </li>
          </ul>
        </div>
        <div id="use-case-2">
          <h4>
            Unifies CSS properties for vertical alignment of child content
          </h4>
          <ul class="text-list">
            <li>
              Renders the (<code class="code">vertical-align</code>) property
              within table cells unnecessary and brings it in line with other
              layout contexts
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

  .headline {
    margin-block-start: 0;
    margin-block-end: 1rem;
  }

  .example-wrapper {
    margin-inline: 0;
    margin-block: 0;

    &:not(:last-child) {
      margin-block-end: 2rem;
    }
  }

  .example-headline {
    margin-block-start: 0;
    margin-block-end: 1rem;
    font-weight: 700;
  }

  .example-component {
    margin-block: 1rem;
  }

  .table {
    table-layout: fixed;
    border-spacing: 0;
    min-inline-size: 28rem;
    max-inline-size: 100%;

    & th,
    & td {
      padding-inline: 1rem;
      padding-block: 0.5rem;
      align-content: var(--align-content, normal);
      border-inline-start: 2px solid var(--gray-dark);
      border-block-start: 2px solid var(--gray-dark);

      &:last-child {
        border-inline-end: 2px solid var(--gray-dark);
      }
    }

    &:has(> thead) {
      thead > tr:first-child th {
        &:first-child {
          border-start-start-radius: 25px;
          corner-start-start-shape: squircle;
        }

        &:last-child {
          border-start-end-radius: 25px;
          corner-start-end-shape: squircle;
        }
      }
    }

    &:has(> tbody):not(:has(> tfoot)) {
      tbody > tr:last-child th,
      tbody > tr:last-child td {
        border-block-end: 2px solid var(--gray-dark);

        &:first-child {
          border-end-start-radius: 25px;
          corner-end-start-shape: squircle;
        }

        &:last-child {
          border-end-end-radius: 25px;
          corner-end-end-shape: squircle;
        }
      }
    }
    /* &:has(> tfoot) {
      tfoot > tr:last-child th,
      tfoot > tr:last-child td {
        border-block-end: 2px solid var(--gray-dark);
        &:first-child {
          border-end-start-radius: 25px;
          corner-end-start-shape: squircle;
        }

        &:last-child {
          border-end-end-radius: 25px;
          corner-end-end-shape: squircle;
        }
      }
    } */
  }
</style>
