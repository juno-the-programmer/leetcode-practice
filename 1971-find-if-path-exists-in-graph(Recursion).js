/**
 * https://leetcode.com/problems/find-if-path-exists-in-graph/
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
var validPath = function(n, edges, start, end) {
    if (start == end) return true;

    const graph = buildGraph(edges);
    
    function hasPath(graph, src, dest, visited) {
        if (src == dest) return true;
        if (visited.has(start)) return false
        visited.add(src);

        for(let neighbor of graph[src]) {
            if(hasPath(graph, neighbor, dest,visited) === true) {
                return true;
            }
        }
        return false;
    }

    return hasPath(graph, start, end, new Set());

};


const buildGraph = (edges) => {
    const graph = {};
    for(let edge of edges) {
        const [a,b] = edge;
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

// const edges = [
//     [0,1],
//     [1,2],
//     [2,0]
// ];
// console.log(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5));
console.log(validPath(3, [[0,1],[1,2],[2,0]], 0, 2));
 