const A = 0;
const B = 1;
const C = 2;
const D = 3;
const E = 4;
const F = 5;

const vertecies = [A, B, C, D, E, F];
const edges = [
  [A, B, 4],
  [A, C, 2],
  [B, C, 5],
  [B, D, 10],
  [C, E, 3],
  [D, F, 11],
  [E, D, 4],
];

const memory = {};

function LPG(vertecies, edges) {
  if (vertecies.length === 0) {
    return [0, [], []];
  }

  if (memory[vertecies.join(',')]) {
    return memory[vertecies.join(',')];
  }

  let max = [0, []];

  for (let i = 0; i < vertecies.length; i++) {
    vertexMax = [0, vertecies[i], vertecies[i]];

    const vertexEdges = edges.filter((edge) => {
      return edge[0] === vertecies[i];
    });

    if (vertexEdges.length > 0) {
      const newVertices = edges
        .filter((e) => {
          return vertecies[i] === e[0];
        })
        .map((e) => e[1]);

      const longestPath = LPG(newVertices, edges);
      const chosenEdge = vertexEdges.filter((e) => e[1] === longestPath[1])[0];
      // console.log('chosenEdge', chosenEdge);
      let totalCost = longestPath[0] + chosenEdge[2];

      if (vertexMax[0] <= totalCost) {
        vertexMax[0] = totalCost;
        vertexMax[1] = vertecies[i];
        vertexMax[2] = [vertecies[i]].concat(longestPath[2]);
      }
    }

    if (max[0] <= vertexMax[0]) {
      max[0] = vertexMax[0];
      max[1] = vertexMax[1];
      max[2] = vertexMax[2];
    }
  }

  memory[vertecies.join(',')] = max;

  return max;
}

console.log(LPG(vertecies, edges));
