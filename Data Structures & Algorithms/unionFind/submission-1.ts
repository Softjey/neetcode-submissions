class UnionFind {
    /**
     * @param {number} n
     */

    private parent = new Map<number, number | null>();
    private components: number;

    constructor(n: number) {
        for (let i = 0; i < n; i++) {
            this.parent.set(i, null);
        }

        this.components = n;
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x: number): number {
        let cur = x;

        while (this.parent.get(cur) !== null) {
            cur = this.parent.get(cur);
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

        this.parent.set(p1, p2);
        this.components--;

        return true;
    }

    /**
     * @return {number}
     */
    getNumComponents(): number {
        return this.components
    }
}
