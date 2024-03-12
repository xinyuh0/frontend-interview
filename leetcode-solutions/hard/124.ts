import { TreeNode } from "../ds/binary-tree/binary-tree";

function maxPathSum(root: TreeNode | null): number {
    if (root === null) return 0;

    // build the longest path from leaf to root

    let max = Number.MIN_SAFE_INTEGER;

    const postOrder = (node: TreeNode | null) => {
        if (node === null) return;

        if (node.left !== null) {
            postOrder(node.left);
        }

        if (node.right !== null) {
            postOrder(node.right);
        }

        const leftVal = node.left === null ? 0 : node.left.val;
        const rightVal = node.right === null ? 0 : node.right.val;

        const _val = node.val;
        node.val = Math.max(leftVal, rightVal, 0) + node.val;

        const maxValPassNode = Math.max(node.val, _val + leftVal + rightVal);
        max = Math.max(maxValPassNode, max);
    }

    postOrder(root);
    return max;
};