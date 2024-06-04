function compress(chars: string[]): number {
    let writeIndex = 0;
    let i = 0;

    while (i < chars.length) {
        let char = chars[i];
        let count = 0;

        while (i < chars.length && chars[i] === char) {
            i++;
            count++;
        }

        chars[writeIndex++] = char;

        if (count > 1) {
            for (let c of count.toString()) {
                chars[writeIndex++] = c;
            }
        }
    }

    return writeIndex;
}