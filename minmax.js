
	class Node
	{
		constructor(data) {
		this.left = null;
		this.right = null;
		this.data = data;
		}
	}

	// Returns the max value in a binary tree
	function findMax(node)
	{
		if (node == null)
			return Number.MIN_VALUE;

		let res = node.data;
		let lres = findMax(node.left);
		let rres = findMax(node.right);

		if (lres > res)
			res = lres;
		if (rres > res)
			res = rres;
		return res;
	}
    function findMin(node) {
        if (node == null) return null;
 
        var res = node.data;
        var lres = findMin(node.left);
        var rres = findMin(node.right);
 
        if (lres < res) res = lres;
        if (rres < res) res = rres;
        return res;
      }
	
	