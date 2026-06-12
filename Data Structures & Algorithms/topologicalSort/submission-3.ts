class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */
    topologicalSort(n: number, edges: number[][]): number[] {
        const visiting = new Set<number>();
        const visited = new Set<number>();
        const adjList = Array.from({ length: n }, () => new Array());
        const result: number[] = [];

        for (const [from, to] of edges) {
            adjList[from].push(to);
        }

        function traverse(node: number): boolean {
            if (visiting.has(node)) return true;
            if (visited.has(node)) return false;

            visiting.add(node);

            for (const dep of adjList[node]) {
                const hasCycle = traverse(dep);

                if (hasCycle) {
                    return true;
                }
            }

            visiting.delete(node);
            visited.add(node);
            result.push(node);
        }

        for (let i = 0; i < n; i++) {
            const hasCycle = traverse(i);

            if (hasCycle) {
                return [];
            }
        }

        return result.reverse();
    }
}
