export function rangeSum(start, end) {
    let result = 0;
    for (let i = start; i < end + 1; ++i) {
        if (i % 2 == 0) {
            result += i;
        }
    }
    return result;
}

export function iterationCount(a) {
    let result = a;
    let iteration = 0;
    while (result > 0.1) {
        result = result / 2;
        ++iteration;
    }
    return iteration;
}

export function symbolsReplace(message) {
    let chars = message.split('');
    let i = 2;

    do {
        if (i >= chars.length) break;

        chars[i] = '_';
        i += 3;
    } while (true);

    return chars.join('');
}