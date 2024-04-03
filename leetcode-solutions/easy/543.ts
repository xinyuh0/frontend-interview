import { TreeNode } from "../../ds/binary-tree/binary-tree";

function diameterOfBinaryTree(root: TreeNode | null): number {
  let ans = 0;

  const computeHeight = (node: TreeNode | null): number => {
    if (node === null) {
      return 0;
    }

    const LHeight = computeHeight(node.left);
    const RHeight = computeHeight(node.right);

    const height = Math.max(LHeight, RHeight) + 1;
    ans = Math.max(ans, LHeight + RHeight);

    return height;
  };

  computeHeight(root);

  return ans;
}
