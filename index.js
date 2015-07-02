'use strict'

var dot = require('dot-prop')
var isObjectLike = require('is-object-like')

exports.get = function get (object, path) {
  if (!path) return object
  if (!isObjectLike(object)) return undefined
  return dot.get(object, path)
}
