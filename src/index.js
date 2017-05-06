/*
* @Author: 10
* @Date:   2016-05-06
* @Last Modified by:   10
* @Last Modified time: 2017-05-06
*/

import request from './request';

const defaultRegistryList = ['http://registry.npm.taobao.org', 'http://registry.npmjs.org'];

const requestUrl = url => request(`${url}/nowa`).then(() => url);
const isUrl = str => /((\/\/)|^\.{0,2}\/).+/g.test(str);

const check = async function(registryList) {
  let tempList = [...defaultRegistryList];

  if (registryList) {
    if (typeof registryList === 'string' && isUrl(registryList)) {
      tempList.concat(registryList);
    } else if (registryList instanceof Array){
      tempList.concat(registryList.filter(u => isUrl(u)));
    }
  }

  const urls = new Set(tempList);

  const checkUrl = await Promise.race([...urls].map(requestUrl));

  return checkUrl;
};

module.exports = check;
