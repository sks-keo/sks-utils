// @flow

export default function keyMirror(obj: Object) {
  var ret = {};
  var key;
  
  if ( !(obj instanceof Object && !Array.isArray(obj)) ){
    throw new Error('keyMirror(...): Argument must be an object.')
  }
  
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    ret[key] = obj[key] ? obj[key] : key;
  }
  
  return ret;
}
