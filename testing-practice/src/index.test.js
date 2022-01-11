const {capitalize, reverseString, add, substract, divide, multiply, caesarCipher} = require('./index.js');

test('capitalize string', () => {
    expect("Nizamettin").toMatch(capitalize("nizamettin"));
});

test('reverse string', () => {
    expect("nittemazin").toMatch(reverseString("nizamettin"));
});

test('add 2 and 3', () => {
    expect(5).toBe(add(2, 3));
});

test('substract 3 and 2', () => {
    expect(1).toBe(substract(3, 2));
});

test('divide 9 and 3', () => {
    expect(3).toBe(divide(9, 3));
});

test('multiply 2 and 3', () => {
    expect(6).toBe(multiply(2, 3));
});

test('caesar algorithm', () => {
    expect("cçd").toMatch(caesarCipher("abc"));
});