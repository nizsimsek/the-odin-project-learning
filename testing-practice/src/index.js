export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
    const strArr = [];
    for (let i = 0; i < string.length; i++) {
        strArr.push(string[i]);
    }
    return strArr.reverse().join('');
}

export function add(num1, num2) {
    return num1 + num2;
}

export function substract(num1, num2) {
    return num1 - num2;
}

export function divide(num1, num2) {
    return num1 / num2;
}

export function multiply(num1, num2) {
    return num1 * num2;
}

export function caesarCipher(string) {
    const defaultChars = "abcçdefgğhıijklmnoöprsştuüvyz";
    let text = ''

    for (let i = 0; i < string.length; i++) {
        const index = defaultChars.indexOf(string[i]);
        text += defaultChars[(index + 2) % 29];
    }
    return text;
}