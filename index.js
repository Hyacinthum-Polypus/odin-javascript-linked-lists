#!/usr/bin/node

function linkedList() {
    const Node = (value = null) => {
        let nextNode = null;
        return {value, nextNode};
    }

    const append = (value, node = root) => {
        if(node.nextNode == null) {
            node.nextNode = Node(value);
        } else {
            append(value, node.nextNode);
        }
    };

    const prepend = (value) => {
        let newNode = Node(value);
        newNode.nextNode = root;
        root = newNode;
    };

    const size = (node = root, n = 0) => {
        n++;
        if(node.nextNode == null) {
            return n;
        } else {
            return size(node.nextNode, n);
        }
    };

    const head = () => {
        return root;
    };

    const tail = (node = root) => {
        if(node.nextNode == null) {
            return node;
        } else {
            return tail(node.nextNode);
        }
    };

    const at = (index, node = root) => {
        if(index == 0) {
            return node;
        } else if(node.nextNode == null) {
            return null;
        } else {
            index--;
            return at(index, node.nextNode);
        }
    };

    const pop = (node = root) => {
        if(node.nextNode.nextNode == null) {
            if(node == root) return;
            node.nextNode = null;
        } else {
            pop(node.nextNode);
        }
    };

    const contains = (value, node = root) => {
        if(node.value == value) {
            return true;
        } else if(node.nextNode == null) {
            return false;
        } else {
            return contains(value, node.nextNode);
        }
    };

    const find = (value, n = 0, node = root) => {
        if(node.value == value) {
            return n;
        } else if(node.nextNode == null) {
            return null;
        } else {
            ++n;
            return find(value, n, node.nextNode);
        }
    };

    const toString = (str = "", node = root) => {
        str += "( " + node.value + " ) -> ";
        if(node.nextNode == null) {
            str += "null";
            return str;
        } else {
            return toString(str, node.nextNode)
        }
    };

    //EXTRA CREDIT
    const insertAt = (value, index, node = root) => {
        if(index == 0) {
            prepend(value);
        } else if(index == 1) {
            let oldNextNode = node.nextNode;
            node.nextNode = Node(value);
            node.nextNode.nextNode = oldNextNode;
        } else if(node.nextNode == null) {
            return;
        } else {
            index--;
            insertAt(value, index, node.nextNode);
        }
    };

    const removeAt = (index, node = root) => {
        if(index == 0) {
            if(root.nextNode == null) {
                return;
            } else {
                root = root.nextNode;
            }
        } else if(index == 1) {
            if(node.nextNode == null) {
                return;
            } else {
                node.nextNode = node.nextNode.nextNode;
            }
        } else if(node.nextNode == null) {
            return;
        } else {
            index--;
            removeAt(value, index, node.nextNode);
        }
    };

    let root = Node();

    return {append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt, removeAt};
}

let nullLinkedList = linkedList();
console.log("nullLinkedList: " + nullLinkedList.toString());

let singleValueListedList = linkedList();
singleValueListedList.head().value = 1;
console.log("singleValueListList" + singleValueListedList.toString());

let twoNodes = linkedList();
twoNodes.head().value = 1;
twoNodes.append(2);
console.log("twoNodes: " + twoNodes.toString());
twoNodes.append(4);
twoNodes.tail().value = 3;
console.log("twoNodes: " + twoNodes.toString());
twoNodes.prepend(0);
console.log("twoNodes: " + twoNodes.toString());
console.log("twoNode size: " + twoNodes.size());
twoNodes.prepend(10);
console.log("twoNodes: " + twoNodes.toString());
console.log("twoNodes element 3: " + twoNodes.at(3).value);
twoNodes.pop();
console.log("twoNodes: " + twoNodes.toString());
console.log("Does twoNodes contain 1: " + twoNodes.contains(1));
console.log("Does twoNodes contain 5: " + twoNodes.contains(5));
console.log("twoNodes node value 1 is at element: " + twoNodes.find(1));
twoNodes.insertAt(4,3);
console.log("twoNodes: " + twoNodes.toString());
twoNodes.insertAt("Hello World", 0);
console.log("twoNodes: " + twoNodes.toString());
