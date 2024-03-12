class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function kthSmallest(root: TreeNode, k: number): number {
    let tmp: number[] = [];


    function midorderTraversal(node: TreeNode | null) {
        if (node === null) return;

        midorderTraversal(node.left);
        tmp.push(node.val);
        midorderTraversal(node.right);
    }

    midorderTraversal(root.left);
    tmp.push(root.val);
    midorderTraversal(root.right);

    return tmp[k - 1];
}; 