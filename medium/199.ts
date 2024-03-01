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

// Return the rightmost node of each level of the tree. -> level-order traversal
function rightSideView(root: TreeNode | null): number[] {
    if (root === null) return [];

    let tmp = [root];
    let res: number[] = [];
    let n: number = 1; // number of node in current level

    while (tmp.length > 0) {
        res.push(tmp[tmp.length - 1].val);

        for (let i = 0; i < n; i++) {
            const currNode = tmp[i];

            if (currNode.left) tmp.push(currNode.left);

            if (currNode.right) tmp.push(currNode.right);
        }

        tmp.splice(0, n);
        n = tmp.length;
    }

    return res;
};