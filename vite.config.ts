import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsxPlugin from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  plugins: [
    vue(),
    vueJsxPlugin(),
    Unocss({
      presets: [
        presetAttributify({ /* preset options */}),
        presetUno()
        // ...custom presets
      ],
      rules: [
        [/^m-(\d+)$/, ([, d]) => ({ margin: `${parseInt(d) / 4}rem` })],
        [/^p-(\d+)$/, match => ({ padding: `${parseInt(match[1]) / 4}rem` })]
      ]
    })
  ]
})
