<!-- @license CC0-1.0 -->

# Radio button group

## Goal: use can switch between options using arrow keys on keyboard

## Solution: use the `<input type="radio">` with the same `name` attribute for every radio button in the group

## Solution: implement `keypress` listeners for custom radio button with `role="radio"`

To support key repeat to quickly move through a large group of options, using `keypress` instead of `keydown` is essential.
