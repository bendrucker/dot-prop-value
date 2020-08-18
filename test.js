'use strict'

var test = require('tape')
var dot = require('./')

test('get', function (t) {
  t.equal(dot.get('foo'), 'foo')
  t.equal(dot.get('foo', ''), 'foo')
  t.notOk(dot.get('foo', 'bar'))
  t.equal(dot.get({ foo: 'bar' }, 'foo'), 'bar')
  t.end()
})

test('set', function (t) {
  t.equal(dot.set('foo', '', 'baz'), 'baz')
  t.deepEqual(dot.set('foo', 'bar', 'baz'), { bar: 'baz' })
  t.deepEqual(dot.set({}, 'foo', 'bar'), { foo: 'bar' })
  t.end()
})
