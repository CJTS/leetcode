let dp = [];

var path = function (v0, s, G) {
  if (dp[v0][s.length] !== -1) {
    return dp[(v0, s.length)];
  }

  if (s.length === 0) {
    return 0;
  }

  let edges = G.edges.filter((edge) => {
    return edge[0] === v0 && edge[2] === s[0];
  });

  let min = Infinity;
  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    let newSequence = [...s];
    newSequence.shift();
    min = Math.min(min, path(edge[1], newSequence, G) + 1);
  }
  dp[v0][s.length] = min;

  return min;
};

let v0 = 1;
let sigma = [1, 2, 3, 4];
s = [1, 2, 3, 4];
G = {
  nodes: [1, 2, 3],
  edges: [
    [1, 2, 1],
    [2, 3, 2],
    [3, 1, 3],
    [1, 3, 4],
  ],
};
dp = new Array(G.nodes.length + 1).fill(-1).map(() => {
  return new Array(s.length + 1).fill(-1);
});
console.log(path(v0, s, G));
