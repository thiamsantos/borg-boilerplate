import test from 'ava'
import browserEnv from 'browser-env'

browserEnv(['window', 'document', 'navigator'])

test('Insert to DOM', t => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  t.is(document.querySelector('div'), div)
})
