/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
    shortestPath(n, edges, src) {
        const adjMap = new Map();
        const visited = new Array(n).fill(false);
        const heap = new PriorityQueue((e1, e2) => e1.cost - e2.cost);
        const result = {};

        for (let i = 0; i < n; i++) {
            result[i] = Infinity;
            adjMap.set(i, []);
        }

        for (let [source, destination, weight] of edges) {
            adjMap.get(source).push({ v: destination, weight });
        }

        heap.push({ v: src, cost: 0 });

        while (heap.size() > 0) {
            const source = heap.pop();

            if (source.cost < result[source.v]) {
                result[source.v] = source.cost;
            }

            if (visited[source.v]) continue;

            for (const edge of adjMap.get(source.v) ?? []) {
                const newCost = source.cost + edge.weight;

                heap.push({ v: edge.v, cost: newCost });
            }

            visited[source.v] = true;
        }

        for (let i = 0; i < n; i++) {
            if (!Number.isFinite(result[i])) {
                result[i] = -1;
            }
        }

        return result;
    }
}
