function longestCommonPrefix(strs: string[]): string {
  // Trie Tree
  class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
      this.children = new Map<string, TrieNode>();
      this.isEndOfWord = false;
    }
  }

  class TrieTree {
    root: TrieNode;

    constructor() {
      this.root = new TrieNode();
    }

    insert(word: string): void {
      let node = this.root;
      for (const c of word) {
        if (!node.children.has(c)) {
          node.children.set(c, new TrieNode());
        }
        node = node.children.get(c) as TrieNode;
      }
      node.isEndOfWord = true;
    }

    get longestPrefix(): string {
      let node = this.root;
      let prefix = "";
      while (node.children.size === 1 && !node.isEndOfWord) {
        const [key, next] = node.children.entries().next().value;
        prefix += key;
        node = next;
      }
      return prefix;
    }
  }

  const trieTree = new TrieTree();
  for (const word of strs) {
    trieTree.insert(word);
  }

  return trieTree.longestPrefix;
}
