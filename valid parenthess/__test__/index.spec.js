test('valid parentheses(有效括号)', () => {
  const { isValid, isValid2 } = require('../solution')
  const ret1 = isValid('( ) ')
  const ret2 = isValid("()[]{}")
  const ret3 = isValid("(]")
  const ret4 = isValid('([)]')
  const ret5 = isValid('{[]}')

  const ret11 = isValid2('()')
  const ret22 = isValid2("()[]{}")
  const ret33 = isValid2("(]")
  const ret44 = isValid2('([)]')
  const ret55 = isValid2('{[]}')

  expect(ret1).toBe(true)
  expect(ret2).toBe(true)
  expect(ret3).toBe(false)
  expect(ret4).toBe(false)
  expect(ret5).toBe(true)

  expect(ret1).toBe(ret11)
  expect(ret2).toBe(ret22)
  expect(ret3).toBe(ret33)
  expect(ret4).toBe(ret44)
  expect(ret5).toBe(ret55)

})