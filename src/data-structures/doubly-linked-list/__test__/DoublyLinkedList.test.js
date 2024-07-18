import DoublyLinkedList from "../DoublyLinkedList";

describe('DoublyLinkedList', () => {
    it('should create empty linked list', () => {
        const linkedList = new DoublyLinkedList();
        expect(linkedList.toString()).toBe('');
    });

    it('should append node to linked list', () => {
        const linkedList =  new DoublyLinkedList();

        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();

        linkedList.append(1);
        linkedList.append(2);

        expect(linkedList.head.value).toBe(1);
        expect(linkedList.tail.value).toBe(2);
        expect(linkedList.toString()).toBe("1,2");
        
    });

    it('should prepend node to linked list', () => {
        const linkedList = new DoublyLinkedList();

        linkedList.prepend(2);
        expect(linkedList.head.toString()).toBe('2');
        expect(linkedList.tail.value).toBe(2);

        linkedList.append(1);
        linkedList.prepend(3);

        expect(linkedList.head.next.next.previous).toBe(linkedList.head.next);
        expect(linkedList.tail.previous.next).toBe(linkedList.tail);
        expect(linkedList.tail.previous.value).toBe(2);
        expect(linkedList.toString()).toBe('3,2,1');
    });

    it('should create linked list from array', () => {
        const linkedList = new DoublyLinkedList();
        linkedList.fromArray([1, 1, 2, 3, 4, 3, 5]);
        expect(linkedList.toString()).toBe('1,1,2,3,4,3,5');
    });
});