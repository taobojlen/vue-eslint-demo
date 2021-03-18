# vue-eslint-demo


`component.js` and `component.vue` are two ways of writing the same Vue component, but
eslint-plugin-vue only picks up issues in the template of the single-file component.

```
~/dev/vue-eslint-demo ❯ yarn lint
yarn run v1.22.10
$ yarn eslint --ext js,vue src
$ /Users/tao/dev/vue-eslint-demo/node_modules/.bin/eslint --ext js,vue src

/Users/tao/dev/vue-eslint-demo/src/component.js
  5:17  error  Expected to return a value in "testFunction" computed property  vue/return-in-computed-property

/Users/tao/dev/vue-eslint-demo/src/component.vue
  2:20  error  Parsing error: duplicate-attribute                              vue/no-parsing-error
  2:20  error  Duplicate attribute 'class'                                     vue/no-duplicate-attributes
  8:17  error  Expected to return a value in "testFunction" computed property  vue/return-in-computed-property
```
