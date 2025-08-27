# trickle-down-features

Overview of layout techniques previously only supported in grid- and flexbox layouts, that are now supported for block- and other primitive elements.

| CSS-Declaration | Elements | Description | CanIUse link
| --- | --- | --- | --- |
| `justify-self` | Block elements and absolute positioned elements | Align single elements on the inline-axis. Alternative to `width: x` and `marginInline: auto`. Doesn't work on absolute elements unless `inset`/`inset-inline` is set to a value other than `auto`. Alternatively `left` and `right` need to be set to a value other than `auto`. | -
