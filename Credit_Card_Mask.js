function maskify(cc) {
    let maskStr = cc;
    if (cc.length > 4) {
        for (let i = 0; i < maskStr.length - 4; i++) {
            maskStr = maskStr.replace(`${maskStr[i]}`, '#');
        }
    }
    return maskStr;
}
