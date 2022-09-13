import DefaultTheme from 'vitepress/theme'
import Button from "../../../src/components/Button.tsx"

export default {
  ...DefaultTheme,
  enhanceApp({app}) {
    app.component('Test', Button)
  }
}