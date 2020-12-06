/*
  valid parentheses 有效括号

  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
  有效字符串需满足：
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    注意空字符串可被认为是有效字符串。
 */
//遇到')'最近的需要是'('才行,不能是'{''['
//这种思想符合栈的思想,先进后出,遇到对应的闭合括号,找栈顶的元素
//看是不是对应的其实括号

//如果一个东西具有所谓的最近相关性的话,它就会用栈来解决
//最近相关性就类似于洋葱
//先来后到的话就用queue
//这里的括号就类似于洋葱型的结构,最外层的括号最内层的括号
//再内层的括号,一层一层剖,你每次剖的时候要注意,外表皮应该是一致
//的括号
//左小括号对右小括号
function isValid(s) {
  let stack = []
  let obj = { ')': '(', ']': '[', '}': '{' }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i])
    } else if (s[i] !== ' ') {
      if (obj[s[i]] !== stack.pop()) {
        return false
      }
    }
  }
  if (stack.length === 0) return true
  else return false
}
function isValid2(s) {
  let stack = []
  //let obj = { '(': ')', '[': ']', '{': '}' }
  let obj = new Map()
  obj.set('(', ')')
  obj.set('[', ']')
  obj.set('{', '}')
  for (let i = 0; i < s.length; i++) {
    if (obj.get(s[i])) stack.push(obj.get(s[i]))
    else if (stack.length === 0 || stack.pop() !== s[i]) {
      return false
    }
  }
  return !(stack.length)
}
module.exports.isValid = isValid
module.exports.isValid2 = isValid2