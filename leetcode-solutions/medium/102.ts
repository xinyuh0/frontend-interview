/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) return [];

    let tmp = [root];
    let len = 1;

    let res: number[][] = [];
    while (tmp.length > 0) {
        let level: number[] = [];

        for (let i = 0; i < len; i++) {
            level.push(tmp[i].val);

            // @ts-ignore
            if (tmp[i].left !== null) { tmp.push(tmp[i].left); }
            // @ts-ignore
            if (tmp[i].right !== null) { tmp.push(tmp[i].right); }
        }

        res.push(level);

        tmp.splice(0, len);

        len = tmp.length;
    }

    return res;
};