class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

// Recurrsive Solution
function isSymmetric(root: TreeNode | null): boolean {
    // Judge whether two trees are symmetric.
    function judge(r1: TreeNode | null, r2: TreeNode | null): boolean {
        if (r1 === null && r2 === null) return true;

        if (r1 === null && r2 !== null) return false;

        if (r1 !== null && r2 === null) return false;

        // @ts-ignore
        if (r1.val !== r2.val) return false;

        // @ts-ignore
        const res1 = judge(r1.left, r2.right);
        // @ts-ignore
        const res2 = judge(r1.right, r2.left);

        return res1 && res2;
    }

    if (root === null) return true;

    return judge(root.left, root.right);
};

// Iterative Solution
// Level-order traversal, judge whether each level is symmetric. **Need to fill Null nodes**.