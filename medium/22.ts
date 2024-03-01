function generateParenthesis(n: number): string[] {
    function getSr(sr: string, c: string): string {
        if (c === "(") return sr + "(";
        else {
            if (sr.length === 0) return ")";

            if (sr[sr.length - 1] === "(") return sr.substring(0, sr.length - 1);
            return sr + ")";
        }
    }


    function dfs(l: number, r: number, s: string, sr: string): void {
        if (l === 0 && r === 0) {
            if (sr === "") res.push(s);
            return;
        }

        if (l === 0) {
            // right remains
            dfs(l, r - 1, s + ")", getSr(sr, ")"));
            return;
        }

        if (r === 0) {
            // left remains, do nothing
            return;
        }

        // l !== 0 and r !== 0
        const lUsed = n - l, rUsed = n - r;

        dfs(l - 1, r, s + "(", getSr(sr, "("));
        // ((() -> can add ")"
        // ((())) -> can't add ")"
        if (rUsed < lUsed) {
            dfs(l, r - 1, s + ")", getSr(sr, ")"));
        }
    }

    let res: string[] = [];
    dfs(n, n, "", "");
    // console.log(res);
    return res;
};

generateParenthesis(3);