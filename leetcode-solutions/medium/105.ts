// 2024.3.5 21:8 ~ 21:42
//  34min

import { TreeNode } from "../../ds/binary-tree/binary-tree";

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  // find index of node of value `val` in inorder array
  const find = (val: number, l: number, r: number): number => {
    for (let i = l; i <= r; i++) {
      if (val === inorder[i]) return i;
    }

    return -1;
  };

  // l1: start index of preorder, [l1, l1+len-1]
  // l2: start index of inorder, [l2, l2+len-1]
  const _build = (len: number, l1: number, l2: number): TreeNode | null => {
    if (len <= 0) return null;

    const root = new TreeNode(preorder[l1]);

    if (len === 1) {
      return root;
    }

    const idxOfRoot = find(root.val, l2, l2 + len - 1);
    const lLen = idxOfRoot - l2;
    const rLen = l2 + len - idxOfRoot - 1;
    // if (idxOfRoot !== -1) {
    //   console.log(
    //     "----------------------------------------------------------------"
    //   );
    //   console.log(len, l1, l2);
    //   console.log(idxOfRoot, inorder[idxOfRoot]);
    //   console.log(lLen, rLen);
    // }
    root.left = _build(lLen, l1 + 1, l2);
    root.right = _build(rLen, l1 + lLen + 1, idxOfRoot + 1);
    return root;
  };

  return _build(preorder.length, 0, 0);
}

// buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
