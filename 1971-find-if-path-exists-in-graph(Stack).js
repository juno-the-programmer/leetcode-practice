/*
Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
Output: true
*/


var validPath = function(n ,edges, start, end) {

    const adjacencyList = new Map();

    for(let edge of edges) {
        const edge0 = edge[0];
        const edge1 = edge[1];
        adjacencyList.set(edge[0], adjacencyList.get(edge0) ? [...adjacencyList.get(edge0), edge1] : [edge1]);
        adjacencyList.set(edge[1], adjacencyList.get(edge1) ? [...adjacencyList.get(edge1), edge0] : [edge0]);
    }
    
    const stack = [start];
    const seen = [];

    while(stack.length > 0) {
        const current = parseInt(stack.pop());
        if (current == end) {
            return true;
        }
        if (seen.includes(current)) {
            continue;
        }

        seen.push(current);

        const startNeighbor = adjacencyList.get(current);

        for(let neighbor of startNeighbor) {
            stack.push(neighbor);
        }
    }
    return false;
}

// console.log(validPath(3, [[0,1],[1,2],[2,0]], 0, 2));
console.log(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5));