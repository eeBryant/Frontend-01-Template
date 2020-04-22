/**
 *  写一个正则表达式 匹配所有 Number 直接量
 */
const reg = /^[-\+]?(\.\d+|(0|[1-9]\d*)\.?\d*?)([eE][-\+]?d+)?$|^0[bB][01]+$|^0[oO][0-7]+$|^0[xX][0-9a-fA-F]+$/;

/**
 *  写一个 UTF-8 Encoding 的函数
 */
function UTF8Encoding(s) {
  const code = encodeURIComponent(s);
  const bytes = [];
  for (let i of code) {
    const c = code.charAt(i);
    if (c === "%") {
      const hex = code.charAt(i + 1) + code.charAt(i + 2);
      const hexVal = parseInt(hex, 16);
      bytes.push(hexVal);
      i += 2;
    } else bytes.push(c.charCodeAt(0));
  }
  return bytes;
}

/**
 *  写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
 */
const reg = /^['"\\bfnrtv/dxu]$|^u[0-9a-fA-F]{4}$|^u(10|0?[0-9a-fA-F])[0-9a-fA-F]{0,4}$/;
