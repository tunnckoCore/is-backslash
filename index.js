/*!
 * is-backslash <https://github.com/tunnckoCore/is-backslash>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isObject = require('is-real-object')

/**
 * > Check value is strictly backslash or backslash-like.
 *
 * **Example**
 *
 * ```js
 * const isBackslash = require('is-backslash')
 *
 * // returns true (default mode, opts.strict !== true)
 * console.log(isBackslash(92, {strict: 123})) // => true
 * console.log(isBackslash(92))                // => true
 * console.log(isBackslash('92'))              // => true
 * console.log(isBackslash('\\'))              // => true
 * console.log(isBackslash('\u005C'))          // => true
 * console.log(isBackslash('\u005c'))          // => true
 * console.log(isBackslash('\x5c'))            // => true
 * console.log(isBackslash('&#92;'))           // => true
 *
 * // strict mode - need explicitly define `opts.strict: true`
 * console.log(isBackslash(92, {strict: true}))        // => false
 * console.log(isBackslash('92', {strict: true}))      // => false
 * console.log(isBackslash('\\', {strict: true}))      // => true
 * console.log(isBackslash('\u005C', {strict: true}))  // => true
 * console.log(isBackslash('\u005c', {strict: true}))  // => true
 * console.log(isBackslash('\x5c', {strict: true}))    // => true
 *
 * console.log(isBackslash('&#92;', {strict: 123}))    // => true
 * console.log(isBackslash('&#92;', {strict: true}))   // => false
 * console.log(isBackslash(['foo', 'bar']))            // => false
 * console.log(isBackslash({a: 'b'}))                  // => false
 * console.log(isBackslash())                          // => false
 * ```
 *
 * @name  isBackslash
 * @param  {String|Number} `[val]` value to check
 * @param  {Object} `[opts]` only `opts.strict` option, default `false`
 * @return {Boolean}
 * @api public
 */
module.exports = function isBackslash (val, opts) {
  opts = isObject(opts) ? opts : {strict: false}
  if (opts.strict === true) {
    return typeof val === 'string' && val.length === 1 && val.charCodeAt(0) === 92
  }
  if (typeof val === 'number') {
    return val === 92
  }
  if (typeof val === 'string') {
    return val === '&#92;' || val === '92' || (val.length === 1 && val.charCodeAt(0) === 92)
  }
  return false
}
