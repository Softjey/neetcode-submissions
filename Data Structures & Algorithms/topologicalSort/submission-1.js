class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */

    topologicalSort(n, edges) {
        const result = [];
        const adjList = new Map();

        for (let i = 0; i < n; i++) {
            adjList.set(i, []);
        }

        for (const [from, to] of edges) {
            adjList.get(from).push(to);
        }

        const visited = new Set();
        const visiting = new Set();

        function dfs(node) {
            if (visiting.has(node)) return true;
            if (visited.has(node)) return false;

            const neighbors = adjList.get(node);

            visited.add(node);
            visiting.add(node);

            for (const n of neighbors) {
                if (dfs(n)) {
                    return true;
                }
            }

            result.push(node);
            visiting.delete(node);

            return false;
        }

        for (let i = 0; i < n; i++) {
            if (dfs(i)) return [];
        }

        return result.reverse();
    }
}
