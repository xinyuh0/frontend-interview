// 2024.3.25 19:35 ~ 20:55
// 80 min

import { TreeNode } from "../../ds/binary-tree/binary-tree";
import { ListNode } from "../ds";

function sortedListToBST(head: ListNode | null): TreeNode | null {
  if (head === null) return null;

  // Initialization
  const nodes: ListNode[] = [];
  let p: ListNode | null = head as ListNode;
  while (p) {
    nodes.push(p);
    p = p.next;
  }

  const merge = (l: TreeNode, r: TreeNode): TreeNode => {
    if (l.right === null) {
      l.right = r;
      return l;
    }

    let p = l;
    while (p.right?.right) {
      p = p.right;
    }

    const newRoot = p.right as TreeNode;
    newRoot.right = r;
    newRoot.left = l;
    p.right = null;

    return newRoot;
  };

  // build tree using node in range [l, r]
  const solve = (l: number, r: number): TreeNode => {
    if (l === r) {
      return new TreeNode(nodes[l].val);
    }

    const mid = Math.floor((l + r) / 2);

    if ((l + r) % 2 === 0) {
      const root = new TreeNode(nodes[mid].val);
      root.right = solve(mid + 1, r);
      root.left = solve(l, mid - 1);
      return root;
    } else {
      return merge(solve(l, mid), solve(mid + 1, r));
    }
  };

  return solve(0, nodes.length - 1);
}
