# vue-cli-plugin-tailwind

[Tailwind CSS](https://tailwindcss.com/docs/what-is-tailwind)'s utility classes are paired with [Purgecss](https://www.purgecss.com) to ensure a minimal CSS footprint.

[postcss-preset-env](https://preset-env.cssdb.org/features) enables you to write CSS from upcoming standards, polyfilled based on your browserslist configuration.

[postcss-import](https://github.com/postcss/postcss-import) ensures Tailwind's imports play nice with PostCSS, and gives you the option to @import css files.

## Install

```bash
vue add @ky-is/tailwind
```

Requires node 6 or later. 

## Usage

You can use global Tailwind classes as normal, but `shadowLookup` is also supported for `@apply` mixins directly in `.vue` modules.

In `src/components/HelloWorld.vue` of the auto-generated cli app:
```html
<style lang="postcss" scoped>
.hello {
  @apply text-purple flex;
}
</style>
```

Applies a purple text color with scoped, browser-prefixed CSS, while PurgeCSS strips all other unused colors (and classes) from the Tailwind defaults, ensuring a minimal CSS footprint.

## Thanks

https://github.com/primos63/vue-cli-plugin-tailwindcss
https://github.com/ti-pa-to/vue-cli-plugin-tailwind-purge-css
