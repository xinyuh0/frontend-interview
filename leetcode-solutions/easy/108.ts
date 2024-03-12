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

// 递归重建二叉树，对每个subtree而言，都以中间元素为root

function sortedArrayToBST(nums: number[]): TreeNode | null {

    // range from [start, end)
    function DFS(start: number, end: number): TreeNode | null {
        if (start >= end) return null;

        let mid = Math.floor((start + end) / 2);
        let root = new TreeNode(nums[mid]);
        root.left = DFS(start, mid);
        root.right = DFS(mid + 1, end);

        return root;
    }

    return DFS(0, nums.length);
};