import eslintjs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import nextPlugin from "@next/eslint-plugin-next";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals"; // 追加

export default [
  // 1. 除外設定を強化
  {
    ignores: [
      ".next/*",
      "node_modules/*",
      "next-env.d.ts",
      "public/sw.js", // 追加: 自動生成されたService Workerを除外
      "public/workbox-*.js",
      "dist/*",
    ],
  },

  // 2. 基本設定
  eslintjs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,

  // 3. JS設定ファイル用の設定（module.exports 等を許可）
  {
    files: ["*.config.js", "*.config.mjs"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // 4. メインのルール設定
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": eslintPluginReactHooks,
      "@next/next": nextPlugin,
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },

  // 5. JS設定ファイルのprettierルールを無効化（セクション4より後に記述して上書き）
  {
    files: ["*.config.js"],
    rules: {
      "prettier/prettier": "off",
    },
  },
];