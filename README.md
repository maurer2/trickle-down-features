# Trickle Down Features

Overview of layout techniques previously only supported within grid- and flexbox contexts, that are now supported for block elements, tables and absolute positioned elements.

## Overview

| CSS-property | Element types | Applied on | Description | CanIUse | Example
| --- | --- | --- | --- | --- | --- |
| `justify-self` | Block elements and absolute positioned elements | Child | Align single elements on the inline-axis. Alternative to `inline-size/width: x` and `margin-inline: auto`\/`margin: 0 auto` . Doesn't work on absolute elements unless `inset`/`inset-inline` is set to a value other than `auto`. Alternatively `left` and `right` need to be set to a value other than `auto`. Spotty browser support | - | [Link](https://maurer2.github.io/trickle-down-features/#/justify-self) |
| `align-self` | Absolute positioned elements | Child | Align single elements on the block-axis. Doesn't work on absolute positioned elements unless `inset`/`inset-block` is set to a value other than `auto`. Alternatively `top` and `bottom` need to be set to a value other than `auto` | [Link](https://caniuse.com/mdn-css_properties_align-self_position_absolute_context) | [Link](https://maurer2.github.io/trickle-down-features/#/justify-self) |
| `place-self` | Block elements (Inline-axis) and absolute positioned elements (both axes) | Child | Shorthand for `justify-self` and `align-self` | [Link](https://caniuse.com/mdn-css_properties_place-self_position_absolute_context) | - |
| `justify-items` | Block elements and absolute positioned elements | Parent | Align child elements on the inline-axis. Child elements are stacked rather than next to each other. Spotty browser support | - | - |
| `align-content` | Block elements and table elements | Parent | Align child elements on the block-axis. Alternative to `vertical-align` in table-headers and table | [Link](https://caniuse.com/mdn-css_properties_align-content_block_context)| [Link](https://maurer2.github.io/trickle-down-features/#/align-content)|

## Applicable CSS-properties for elements

| Element type | Applicable CSS-properties that effect the element itself | Applicable CSS-properties that affect child elements* |
| --- | --- | --- |
| Block |  `justify-self` (inline axis, not supported in Firefox and Safari) <br /> `place-self` (inline axis) | `justify-items` (inline axis) <br /> `align-content` (block axis) |
| Absolute positioned element |  `justify-self` (inline axis) <br />  `align-self` (block axis) <br /> `place-self` (both axes) ||
| Table cell/header | | |

<small>&ast; Elements with only text content for example `<button>Label</button>` are considered parent elements to the text content due to [anonymous inline box insertion](https://www.w3.org/TR/CSS22/visuren.html#anonymous).</small>