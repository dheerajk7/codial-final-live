const { func } = require('prop-types');

export function getFormBody(params) {
  let formBody = {};
  for (let property in params) {
    let encodedKey = encodeURIComponent(property); //user name => user%20name      these will remove space and replace them with some other character and make them one
    let encodedValue = encodeURIComponent(params[property]); //aakash 123 => aakash%20123    //this also do the same thing
    formBody.push(`${encodedKey}=${encodedValue}`);
  }
  return formBody.join('&');
}
