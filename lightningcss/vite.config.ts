import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { variables } from './src/assets/variables';

const mixins: Record<string, any> = {};

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      customAtRules: {
        mixin: {
          prelude: '<custom-ident>',
          body: 'style-block',
        },
        apply: {
          prelude: '<custom-ident>',
        },
      },
      visitor: {
        // Function: {
          // toto() {
          //   return { raw: 'color: rgb(255, 0, 0)' };
          // }
        // },
        Token: {
          'at-keyword'(token: any) {
            return { raw: variables[`@${token.value}` as keyof typeof variables] };
          }
        },
        Rule: {
          custom: {
            mixin(rule: any) {
              mixins[rule.prelude.value] = rule.body.value;
              return [];
            },
            apply(rule: any) {
              return mixins[rule.prelude.value];
            },
          },
        },
      },
    },
  },
  plugins: [vue()],
});
