import DefaultTheme from 'vitepress/theme'
import Button from '../../../src/button/src/button'
export default {
  ...DefaultTheme,
  enhanceApp({app}) {
    app.component(Button.name, Button)
  }
}