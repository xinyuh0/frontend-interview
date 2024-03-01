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

function getMinimumDifference(root: TreeNode): number {
    // For each node, find the maximum value of left subtree and minimum value of right subtree.

    let minDiff = Number.MAX_SAFE_INTEGER;

    function DFS(node: TreeNode) {
        let min: number | null = null;
        let max: number | null = null;

        if (node.left !== null) {
            let _ = DFS(node.left);

            min = _[0];

            // maximum value of left subtree
            if (_[1] !== null) {
                minDiff = Math.min(minDiff, Math.abs(_[1] - node.val));
            }
        } else {
            min = node.val;
        }

        if (node.right !== null) {
            let _ = DFS(node.right);

            max = _[1];

            // minimum value of right subtree
            if (_[0] !== null) {
                minDiff = Math.min(minDiff, Math.abs(_[0] - node.val));
            }
        } else {
            max = node.val;
        }



        console.log(min, max, node.val);
        return [min, max];
    }

    DFS(root);

    return minDiff;
};