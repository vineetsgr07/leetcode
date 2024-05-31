function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false;

    const store1 = new Map<string, number>();
    const store2 = new Map<string, number>();

    for (const char of word1) {
        store1.set(char, (store1.get(char) ?? 0) + 1);
    }

    for (const char of word2) {
        store2.set(char, (store2.get(char) ?? 0) + 1);
    }

    const uniqueChars1 = new Set(store1.keys());
    const uniqueChars2 = new Set(store2.keys());

    if (uniqueChars1.size !== uniqueChars2.size) return false;

    for (const char of uniqueChars1) {
        if (!uniqueChars2.has(char)) return false;
    }

    const values1 = Array.from(store1.values()).sort((a, b) => a - b);
    const values2 = Array.from(store2.values()).sort((a, b) => a - b);

    return values1.join(",") === values2.join(",");
}
