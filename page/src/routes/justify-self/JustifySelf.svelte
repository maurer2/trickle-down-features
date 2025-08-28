<h1 class="headline">justify-self</h1>

<h2 class="subheadline">With explicit inline size</h2>
<div class="parent">
  <span class="child1">Block element</span>
</div>

<h2 class="subheadline">Without explicit inline size (child shrinks to max-content)</h2>
<div class="parent">
  <span class="child2">Block element</span>
</div>


<style>
  .headline {
    margin-block-start: 0;
    margin-block-end: 1rem;
  }

  .subheadline {
    margin-block-start: 2rem;
    margin-block-end: 1rem;
  }

  .parent {
    padding: 1rem;
    border: 2px solid var(--black);
  }

  .child1 {
    display: block;
    padding: inherit;
    inline-size: min(200px, 100%);
    /* max-inline-size: 100%; */
    border: 2px dashed var(--black);
    justify-self: center;
    text-align: center;
  }

  .child2 {
    display: block;
    padding: inherit;
    border: 2px dashed var(--black);
    justify-self: center;
    text-align: center;
    max-inline-size: 100%; /* to prevent overflow on small viewports */
  }

</style>
