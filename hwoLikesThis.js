function likes(names) {
    // TODO
    let str = '';
    if (names.length === 0) str = "no one likes this";
    if (names.length === 1) str = `${names[0]} likes this`;
    if (names.length === 2) str = `${names[0]} and ${names[1]} like this`;
    if (names.length === 3) str = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    if (names.length > 3) str = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    return str;
}
