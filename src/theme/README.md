# Sizzling components

## `MDXComponents/A`

The Docusaurs `Link` component has fancy logic to preload pages, and perhaps it is also needed to recognize broken links. Instead of using the `Link` component from `@utrecht`, it seems more feasible to extend the Docusaurus `Link` component.

For now I've only included CSS injection of the `utrecht-link` CSS, and added the class names.

Several features from the Utrecht Link are still missing, such as:

- `placholder` links: these probably won't be necessary for the nldesignsystem.nl website. The Utrecht breadcrumb link has the `placeholder` feature built-in.
- `external` links.

## `DocRoot/Layout/Sidebar/ExpandButton`

- Use Tabler icon.
- Avoid `title` attribute.
- Use `LinkButton` component, remove properties that `LinkButton` implements automatically

To do:

- [ ] Use button group variant based on container query to render full-width button when sidebar is very small, remove code from `style.module.css`.
- [ ] Use right-to-left agnostic icon, remove code from `style.module.css`.
