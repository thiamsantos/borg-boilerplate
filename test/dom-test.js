import test from 'tape'
import browserEnv from 'browser-env'

browserEnv(['window', 'document', 'navigator'])

test('Insert to DOM', t => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  t.equal(document.querySelector('div'), div)

  t.end()
})
