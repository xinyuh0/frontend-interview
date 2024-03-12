function combinationSum(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);

    let res: any[] = [];

    function DFS(depth: number, sum: number, prev: number[]) {
        let diff = target - sum;

        if (diff < 0) return;

        if (diff != 0 && diff < candidates[depth]) return;

        if ((depth === candidates.length - 1) && (diff % candidates[depth] === 0)) {
            res.push([...prev, ...new Array(diff / candidates[depth]).fill(candidates[depth])]);
        }

        let k = Math.floor(diff / candidates[depth]);

        for (let i = 0; i <= k; i++) {
            DFS(depth + 1, sum + i * candidates[depth], [...prev, ...new Array(i).fill(candidates[depth])]);
        }
    }

    // Initialization
    DFS(0, 0, []);

    return res;
};
