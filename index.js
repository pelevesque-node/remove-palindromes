'use strict'

const isPalindrome = require('@pelevesque/is-palindrome')

module.exports = (arr,
  { groupBy = 1, pivotMustBePalindromic = false, remove = true } = {}
) => {
  const indexesToRemove = []
  for (let i = 0, len = arr.length; i < len; i++) {
    if (isPalindrome(arr[i], groupBy, pivotMustBePalindromic)) {
      indexesToRemove.push(i)
    }
  }
  indexesToRemove.sort((a, b) => b - a) // sort descending
  const palindromes = []
  indexesToRemove.forEach(v => {
    palindromes.unshift(arr[v])
    if (remove) arr.splice(v, 1)
  })
  return palindromes
}
