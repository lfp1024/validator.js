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
  const surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  const len = strLen - surrogatePairs.length;
  return len >= min && (typeof max === 'undefined' || len <= max);
}


str = '我a是b💩'
const res = isLength(str, 2, 6)
console.log('res: ', res);