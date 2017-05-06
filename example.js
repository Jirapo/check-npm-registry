import request from './dist/request';
import check from './dist';
request('http://registry.npm.taobao.org/nowa')
  .then(function({ data }){
    console.log(data)
  });

check('http://registry.npm.taobao.org/').then(d => console.log(d));