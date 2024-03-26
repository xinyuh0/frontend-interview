import { TreeNode } from "../../ds/binary-tree/binary-tree";

function preorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = [];

  const _preorder = (node: TreeNode | null) => {
    if (node === null) return;

    ans.push(node.val);
    _preorder(node.left);
    _preorder(node.right);
  };

  _preorder(root);

  return ans;
}
