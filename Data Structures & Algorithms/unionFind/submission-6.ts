class UnionFind {
    /**
     * @param {number} n
     */

    private parent: number[];
    private height: number[];
    private components: number;

    constructor(n: number) {
        this.height = new Array(n);
        this.parent = new Array(n);

        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.height[i] = 0;
        }

        this.components = n;
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x: number): number {
        let cur = x;

        while (this.parent[cur] !== cur) {
            this.parent[cur] = this.parent[this.parent[cur]];
            cur = this.parent[cur];
        }

        return cur;
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    isSameComponent(x: number, y: number): boolean {
        return this.find(x) === this.find(y);
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    union(x: number, y: number): boolean {
        const p1 = this.find(x);
        const p2 = this.find(y);

        if (p1 === p2) {
            return false;
        }

        if (this.height[p1] === this.height[p2]) {
            this.parent[p1] = p2;
            this.height[p2]++;
        } else if (this.height[p1] > this.height[p2]) {
            this.parent[p2] = p1;
        } else {
            this.parent[p1] = p2;
        }

        this.components--;

        return true;
    }

    /**
     * @return {number}
     */
    getNumComponents(): number {
        return this.components;
    }
}
