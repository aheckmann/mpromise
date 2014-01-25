/**
 * Module dependencies.
 */
var Promise = require('../lib/promise');
var aplus = require('promises-aplus-tests');


// Adapter
var adapter = {
  fulfilled: function (value) {
    var p = new Promise;
    p.fulfill(value);
    return p;
  },
  rejected: function (reason) {
    var p = new Promise;
    p.reject(reason);
    return p;
  },
  deferred: function () {
    var d = Promise.deferred();
    d.resolve = d.fulfill;
    return d;
  }
};


// tests
describe.only("run A+ suite", function () {
  this.timeout(3000);
  aplus.mocha(adapter);
});

