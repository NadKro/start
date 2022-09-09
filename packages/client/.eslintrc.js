module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'editorconfig',
    'import',
    'import-newlines',
    'jsx-a11y',
    'newline-destructuring',
    'promise',
    'react',
    'simple-import-sort',
    'sonarjs',
    'unused-imports'
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    '@typescript-eslint/brace-style': ['error', '1tbs', { 'allowSingleLine': false }],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/func-call-spacing': ['error'],
    '@typescript-eslint/keyword-spacing': ["error", {
      before: true,
      after: true
    }],
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_' }],
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    'array-bracket-newline': ['error', { multiline: true, minItems: 3 }],
    'array-bracket-spacing': 'error',
    'array-element-newline': ['error', {
      'ArrayExpression': {
        'multiline': true,
        'minItems': 3
      },
      'ArrayPattern': { 'minItems': 3 },
    }],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': 'error',
    'block-spacing': ['error', 'always'],
    'brace-style': 'off',
    'camelcase': 'error',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
    }],
    'consistent-return': 'error',
    'curly': ['error'],
    'default-case': 'error',
    'eqeqeq': 'error',
    'function-call-argument-newline': ['error', 'consistent'],
    'func-call-spacing': 'off',
    'import/no-commonjs': 'error',
    'import/no-default-export': 'error',
    'import-newlines/enforce': ['error', { items: 1 }],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': 'off',
    'linebreak-style': 0,
    'max-depth': ['error', 2],
    'max-len': ['error', { 'code': 160, ignoreStrings: true, ignoreUrls: true, ignoreComments: true }],
    'max-lines': ['error', {
      max: 500,
      skipBlankLines: true,
      skipComments: true
    }],
    'max-lines-per-function': ['error', {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    }],
    'newline-destructuring/newline': ['error', { items: 3, maxLength: 60 }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
    'no-console': 'error',
    'no-extra-parens': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-multi-spaces': 'error',
    'no-param-reassign': ['error', { 'props': true }],
    'no-return-await': 'error',
    'no-shadow': 'off',
    'no-spaced-func': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { multiline: true },
        ObjectPattern: { multiline: true },
        ImportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      },
    ],
    'object-property-newline': 'error',
    'operator-linebreak': ['error', 'before', { 'overrides': { '=': 'after' } }],
    'promise/avoid-new': 'error',
    'promise/prefer-await-to-callbacks': 'error',
    'promise/prefer-await-to-then': 'error',
    'react/display-name': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-render-return-value': 'error',
    'react/no-string-refs': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-exact-props': 'error',
    'react/prefer-read-only-props': 'error',
    'react/prefer-stateless-function': 'error',
    'react/require-render-return': 'error',
    'quote-props': ['error', 'as-needed'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sonarjs/cognitive-complexity': ['error', 9],
    'space-before-blocks': 'error',
    'space-before-function-paren': 'off',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
    }],
    'switch-colon-spacing': ['error', { after: true, before: false }],
    'unused-imports/no-unused-imports': 'error',
  },
  settings: {
    react: {
      version: '999.99.99'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:editorconfig/noconflict',
    'plugin:jsx-a11y/strict',
  ]
}
