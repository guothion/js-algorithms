import LinkedListNode from "../LinkedListNode";

describe('LinkedListNode', () => {
    it('should create list node with value', () => {
        const node = new LinkedListNode(1);
        expect(node.value).toBe(1);
        expect(node.next).toBeNull();
    });
   
    it('should create list node with object value', () => { 
        const nodeValue = { value: 1, key: 'test' };
        const node = new LinkedListNode(nodeValue);

        expect(node.value.value).toBe(1);
        expect(node.value.key).toBe('test');
        expect(node.next).toBeNull();
    })
});
