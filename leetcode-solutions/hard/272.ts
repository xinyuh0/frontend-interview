import { TreeNode } from "../ds/binary-tree/binary-tree";

function closestKValues(root: TreeNode | null, target: number, k: number): number[] {
    if (root === null) return [];

    const tmp: number[][] = [];

    const midOrder = (node: TreeNode | null) => {
        if (node === null) return;

        midOrder(node.left);
        tmp.push([node.val, Math.abs(node.val - target)]);
        midOrder(node.right);
    }

    midOrder(root);
    if (tmp.length < k) return [];

    tmp.sort((a: number[], b: number[]) => a[1] - b[1]);
    return tmp.slice(0, k).map(a => a[0]);
};