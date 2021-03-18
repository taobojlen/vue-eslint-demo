// @vue/component
const MyComponent = {
  template: `<div class="one" class="two" />`,
  computed: {
    testFunction() {
      if (1 === 2) {
        return "abc"
      }
    }
  }
}
