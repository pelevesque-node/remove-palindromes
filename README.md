[![Build Status](https://travis-ci.org/pelevesque/remove-palindromes.svg?branch=master)](https://travis-ci.org/pelevesque/remove-palindromes)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/remove-palindromes/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/remove-palindromes?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# remove-palindromes

Removes and returns palindromes from an array.

## Node Repository

https://www.npmjs.com/package/@pelevesque/remove-palindromes

## Installation

`npm install @pelevesque/remove-palindromes`

## Tests

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Usage

### Parameters

```js
arr     (required)
options (optional) default = { groupBy: 1, pivotMustBePalindromic: false, remove: true }
```

### Requiring

```js
const removePalindromes = require('@pelevesque/remove-palindromes')
```

### Basic

```js
const arr = [
  '12321',
  'abcdef',
  '1221',
  'aaaaa'
]
const palindromes = removePalindromes(arr)
/*
arr = [
  'abcdef'
]
palindromes = [
  '12321',
  '1221',
  'aaaaa'
]
*/
```

### GroupBy Option

```js
const arr = [
  'aaabbb12bbbaaa',
  '123bbb321',
  '12321',
  '12345',
  '123bcdbcd123',
  '123ccc123',
  'abcdef',
  '123aaa343aaa123'
]
const opts = { groupBy: 3 }
const palindromes = removePalindromes(arr, opts)
/*
arr = [
  '123bbb321',
  '12321',
  '12345',
  'abcdef'
]
palindromes = [
  'aaabbb12bbbaaa',
  '123bcdbcd123',
  '123ccc123',
  '123aaa343aaa123'
]
*/
```

### PivotMustBePalindromic Option

```js
const arr = [
  'aaabbb12bbbaaa',
  '123bbb321',
  '12321',
  '12345',
  '123bcdbcd123',
  '123ccc123',
  'abcdef',
  '123aaa343aaa123'
]
const opts = { groupBy: 3, pivotMustBePalindromic: true }
const palindromes = removePalindromes(arr, opts)
/*
arr = [
  'aaabbb12bbbaaa',
  '123bbb321',
  '12321',
  '12345',
  'abcdef'
]
palindromes = [
  '123bcdbcd123',
  '123ccc123',
  '123aaa343aaa123'
]
*/
```

### Remove Option

With the remove option set to false, palindromes are still returned, but nothing is
removed from the original array.

```js
const arr = [
  'aaabbb12bbbaaa',
  '123bbb321',
  '12321',
  '12345',
  '123bcdbcd123',
  '123ccc123',
  'abcdef',
  '123aaa343aaa123'
]
const opts = { groupBy: 3, pivotMustBePalindromic: true, remove: false }
const palindromes = removePalindromes(arr, opts)
/*
arr = [
  'aaabbb12bbbaaa',
  '123bbb321',
  '12321',
  '12345',
  '123bcdbcd123',
  '123ccc123',
  'abcdef',
  '123aaa343aaa123'
]
palindromes = [
  '123bcdbcd123',
  '123ccc123',
  '123aaa343aaa123'
]
*/
```
