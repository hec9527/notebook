/**
 * 一个字符串只包含 [ ] ( ) { } 这几种
 *  - 左括号必须使用相同类型的又括号闭合
 *  - 左括号必须以正确的顺序闭合
 */

/**
 * @param {string} str
 * @returns {boolean}
 */
function matchBracket(str) {
  if (str.length === 0) return true;
  const left = ['[', '(', '{'];
  const right = [']', ')', '}'];
  const arr = [];

  return str.split('').every(c => {
    if (left.includes(c)) {
      return arr.push(c);
    } else if (right.includes(c)) {
      return left.indexOf(arr.pop()) === right.indexOf(c);
    }
    throw new Error(`unexpected char ${c}, expected: [ ] ( ) { }`);
  });
}

console.log('"" should be true', matchBracket(''));
console.log('() should be true', matchBracket('()'));
console.log('()[]{} should be true', matchBracket('()[]{}'));
console.log('[} should be false', matchBracket('[}'));
console.log('([)} should be false', matchBracket('([)}'));
console.log('{[]} should be true', matchBracket('{[]}'));
console.log('{}()1 should throw error', matchBracket('{}()1'));
