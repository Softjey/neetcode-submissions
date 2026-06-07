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
        const shortest = new Array(n).fill(Infinity);
        const adjList = Array.from({ length: n }, () => new Array());

        for (let [from, to, cost] of edges) {
            adjList[from].push({ node: to, cost });
        }

        const heap = new MinPriorityQueue((i) => i.cost);

        heap.push({ cost: 0, node: src });

        while (heap.size() > 0) {
            const { cost, node } = heap.pop();

            if (cost >= shortest[node]) {
                continue;
            }

            shortest[node] = cost;

            for (const child of adjList[node]) {
                const childTotalCost = cost + child.cost;

                heap.push({
                    node: child.node,
                    cost: childTotalCost,
                });
            }
        }

        return shortest.map((cost) => (cost === Infinity ? -1 : cost));
    }
}
