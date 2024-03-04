// Binary search tree
export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

export class BinarySearchTree {
    private root: TreeNode | null = null;

    constructor() {
        this.root = null;
    }

    private _insert(node: TreeNode, val: number) {
        if (node.val < val) {
            if (node.right === null) {
                const newNode = new TreeNode(val);
                node.right = newNode;
            } else {
                this._insert(node.right, val);
            }
        } else if (node.val > val) {
            if (node.left === null) {
                const newNode = new TreeNode(val);
                node.left = newNode;
            } else {
                this._insert(node.left, val);
            }
        } else {
            // Value already exists, do nothing
            return;
        }
    }

    public insert(val: number) {
        if (this.root === null) {
            const newNode = new TreeNode(val);
            this.root = newNode;
        }

        this._insert(this.root, val);
    }

    private _search(val: number): TreeNode | null {
        let p: TreeNode | null = this.root;

        while (p !== null) {
            if (p.val < val) {
                p = p.right;
            } else if (p.val > val) {
                p = p.left;
            } else {
                // Found
                break;
            }
        }

        return p;
    }

    public search(val: number): boolean {
        return this._search(val) !== null;
    }

    // If found node of val, return true
    public delete(val: number): boolean {
        // p: Parent node of q
        let p: TreeNode | null = null;
        let q: TreeNode | null = this.root;

        while (q !== null) {
            if (q.val < val) {
                p = q;
                q = q.right;
            } else if (q.val > val) {
                p = q;
                q = q.left;
            } else {
                // found
                break;
            }
        }

        // Val not found
        if (q === null) return false;

        // q is leaf node
        if (q.left === null && q.right === null) {
            // q is root & is a leaf node
            if (p === null) {
                this.root = null;
            }

            else if (p.left !== null && p.left.val === val) {
                p.left = null;
            }

            else if (p.right !== null && p.right.val === val) {
                p.right = null;
            }
        }

        // q has 2 children
        else if (q.left !== null && q.right !== null) {
            // Replace q with the smallest value in q's right subtree
            let parentOfMin = q;
            let minNode = q.right;

            while (minNode.left !== null) {
                parentOfMin = minNode;
                minNode = minNode.left;
            }

            if (parentOfMin.val === q.val) {
                q.right = minNode.right;
            } else {
                parentOfMin.left = minNode.right
            }
            q.val = minNode.val
        }

        // q has 1 child
        else {
            // q is root
            if (p === null) {
                this.root = q.left !== null ? q.left : q.right;
            }

            else if (p.left !== null && p.left.val === val) {
                p.left = q.left !== null ? q.left : q.right;
            }

            else if (p.right !== null && p.right.val === val) {
                p.right = q.left !== null ? q.left : q.right;
            }
        }

        return true;
    }
}