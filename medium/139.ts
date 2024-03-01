function wordBreak(s: string, wordDict: string[]): boolean {

    wordDict.sort((a, b) => b.length - a.length);

    function DFS(str: string): boolean {
        console.log(str);

        if (str.length === 0) return true;

        let res = false;
        // matched start
        let start: number[] = [];
        // matched end
        let end: number[] = [];

        for (let i = 0; i < wordDict.length; i++) {
            let word = wordDict[i];
            let len = word.length;

            if (str.length < len) continue;

            if (str.substring(0, len) === word) {
                start.push(len);
            }

            if (str.substring(str.length - len, str.length) === word) {
                end.push(len);
            }
        }

        if (start.length === 0 || end.length === 0) return false;

        start = [...new Set(start)];
        end = [...new Set(end)];


        for (let i = 0; i < start.length && res !== true; i++) {
            let s = start[i];
            for (let j = 0; j < end.length && res !== true; j++) {
                let e = end[j];

                if (s === e) {
                    if (s === str.length) {
                        res = true;
                    }
                }

                if (s + e <= str.length) {
                    res = res || DFS(str.substring(s, str.length - e));
                }
            }
        }

        return res;
    }

    return DFS(s);
}

// wordBreak(
//     "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
//     ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"])

// console.log(wordBreak("applepenapple", ["apple", "pen"]));
// console.log(
//     wordBreak("aebbbbs", ["a", "aeb", "ebbbb", "s", "eb"]));