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


function buildTree(inorder: number[], postorder: number[]): TreeNode | null {

    function build(s1: number, s2: number, len: number): TreeNode | null {
        if (len === 0) return null;

        if (len === 1) return new TreeNode(inorder[s1]);

        let node = new TreeNode(postorder[s2 + len - 1]);
        let idx = inorder.findIndex(val => val === node.val);

        node.left = build(s1, s2, idx - s1);
        node.right = build(idx + 1, s2 + idx - s1, len - (idx - s1) - 1);

        return node;
    }

    return build(0, 0, inorder.length);
};