const readableNumber = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
};

function toReadable(number) {
    if (number === 0) {
        return 'zero';
    }
    let result = '';
    const hundreds = Math.floor(number / 100);
    if (hundreds) {
        result = `${readableNumber[hundreds]} hundred `;
    }
    const unit = number % 10;
    const dozens = Math.floor((number % 100) / 10) * 10;
    const doubleDigit = number % 100;
    if (readableNumber[doubleDigit]) {
        result += readableNumber[doubleDigit];
    } else if (unit && dozens) {
        result += `${readableNumber[dozens]} ${readableNumber[unit]}`;
    }

    return result.trim();
}

module.exports = toReadable;
