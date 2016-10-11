import test from 'ava'
import foo from '../src/js/components/foo'

test('return twice of a number', t => {
  t.is(foo(2), 4, 'it should accept positive numbers')
  t.is(foo(-2), -4, 'it should accept negative numbers')
  t.is(foo(0), 0, 'it should accept the zero number')
})
