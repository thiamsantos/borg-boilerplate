import test from 'tape'
import foo from '../src/js/components/foo'

test('return twice of a number', t => {
  t.equal(foo(2), 4, 'it should accept positive numbers')
  t.equal(foo(-2), -4, 'it should accept negative numbers')
  t.equal(foo(0), 0, 'it should accept the zero number')

  t.end()
})
