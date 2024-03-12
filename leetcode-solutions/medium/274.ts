function hIndex(citations: number[]): number {
    citations.sort((a, b) => b - a);

    let h = 0;
    for (let i = 0; i < citations.length; i++) {
        if (i + 1 <= citations[i]) {
            h = i + 1;
        } else {
            break;
        }
    }

    return h;
};