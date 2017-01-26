/**
 * 通用工具
 * author: machi
 */

export function API(url, type, data) {
  var p = new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    var type = (type && type.toLowerCase() == 'post') ? 'POST' : 'GET';
    
    xhr.open(type, url);
    xhr.onreadystatechange = () => {

      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var res = xhr.response;
          if (typeof res !== 'object') {
            res = JSON.parse(res);
          }

          resolve(xhr.response);
        } else {
          reject(new Error(xhr.statusText));
        }
      }
    }
    xhr.responseType = 'json';
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send((type === 'POST' ? data: null));
  });

  return p;
}