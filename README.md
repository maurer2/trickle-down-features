# trickle-down-features

Overview of layout techniques previously only supported within grid- and flexbox contexts, that are now supported for block elements, tables and absolute positioned elements.

| CSS-property | Element types | Applied on | Description | Link
| --- | --- | --- | --- | --- |
| `justify-self` | Block elements and absolute positioned elements | Child | Align single elements on the inline-axis. Alternative to `width: x` and `marginInline: auto`\/`margin: 0 auto` . Doesn't work on absolute elements unless `inset`/`inset-inline` is set to a value other than `auto`. Alternatively `left` and `right` need to be set to a value other than `auto`. Spotty browser support | [CodePen](https://codepen.io/yisi/pen/OJKQgGW)
| `align-self` | Absolute positioned elements | Child | Align single elements on the block-axis. Doesn't work on absolute positioned elements unless `inset`/`inset-block` is set to a value other than `auto`. Alternatively `top` and `bottom` need to be set to a value other than `auto` | [CanIUse](https://caniuse.com/mdn-css_properties_align-self_position_absolute_context)
| `place-self` | Block elements (Inline-axis) and absolute positioned elements (both axis) | Child | Shorthand for `justify-self` and `align-self` | [CanIUse](https://caniuse.com/mdn-css_properties_place-self_position_absolute_context)
| `justify-items` | Block elements and absolute positioned elements | Parent | Align child elements on the inline-axis. Child elements are stacked rather than next to each other. Spotty browser support | [CodePen](https://codepen.io/yisi/pen/OJKQgGW)
| `align-content` | Block elements and table elements | Parent | Align child elements on the block-axis. Alternative to `vertical-align` in table-headers and table-cells. | [CanIUse](https://caniuse.com/mdn-css_properties_align-content_block_context)
