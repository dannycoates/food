#!/usr/bin/env node
require('http').createServer(
  function (_, foo) {
    foo.end('foo\n')
  }
).listen(0xF00D)
