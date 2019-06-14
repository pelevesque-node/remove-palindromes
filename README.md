[![Build Status](https://travis-ci.org/pelevesque/remove-palindromes.svg?branch=master)](https://travis-ci.org/pelevesque/remove-palindromes)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/remove-palindromes/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/remove-palindromes?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# remove-palindromes

Removes palindromes from an array.

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
arr                    (required)
groupBy                (optional) default = 1
pivotMustBePalindromic (optional) default = false
remove                 (optional) default = true
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
const removedIndexes = removePalindromes(arr)
/*
removedIndexes === [0, 2, 3]
arr ===
  [
    'abcdef'
  ]
*/
```

### Using GroupBy

```js
// group elements by 3
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
const groupBy = 3
const removedIndexes = removePalindromes(arr, groupBy)
/*
removedIndexes === [0, 4, 5, 7]
arr ===
  [
    '123bbb321',
    '12321',
    '12345',
    'abcdef'
  ]
*/
```

### PivotMustBePalindromic Flag

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
const groupBy = 3
const pivotMustBePalindromic = true
const removedIndexes = removePalindromes(arr, groupBy, pivotMustBePalindromic)
/*
removedIndexes === [4, 5, 7]
arr ===
  [
    'aaabbb12bbbaaa',
    '123bbb321',
    '12321',
    '12345',
    'abcdef'
  ]
*/
```

### Remove Flag

With the remove flag on, removedIndexes are still returned, but nothing is
removed from the array.

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
const groupBy = 3
const pivotMustBePalindromic = true
const remove = false
const removedIndexes = removePalindromes(arr, groupBy, pivotMustBePalindromic, remove)
/*
removedIndexes === [4, 5, 7]
arr ===
  [
    'aaabbb12bbbaaa',
    '123bbb321',
    '12321',
    '12345',
    '123bcdbcd123',
    '123ccc123',
    'abcdef',
    '123aaa343aaa123'
  ]
*/
```
