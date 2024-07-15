import LinkedListNode from "./LinkedListNode";
import Comparator from "../../utils/comparator/Comparator";

export default class LinkedList { 
    constructor(compareFunction) { 
        this.head = null;
        this.tail = null;
        this.compare = new Comparator(compareFunction);
    }

    prepend(value) { 
        const newNode = new LinkedListNode(value,this.head);
        this.head = newNode;

        if (!this.tail) { 
            this.tail = newNode;
        }

        return this;
    }

    append(value) { 
        const newNode = new LinkedListNode(value);
        if (!this.head) { 
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    insert(value, rawIndex) { 
        const index = Math.max(rawIndex, 0);
        if (index === 0) {
            this.append(value);
        } else { 
            let count = 1;
            let currentNode = this.head;
            const newNode = new LinkedListNode(value);
            while (currentNode) {
                if (count === index) break;
                currentNode = currentNode.next;
                count++;
            }

            if (currentNode) {
                newNode.next = currentNode.next;
                currentNode.next = newNode;
            } else { 
                if (this.tail) {
                    this.tail.next = newNode;
                    this.tail = newNode;
                } else { 
                    this.head = newNode;
                    this.tail = newNode;
                }   
            }
        }
        return this;
    }

    delete(value) { 
        if (!this.head) { 
            return null;
        }
        let deleteNode = null;

        while (this.head && this.compare.equal(this.head.value, value)) { 
            deleteNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;
        if (currentNode !== null) { 
            while (currentNode.next) { 
                if (currentNode.next.value === value) {
                    deleteNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else { 
                    currentNode = currentNode.next;
                }
            }
        }

        if (this.compare.equal(this.tail.value, value)) { 
            this.tail = currentNode;
        }

        return deleteNode;
    }

    find({ value: undefined, callback: undefined }) { 
        if (!this.head) { 
            return null;
        }

        let currentNode = this.head;

        while (currentNode) { 
            if (callback && callback(currentNode.value)) { 
                return currentNode;
            }

            if (value !== undefined && this.compare.equal(currentNode.value,value)) { 
                return currentNode;
            }

            currentNode = currentNode.next;
        }
        return null;
    }

    deleteTail() { 
        const deletedTail = this.tail;
        
    }
}