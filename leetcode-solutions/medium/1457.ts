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

function pseudoPalindromicPaths(root: TreeNode | null): number {
  // Can use bit manipulation to optimize the solution
  const freq = new Array(10).fill(0);

  const isPalindrome = () => {
    let odd = 0;
    for (let i = 0; i < 10; i++) {
      if (freq[i] % 2 === 1) {
        odd++;
      }
    }
    return odd <= 1;
  };

  let ans = 0;
  const dfs = (node: TreeNode | null) => {
    if (node === null) {
      return;
    }

    freq[node.val]++;

    if (node.left === null && node.right === null) {
      if (isPalindrome()) {
        ans++;
      }
    }

    dfs(node.left);
    dfs(node.right);
    freq[node.val]--;
  };

  dfs(root);

  return ans;
}
