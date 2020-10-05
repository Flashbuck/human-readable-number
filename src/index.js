module.exports = function toReadable(number) {
    const numberToString = {
        0: 'zero',
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
        hundred: 'hundred',
    }
    if (number <= 20) {
        return numberToString[number];
    } else if (number > 20 && number < 100) {
        let fNum = Math.trunc(number / 10) * 10,
            sNum = number % 10;
        if (sNum === 0) {
            return `${numberToString[fNum]}`;
        }
        return `${numberToString[fNum]} ${numberToString[sNum]}`;
    } else if (number >= 100 && number < 1000) {
        let fNum = Math.trunc(number / 100),
            sNum = numberToString[number % 100] ? numberToString[number % 100] : Math.trunc(number % 100 / 10) * 10,
            tNum = numberToString[number % 100] ? '' : number % 10;
        if (sNum === 'zero') {
            return `${numberToString[fNum]} hundred`;
        }
        if (tNum === '') {
            return `${numberToString[fNum]} hundred ${numberToString[number%100]}`;
        }
        return `${numberToString[fNum]} hundred ${numberToString[sNum]} ${numberToString[tNum]}`;
    }
}
