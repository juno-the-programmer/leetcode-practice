/*
Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

Example 1:
Input: graph = [[1,2],[3],[3],[]]
Output: [[0,1,3],[0,2,3]]
Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
*/
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  
    const target = graph.length - 1;

    
    const allPathsToTarget = (currNode, memo = {}) => {
        if (currNode in memo) {
            return memo[currNode];
        }

        // base case
        if (currNode == target) {
            return [[target]]
        }
        
        const results = new Array();
        for(let nextNode of graph[currNode]) {
            for(let path of allPathsToTarget(nextNode, memo)) {
                results.push([currNode, ...path]);
            }
        }

        memo[currNode] = results;
        return results;
        
    };
    
    return allPathsToTarget(0)
};

console.log(allPathsSourceTarget([[1,2],[3],[3],[]]));
// console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]));