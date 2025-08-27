# trickle-down-features

Overview of layout techniques previously only supported within grid- and flexbox contexts, that are now supported for block elements, tables and absolute positioned elements.

| CSS-property | Elements | Description | CanIUse link
| --- | --- | --- | --- |
| `justify-self` | Block elements and absolute positioned elements (Does not work on table elements) | Align single elements on the inline-axis. Alternative to `width: x` and `marginInline: auto`\/`margin: 0 auto` . Doesn't work on absolute elements unless `inset`/`inset-inline` is set to a value other than `auto`. Alternatively `left` and `right` need to be set to a value other than `auto`. | -
| `align-self` | Absolute positioned elements (Does not work on block elements and table elements) | Align single elements on the block-axis. Doesn't work on absolute positioned elements unless `inset`/`inset-block` is set to a value other than `auto`. Alternatively `top` and `bottom` need to be set to a value other than `auto`. | [Link](https://caniuse.com/mdn-css_properties_align-self_position_absolute_context)
| `place-self` | Block elements (Inline-axis), absolute positioned elements (both axis) | Shorthand for `justify-self` and `align-self` | [Link](https://caniuse.com/mdn-css_properties_place-self_position_absolute_context)
| `justify-items` | Block elements and absolute positioned elements (Does not work on table elements)  | Align (multiple) child elements on the inline-axis. Child elements are stacked rather than next to each other | -
| `align-content` | Block elements and table elements (Does not work for absolute positioned elements) | Align single elements on the block-axis. Alternative to `vertical-align` in table-headers and table-cells. | [Link](https://caniuse.com/mdn-css_properties_align-content_block_context)
