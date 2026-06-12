class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */
    topologicalSort(n: number, edges: number[][]): number[] {
        const inDegree = new Array(n).fill(0);
        const adjList = Array.from({ length: n }, () => new Array());
        const result = [];

        for (const [from, to] of edges) {
            adjList[from].push(to);
            inDegree[to]++;
        }

        const queue = [];

        for (let i = 0; i < n; i++) {
            if (inDegree[i] === 0) {
                queue.push(i);
            }
        }

        while (queue.length > 0) {
            const node = queue.pop();

            result.push(node);

            for (const dep of adjList[node]) {
                inDegree[dep]--;

                if (inDegree[dep] === 0) {
                    queue.push(dep);
                }
            }
        }

        if (result.length !== n) {
            return [];
        }

        return result;
    }
}
