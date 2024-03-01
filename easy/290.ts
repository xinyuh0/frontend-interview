function wordPattern(pattern: string, s: string): boolean {
    const sArray = s.split(' ');
    const patternToSMap = new Map<string, string>();
    const sToPatternMap = new Map<string, string>();

    if (sArray.length !== pattern.length) return false;

    let match = true;
    for (let i = 0; i < pattern.length; i++) {
        const p = pattern.charAt(i);
        const word = sArray[i];

        // If a pair is first time occur
        if (!patternToSMap.has(p) && !sToPatternMap.has(word)) {
            patternToSMap.set(p, word);
            sToPatternMap.set(word, p);
        }
        // 'p' or 'word' have already occurred
        else {
            if (patternToSMap.get(p) === word && sToPatternMap.get(word) === p) {
                continue;
            } else {
                match = false;
                break;
            }
        }
    }

    return match;
};
