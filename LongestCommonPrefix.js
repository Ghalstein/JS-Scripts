/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = strs.pop();

  strs.forEach(str => {
    let i = 0;
    let temp = "";
    while (i < str.length) {
      if (str.charAt(i) === prefix.charAt(i) && prefix.length > i) {
        temp += str.charAt(i);
        ++i;
      } else break;
    }
    prefix = temp;
  });
  if (prefix == undefined) return "";
  return prefix;
};
