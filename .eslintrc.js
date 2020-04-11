module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended", // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    "plugin:@typescript-eslint/eslint-recommended", // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    "plugin:@typescript-eslint/recommended", // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin

    "plugin:vue/recommended",  // https://github.com/vuejs/eslint-plugin-vue
    '@nuxtjs/eslint-config-typescript', // https://github.com/nuxt/eslint-config/blob/master/packages/eslint-config-typescript
    'plugin:nuxt/recommended',  // https://github.com/nuxt/eslint-plugin-nuxt

    'plugin:prettier/recommended', // https://github.com/prettier/eslint-plugin-prettier
    "prettier/@typescript-eslint",
    'prettier/vue',  // https://github.com/vuejs/eslint-plugin-vue
  ],
  'plugins': [
    '@typescript-eslint',
    'vue',
    'nuxt',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'nuxt/no-cjs-in-config': 'off'
  }
}
