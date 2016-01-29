# [is-backslash][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Checks given value is backslash - support char code number, hex, unicode or string value to be given.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i is-backslash --save
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
const isBackslash = require('is-backslash')
```

### [isBackslash](./index.js#L51)
> Check value is strictly backslash or backslash-like.

- `[val]` **{String|Number}** value to check   
- `[opts]` **{Object}** only `opts.strict` option, default `false`    
- `returns` **{Boolean}**  

**Example**

```js
const isBackslash = require('is-backslash')

// returns true (default mode, opts.strict !== true)
console.log(isBackslash(92, {strict: 123})) // => true
console.log(isBackslash(92))                // => true
console.log(isBackslash('92'))              // => true
console.log(isBackslash('\\'))              // => true
console.log(isBackslash('\u005C'))          // => true
console.log(isBackslash('\u005c'))          // => true
console.log(isBackslash('\x5c'))            // => true
console.log(isBackslash('&#92;'))           // => true

// strict mode - need explicitly define `opts.strict: true`
console.log(isBackslash(92, {strict: true}))        // => false
console.log(isBackslash('92', {strict: true}))      // => false
console.log(isBackslash('\\', {strict: true}))      // => true
console.log(isBackslash('\u005C', {strict: true}))  // => true
console.log(isBackslash('\u005c', {strict: true}))  // => true
console.log(isBackslash('\x5c', {strict: true}))    // => true

console.log(isBackslash('&#92;', {strict: 123}))    // => true
console.log(isBackslash('&#92;', {strict: true}))   // => false
console.log(isBackslash(['foo', 'bar']))            // => false
console.log(isBackslash({a: 'b'}))                  // => false
console.log(isBackslash())                          // => false
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-backslash/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/is-backslash
[npmjs-img]: https://img.shields.io/npm/v/is-backslash.svg?label=is-backslash

[license-url]: https://github.com/tunnckoCore/is-backslash/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/is-backslash
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/is-backslash.svg

[travis-url]: https://travis-ci.org/tunnckoCore/is-backslash
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-backslash.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/is-backslash
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/is-backslash.svg

[david-url]: https://david-dm.org/tunnckoCore/is-backslash
[david-img]: https://img.shields.io/david/tunnckoCore/is-backslash.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg