/* 
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

Example 1:
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2

Example 2:
Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3

Constraints:
1 <= n <= 200
n == isConnected.length
n == isConnected[i].length
isConnected[i][j] is 1 or 0.
isConnected[i][i] == 1
isConnected[i][j] == isConnected[j][i]

*/
class UnionFind {
  constructor(size) {
    this.root = new Array(size);
    this.rank = new Array(size);
    this.count = size;
    for (let i = 0; i < size; i++) {
      this.root[i] = i;
      this.rank[i] = 1;
    }
  }

  find(x) {
    if (x === this.root[x]) {
      return x;
    }

    return (this.root[x] = find(this.root[x]));
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX != rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.root[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootX]) {
        this.root[rootX] = rootY;
      } else {
        this.root[rootY] = rootX;
        this.rank[rootX] += 1;
      }
      this.count--;
    }
  }

  getCount() {
    return this.count;
  }
}

const findCircleNum = (isConnected) => {
  // [[1,1,0],[1,1,0],[0,0,1]]
  if (isConnected == null || isConnected.length == 0) {
    return 0;
  }

  let n = isConnected.length;
  let uf = new UnionFind(n);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j] == 1) {
        uf.union(i, j);
      }
    }
  }

  return uf.getCount();
};

const result = findCircleNum([
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);

console.log("result:" + result);
