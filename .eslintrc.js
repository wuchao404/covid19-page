module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx", ".tsx"]}],
        "no-console": "off",
        "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
        "react-hooks/exhaustive-deps": "warn", // 检查 effect 的依赖
        "react/prop-types": "off", // 我发现：ts的interface和props-types不能混合使用去限制同一个参数
        "react/default-props-match-prop-types": "off", // 我发现：ts的interface和props-types不能混合使用去限制同一个参数
        "react/jsx-props-no-spreading": "off", // 自定义组件中可以使用扩展操作符
        "no-undef": "warn",
        "react/display-name": "off"
    }
};