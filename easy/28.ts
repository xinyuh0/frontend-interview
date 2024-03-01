function strStr(haystack: string, needle: string): number {
    let len = needle.length;

    let pos = 0;
    let found = false;
    while (pos + len <= haystack.length) {
        if (haystack.substring(pos, pos + len) === needle) {
            found = true;
            break;
        }

        pos++;
    }

    if (found) {
        return pos;
    }

    return -1;
};

console.log(strStr("leetcode", "leeto"));