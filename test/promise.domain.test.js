var Promise = require('../')
  , Domain = require('domain')
  , assert = require('assert');

describe("domains", function () {
  it("exceptions should not breakout of domain bounderies", function (done) {
    var d = Domain.create();
    d.on('error', function (err) {
      assert.equal(err.message, 'gaga');
      done()
    });

    var p = new Promise();

    d.run(function () {
      p.then(function () {

      }).then(function () {
          throw new Error('gaga');
        }).end();
    });

    setImmediate(function () {
      p.fulfill();
    })
  });
});
