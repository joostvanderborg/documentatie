# Heading 1

## Goal: there is only one heading at level 1 in the accessibility tree

## Solution: use only one `<h1>` in your page structure

## Solution: hide `<h1>` from the accessibility tree by placing `aria-hidden="true"` on a container element while a modal dialog is present

Having multiple `<h1>` elements present in your DOM is not an accessibility issue in itself, as long as only one is present in the accessibility tree.
