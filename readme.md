# dot-prop-value [![Build Status](https://travis-ci.org/bendrucker/dot-prop-value.svg?branch=master)](https://travis-ci.org/bendrucker/dot-prop-value) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/dot-prop-value.svg)](https://greenkeeper.io/)

> Use [dot-prop](https://github.com/sindresorhus/dot-prop) getters and setters on non-object values

## Install

```
$ npm install --save dot-prop-value
```

## Usage

```js
var dot = require('dot-prop-value')

dot.get('foo', '')
// => foo
dot.get('foo', 'bar')
// => undefined

dot.set('foo', 'bar', 'baz')
// => {bar: 'baz'}
```

## API

#### `dot.get(object, path)` -> `any`

##### object

*Required*  
Type: `any`

An object (or other value) from which to get deep properties. For non-objects, any non-empty path will return `undefined`.

##### path

Type: `string`  
Default: `''`

The dot syntax path to the desired property.

#### `dot.set(object, path, value)` -> `any`

Unlike the original `dotProp.set` method, this returns a value.

##### object

*Required*  
Type: `any`

An object (or other value) in which to set deep properties. If the value is a non-object and a non-empty path is provided, a new object will be created and returned with the deep property.

##### path

Type: `string`  
Default: `''`

The dot syntax path to the desired property.

##### value

Type: `any`

The deep value to set.

## License

MIT © [Ben Drucker](http://bendrucker.me)
