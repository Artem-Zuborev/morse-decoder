const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    expr = expr.match(/.{1,10}/g);
    console.log(expr)


    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === "**********") {
            expr[i] = [' '];
        } else {
            expr[i] = expr[i].match(/.{1,2}/g)
        }

        for (let j = 0; j < expr[i].length; j++) {
            if (expr[i][j] === '10') {
                expr[i][j] = '.';
            } else if (expr[i][j] === '11') {
                expr[i][j] = '-';
            } else {
                delete expr[i][j];
            }

        }

        expr[i] = expr[i].join('')
    }

    expr = expr.join(' ')


    expr = expr.split('  ').map(a => a.split(' ').map(b => MORSE_TABLE[b]).join('')).join(' ');
    return expr;
}

module.exports = {
    decode
}