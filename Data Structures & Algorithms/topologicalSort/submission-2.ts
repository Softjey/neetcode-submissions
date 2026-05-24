class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */
    topologicalSort(n: number, edges: number[][]): number[] {
        const result = [];
        const visited = new Set();
        const visiting = new Set();

        const adjList = Array.from({ length: n }, () => new Array());

        for (const [from, to] of edges) {
            adjList[to].push(from);
        }

        function dfs(i: number) {
            if (visiting.has(i)) return true;
            if (visited.has(i)) return false;

            visiting.add(i);

            for (const neighbor of adjList[i]) {
                if (dfs(neighbor)) {
                    return true;
                }
            }

            visiting.delete(i);
            visited.add(i);
            result.push(i);

            return false;
        }

        for (let i = 0; i < n; i++) {
            if (dfs(i)) {
                return [];
            }
        }

        return result;
    }
}
