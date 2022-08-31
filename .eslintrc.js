module.exports = {
  "extends": [
    "plugin:vue/vue3-essential",
    "prettier",
  ],
  "rules": {
      // enable additional rules
      "indent": ["error", 4],
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],

      // override default options for rules from base configurations
      "comma-dangle": ["error", "always"],
      "no-cond-assign": ["error", "always"],

      // disable rules from base configurations
      "no-console": "off",
      // 禁止出现未使用过的变量
      "no-unused-vars": "error"
  }
}