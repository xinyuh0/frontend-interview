import { TreeNode } from "../ds/binary-tree/binary-tree";

function maxSumBST(root: TreeNode | null): number {
    if (root === null) return 0;

    const idxToSum: Map<number, number> = new Map<number, number>();
    const idxToIsValid: Map<number, boolean> = new Map<number, boolean>();
    const idxToMax: Map<number, number> = new Map<number, number>();
    const idxToMin: Map<number, number> = new Map<number, number>();
    let maxSum = 0;

    const postOrder = (node: TreeNode | null, idx: number) => {
        if (node === null) return;

        const lchildIdx = idx * 2, rchildIdx = idx * 2 + 1;
        postOrder(node.left, lchildIdx);
        postOrder(node.right, rchildIdx);

        let isValid = true;
        const lValid = idxToIsValid.get(lchildIdx), rValid = idxToIsValid.get(rchildIdx);
        const maxValOfLeft = idxToMax.get(lchildIdx), minValueOfRight = idxToMin.get(rchildIdx);

        // @ts-ignore
        if (node.left !== null && (node.left.val >= node.val || !lValid || maxValOfLeft >= node.val)) isValid = false;
        // @ts-ignore
        if (node.right !== null && (node.right.val <= node.val || !rValid || minValueOfRight <= node.val)) isValid = false;

        idxToIsValid.set(idx, isValid);

        // not valid subtree
        if (!isValid) return;

        if (node.right !== null) {
            // @ts-ignore
            idxToMax.set(idx, idxToMax.get(rchildIdx));
        } else {
            idxToMax.set(idx, node.val);
        }

        if (node.left !== null) {
            // @ts-ignore
            idxToMin.set(idx, idxToMin.get(lchildIdx));
        } else {
            idxToMin.set(idx, node.val);
        }

        const lSum = idxToSum.get(lchildIdx) !== undefined ? idxToSum.get(lchildIdx) : 0;
        const rSum = idxToSum.get(rchildIdx) !== undefined ? idxToSum.get(rchildIdx) : 0;
        // @ts-ignore
        const sum = node.val + lSum + rSum;

        idxToSum.set(idx, sum);

        maxSum = Math.max(maxSum, sum);
    }

    postOrder(root, 1);

    return maxSum;
};