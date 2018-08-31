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

Applies a purple text color with scoped, browser-prefixed CSS, while PurgeCSS strips all other unused colors (and classes) from the Tailwind default configuration.


## Configuration

### `postcss.config.js` Plugins

- `postcss-preset-env`: Defaults to stage 2, as these draft proposals are considered reasonably stable. If you want to enable handy experimental features like nested classes (`a { &:hover: {...} }`), change to `stage: 0`. You can safely delete this plugin from the list if you only write old CSS or use another preprocessor.

- `@fullhuman/postcss-purgecss`: Purgecss removes all CSS classes that it can't find reference to. By default, all Vue and style files in the `src` folder are included. Adjust `content` array if you have CSS classes in other files.
