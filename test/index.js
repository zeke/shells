const test = require('tape')
const path = require('path')
const stat = require('fs').statSync
const shells = require('..')(path.join(__dirname, 'fixtures'))
const emptyShells = require('..')('nonexistent/path')

test('shells', function (t) {
  t.equal(shells.length, 4, 'finds zsh, bash, and fish files')
  t.ok(shells[0].file, 'sets file')
  t.ok(shells[0].type, 'sets type')
  t.ok(stat(shells[0].file).mtime > stat(shells[1].file).mtime,
    'sorts most recently modified shell profile first')
  t.equal(emptyShells.length, 0, 'returns an empty array if no shell configs are found')
  t.end()
})
