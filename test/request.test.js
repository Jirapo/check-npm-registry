const request = require('../dist/request');
const assert = require('power-assert');

describe('test request', function() {

  it('fetch correct url should return an object', function(done){
    request('http://registry.npm.taobao.org/nowa')
      .then(function(res){
        assert.ok(typeof res === 'object');
        done();
      });
  });

  it('fetch incorrect url should return error', function(done){
    request('http://registr.npm.taobao.org/nowa')
      .then(function({ err, msg }){
        console.log('errmsg', msg)
        assert.ok(err);
        done();
      });
  });



});