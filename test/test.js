/* global describe, it */
'use strict'

const expect = require('chai').expect
const removePalindromes = require('../index')

describe('#removePalindromes()', () => {
  it('should return an empty array when an empty array is provided', () => {
    const arr = []
    const removedIndexes = removePalindromes(arr)
    const expectedRemovedIndexes = []
    const expectedArr = []
    expect(JSON.stringify(removedIndexes)).to.equal(JSON.stringify(expectedRemovedIndexes))
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
  })

  it('should not remove anything when no palindromes are present', () => {
    const arr = [
      '12345',
      'abcdef',
      '!@#$%'
    ]
    const removedIndexes = removePalindromes(arr)
    const expectedRemovedIndexes = []
    const expectedArr = [
      '12345',
      'abcdef',
      '!@#$%'
    ]
    expect(JSON.stringify(removedIndexes)).to.equal(JSON.stringify(expectedRemovedIndexes))
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
  })

  it('should remove classic palindromes', () => {
    const arr = [
      '12321',
      'abcdef',
      '1221',
      'aaaaa'
    ]
    const removedIndexes = removePalindromes(arr)
    const expectedRemovedIndexes = [0, 2, 3]
    const expectedArr = [
      'abcdef'
    ]
    expect(JSON.stringify(removedIndexes)).to.equal(JSON.stringify(expectedRemovedIndexes))
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
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
    const groupBy = 3
    const removedIndexes = removePalindromes(arr, groupBy)
    const expectedRemovedIndexes = [0, 4, 5, 7]
    const expectedArr = [
      '123bbb321',
      '12321',
      '12345',
      'abcdef'
    ]
    expect(JSON.stringify(removedIndexes)).to.equal(JSON.stringify(expectedRemovedIndexes))
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
  })

  it('should work with the pivotMustBePalindromic flag', () => {
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
    const expectedRemovedIndexes = [4, 5, 7]
    const expectedArr = [
      'aaabbb12bbbaaa',
      '123bbb321',
      '12321',
      '12345',
      'abcdef'
    ]
    expect(JSON.stringify(removedIndexes)).to.equal(JSON.stringify(expectedRemovedIndexes))
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
  })

  it('should work with the remove flag', () => {
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
    const expectedRemovedIndexes = [4, 5, 7]
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
    expect(JSON.stringify(removedIndexes)).to.equal(JSON.stringify(expectedRemovedIndexes))
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
  })
})
