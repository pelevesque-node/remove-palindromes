/* global describe, it */
'use strict'

const expect = require('chai').expect
const removePalindromes = require('../index')

describe('#removePalindromes()', () => {
  it('should return an empty array when an empty array is provided', () => {
    const arr = []
    const palindromes = removePalindromes(arr)
    const expectedArr = []
    const expectedPalindromes = []
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
    expect(JSON.stringify(palindromes)).to.equal(JSON.stringify(expectedPalindromes))
  })

  it('should not remove anything when no palindromes are present', () => {
    const arr = [
      '12345',
      'abcdef',
      '!@#$%'
    ]
    const palindromes = removePalindromes(arr)
    const expectedArr = [
      '12345',
      'abcdef',
      '!@#$%'
    ]
    const expectedPalindromes = []
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
    expect(JSON.stringify(palindromes)).to.equal(JSON.stringify(expectedPalindromes))
  })

  it('should remove classic palindromes', () => {
    const arr = [
      '12321',
      'abcdef',
      '1221',
      'aaaaa'
    ]
    const palindromes = removePalindromes(arr)
    const expectedArr = [
      'abcdef'
    ]
    const expectedPalindromes = [
      '12321',
      '1221',
      'aaaaa'
    ]
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
    expect(JSON.stringify(palindromes)).to.equal(JSON.stringify(expectedPalindromes))
  })

  it('should remove palindromes with a groupBy other than 1', () => {
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
    const expectedArr = [
      '123bbb321',
      '12321',
      '12345',
      'abcdef'
    ]
    const expectedPalindromes = [
      'aaabbb12bbbaaa',
      '123bcdbcd123',
      '123ccc123',
      '123aaa343aaa123'
    ]
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
    expect(JSON.stringify(palindromes)).to.equal(JSON.stringify(expectedPalindromes))
  })

  it('should work with the pivotMustBePalindromic option', () => {
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
    const expectedArr = [
      'aaabbb12bbbaaa',
      '123bbb321',
      '12321',
      '12345',
      'abcdef'
    ]
    const expectedPalindromes = [
      '123bcdbcd123',
      '123ccc123',
      '123aaa343aaa123'
    ]
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
    expect(JSON.stringify(palindromes)).to.equal(JSON.stringify(expectedPalindromes))
  })

  it('should work with the remove option', () => {
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
    const expectedArr = [
      'aaabbb12bbbaaa',
      '123bbb321',
      '12321',
      '12345',
      '123bcdbcd123',
      '123ccc123',
      'abcdef',
      '123aaa343aaa123'
    ]
    const expectedPalindromes = [
      '123bcdbcd123',
      '123ccc123',
      '123aaa343aaa123'
    ]
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
    expect(JSON.stringify(palindromes)).to.equal(JSON.stringify(expectedPalindromes))
  })
})
