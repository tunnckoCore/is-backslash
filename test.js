/*!
 * is-backslash <https://github.com/tunnckoCore/is-backslash>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var isBackslash = require('./index')

test('default mode (strict: false) or `opts.strict` not explicitly true', function (done) {
  test.strictEqual(isBackslash(92), true)
  test.strictEqual(isBackslash('92'), true)
  test.strictEqual(isBackslash('\\'), true)
  test.strictEqual(isBackslash('\u005C'), true)
  test.strictEqual(isBackslash('\u005c'), true)
  test.strictEqual(isBackslash('\x5c'), true)
  test.strictEqual(isBackslash('&#92;'), true)

  test.strictEqual(isBackslash(92, {strict: 123}), true)
  test.strictEqual(isBackslash('92', {strict: 123}), true)
  test.strictEqual(isBackslash('\\', {strict: 123}), true)
  test.strictEqual(isBackslash('\u005C', {strict: 123}), true)
  test.strictEqual(isBackslash('\u005c', {strict: 123}), true)
  test.strictEqual(isBackslash('\x5c', {strict: 123}), true)
  test.strictEqual(isBackslash('&#92;', {strict: 123}), true)
  done()
})

test('strict mode (strict: true)', function (done) {
  test.strictEqual(isBackslash(92, {strict: true}), false)
  test.strictEqual(isBackslash('92', {strict: true}), false)
  test.strictEqual(isBackslash('\\', {strict: true}), true)
  test.strictEqual(isBackslash('\u005C', {strict: true}), true)
  test.strictEqual(isBackslash('\u005c', {strict: true}), true)
  test.strictEqual(isBackslash('\x5c', {strict: true}), true)
  test.strictEqual(isBackslash('&#92;', {strict: true}), false)
  done()
})

test('return false if value not a string or number', function (done) {
  test.strictEqual(isBackslash(['foo', 'bar']), false)
  test.strictEqual(isBackslash({a: 'b'}), false)
  test.strictEqual(isBackslash(null), false)
  test.strictEqual(isBackslash(), false)
  done()
})
