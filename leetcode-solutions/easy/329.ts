function isSubsequence(s: string, t: string): boolean {
    if (s === "") {
        return true;
    }

    let n = (s[0] === t[0] ? 1 : 0);
    let res = false;

    for (let i = 1; i < t.length; i++) {

        if (s[n] === t[i]) {
            n++;
        }
        if (n === s.length) {
            res = true;
            break;
        }
    }

    return res;
};