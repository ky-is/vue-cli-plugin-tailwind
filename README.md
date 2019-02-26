# vue-cli-plugin-tailwind

[Tailwind CSS](https://tailwindcss.com/docs/what-is-tailwind)'s utility classes are minned by [Purgecss](https://www.purgecss.com) to ensure a minimal CSS footprint.

[postcss-preset-env](https://preset-env.cssdb.org/features) enables you to write CSS from upcoming standards, polyfilled based on your `browserslist` configuration.

## Install

```bash
vue add @ky-is/tailwind
```

When the plugin is updated, you can upgrade your tailwind configuration to take advantages of the latest fixes and improvements with:
```bash
vue invoke @ky-is/tailwind
```

(Requires node 6 or later.)

## Usage

In addition to inline classes, `shadowLookup` is supported to `@apply` mixins directly in `.vue` modules. For example, in `src/components/HelloWorld.vue` of the auto-generated cli app:
```html
<style lang="postcss" scoped>
h1 {
  @apply text-purple flex;
}
</style>
```

Applies a purple text color with scoped, browser-prefixed CSS, while PurgeCSS strips all other unused colors (and classes) from the Tailwind default configuration. Use `lang="postcss"` for better syntax highlighting.


## Configuration

### `postcss.config.js` Plugins

- `postcss-preset-env`: Defaults to stage 2, as these draft proposals are considered reasonably stable. If you want to enable handy experimental features like nested classes (`a { &:hover: {...} }`), change to `stage: 0`. You can safely delete this plugin from the list if you only write old CSS or use another preprocessor.

- `@fullhuman/postcss-purgecss`: Purgecss removes all CSS classes that it can't find reference to. By default, all Vue and style files in the `src` folder are included. Adjust `content` array if you have CSS classes in other files. Add class names to the `whitelist` array you want to manually prevent PurgeCSS from removing if it thinks they're unused.

### Whitelisting

Any CSS class that isn't used inside your `.html` files in `public/`, or by your `.vue` components (outside of the `<style>` block where they're defined) in `src/` will be stripped by PurgeCSS because it can't see that it's being used. Although most typical use cases should work as-is, you may find you need to whitelist (see above) classes applied in other JS files or by 3rd party libraries. It's always a good idea to look over your production build to ensure it's styled correctly.

### Caveats

- By default, any class you name `.*-move` will be whitelisted and always included in your output CSS. This is required to support `<transition-group>`'s [generated classnames](https://vuejs.org/v2/guide/transitions.html#List-Move-Transitions). You can change `whitelistPatterns` in `postcss.config.js` if you don't want this behavior.
- Any time you're using TailwindCSS and Vue, be careful not to define a `<transition-group>` with `name="cursor"`, as this will generate `.cursor-move` which will inherit [TailwindCSS's cursor class](https://tailwindcss.com/docs/cursor/).
- Using the object syntax class bindings requires quotation marks around class names, i.e. `:class="{ 'active': isActive }"`, because `:` is a valid character in CSS selectors.
