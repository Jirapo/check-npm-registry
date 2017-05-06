/*
* @Author: 10
* @Date:   2016-05-06
* @Last Modified by:   10
* @Last Modified time: 2017-05-06
*/

import fetch from 'node-fetch';

const request = async function(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return { data };
  } catch (e) {
    return { err: true, msg: e.message };
  }
};

module.exports = request;

// export default request;
