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

import { TreeNode } from "../../ds/binary-tree/binary-tree";

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
  let maxDepth: number = 0;
  let ans: TreeNode | null = null;

  const dfs = (node: TreeNode | null, depth: number): number => {
    if (node === null) {
      maxDepth = Math.max(maxDepth, depth);
      return depth;
    }

    let lDepth = dfs(node.left, depth + 1);
    let rDepth = dfs(node.right, depth + 1);

    if (lDepth === maxDepth && rDepth === maxDepth) {
      ans = node;
    }

    return Math.max(lDepth, rDepth);
  };

  dfs(root, 0);

  return ans;
}
