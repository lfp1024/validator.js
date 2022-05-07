function isLength(str, options) {
  let min;
  let max;
  if (typeof (options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else { // backwards compatibility: isLength(str, min [, max])
    min = arguments[1] || 0;
    max = arguments[2];
  }
  const strLen = str.length
  console.log('strLen: ', strLen)
  const surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  console.log('surrogatePairs: ', surrogatePairs);
  const len = strLen - surrogatePairs.length;
  console.log('len: ', len);
  return len >= min && (typeof max === 'undefined' || len <= max);
}


let str = '我a是b💩'
const res = isLength(str, 2, 6)
console.log('res: ', res);