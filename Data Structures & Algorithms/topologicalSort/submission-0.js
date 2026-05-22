class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */

    hasCycle(adjList) {
        const visited = new Set();

        function dfs(node) {
            if (visited.has(node)) return true;

            visited.add(node);

            for (const n of adjList.get(node)) {
                if (dfs(n)) {
                    return true;
                }
            }

            visited.delete(node);

            return false;
        }

        for (let node of adjList.keys()) {
            if (dfs(node)) {
                return true;
            }
        }

        return false;
    }

    topologicalSort(n, edges) {
        const result = [];
        const adjList = new Map();

        for (let i = 0; i < n; i++) {
            adjList.set(i, []);
        }

        for (const [from, to] of edges) {
            adjList.get(from).push(to);
        }

        if (this.hasCycle(adjList)) {
            return [];
        }

        const visited = new Set();

        function dfs(node) {
            if (visited.has(node)) return;

            const neighbors = adjList.get(node);

            visited.add(node);

            for (const n of neighbors) {
                dfs(n);
            }

            result.push(node);
        }

        for (let i = 0; i < n; i++) {
            dfs(i);
        }

        return result.reverse();
    }
}
