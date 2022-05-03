function zeroAndOne(s) {
    let outStr = s;
    for (let i = 0; i < s.length; i++) {
        if (outStr[i] !== outStr[i + 1] &&
            outStr[i] !== '' &&
            outStr[i + 1] !== '') {
            if (outStr[i] === '1') {
                outStr = outStr.replace(/10/, ' ');
            }
            if (outStr[i] === '0') {
                outStr = outStr.replace(/01/, ' ');
            }
        }
    }
    outStr = outStr.replace(/\s/g, '');
    return outStr.length;
}
