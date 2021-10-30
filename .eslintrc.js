module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        "plugin:vue/vue3-recommended",
    ],
    rules: {
        "vue/no-unused-vars": "error",
        "semi": ["error", "always"],
        "indent": ["error", 4],
        "quotes": ["error", "double"]
    }
};

