import { TreeNode } from "../../ds/binary-tree/binary-tree";

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  // Search for p and q
  const dfs = (
    node: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
  ): TreeNode | null => {
    if (node === null) {
      return null;
    }

    // p or q is found
    if (node.val === p?.val || node.val === q?.val) {
      return node;
    }

    let l = dfs(node.left, p, q);
    let r = dfs(node.right, p, q);

    // p and q are in each child of node,
    // happen only when node is the nearest ancestor
    if (l !== null && r !== null) {
      return node;
    }

    // p and q don't exist in current subtree
    if (l === null && r === null) {
      return null;
    }

    return l ?? r;
  };

  return dfs(root, p, q);
}
