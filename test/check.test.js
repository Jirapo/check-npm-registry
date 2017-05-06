const check = require('../dist/index');
const assert = require('power-assert');

const testUrls = [
  'http://registry.npm.taobao.org',
  'http://registry.npmjs.org'
];

describe('test check registry', function() {

  it('receive none param, return default npm registry ', function(done){
    check()
      .then(function(res){
        console.log(res);
        assert.ok(testUrls.includes(res));
        done();
      });
  });

  it('receive a url string param, return the registry that in given list', function(done){
    const tl = 'http://registry.npm.taobao.org/';
    check(tl)
      .then(function(res){
        const s = new Set([...testUrls,tl]);
        assert.ok([...s].includes(res));
        done();
      });
  });

  it('receive a url array param, return the registry that in given list', function(done){
    const tl = ['http://registry.npm.taobao.org/', 'http://registry.npm.alibaba-inc.com'];
    check(tl)
      .then(function(res){
        const s = new Set([...testUrls,tl]);
        assert.ok([...s].includes(res));
        done();
      });
  });

});