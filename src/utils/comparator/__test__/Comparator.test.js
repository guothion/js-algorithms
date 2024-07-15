import Comparator from "../Comparator";

describe('Comparator', () => {
    it('should compare with default Comparator function', () => {
        const comparator = new Comparator();

        expect(comparator.equal(0, 0)).toBe(true);
        expect(comparator.equal(0, 1)).toBe(false);

        expect(comparator.lessThan(1, 2)).toBe(true);
    });
    
});
