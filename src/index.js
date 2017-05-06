/*
* @Author: 10
* @Date:   2016-05-06
* @Last Modified by:   10
* @Last Modified time: 2017-05-06
*/

import request from './request';

const defaultRegistryList = ['http://registry.npm.taobao.org', 'http://registry.npmjs.org'];

const requestUrl = url => request(`${url}/nowa`).then(() => url);

const check = async function(registryList) {
  let tempList = [...defaultRegistryList];

  if (registryList) {
    tempList.concat(registryList);
  }

  const urls = new Set(tempList);

  const checkUrl = await Promise.race([...urls].map(requestUrl));

  return checkUrl;
};

module.exports = check;
