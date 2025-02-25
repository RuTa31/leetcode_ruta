class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  function traverse(node: TreeNode | null) {
    if (node === null) return;
    traverse(node.left); // Зүүн мод руу
    result.push(node.val); // Үндсэн утга
    traverse(node.right); // Баруун мод руу
  }

  traverse(root);
  return result;
}

// ✅ Туршилт хийх
const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(inorderTraversal(root)); // [1, 3, 2]
