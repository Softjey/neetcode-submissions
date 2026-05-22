class UnionFind {
    /**
     * @param {number} n
     */

    private parent = new Map<number, number | null>();
    private height: number[];
    private components: number;

    constructor(n: number) {
        for (let i = 0; i < n; i++) {
            this.parent.set(i, null);
        }

        this.height = new Array(n).fill(0);
        this.components = n;
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x: number): number {
        let groupHead = x;

        while (this.parent.get(groupHead) !== null) {
            groupHead = this.parent.get(groupHead);
        }

        let cur = x;

        while (this.parent.get(cur) !== null) {
            const newCur = this.parent.get(cur);

            this.parent.set(cur, groupHead);

            cur = newCur;
        }

        return groupHead;
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
            this.parent.set(p1, p2);
            this.height[p2]++;
        } else if (this.height[p1] > this.height[p2]) {
            this.parent.set(p2, p1);
        } else {
            this.parent.set(p1, p2);
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
