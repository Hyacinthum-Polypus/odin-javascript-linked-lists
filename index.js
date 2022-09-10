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
            size(node.nextNode, n);
        }
    };

    const head = () => {
        return root;
    };

    const tail = (node = root) => {
        if(node.nextNode == null) {
            return node;
        } else {
            tail(node.nextNode);
        }
    };

    const at = (index, node = root) => {
        if(index == 0) {
            return node;
        } else if(node.nextNode == null) {
            return null;
        } else {
            index--;
            at(index, node.nextNode);
        }
    };

    const pop = (node = root) => {
        if(node == root){
            return;
        } else if(node.nextNode.nextNode == null) {
            node.nextNode = null;
        } else {
            pop(node.nextNode);
        }
    };

    const contains = (value, node = root) => {
        if(node == value) {
            return true;
        } else if(node.nextNode == null) {
            return false;
        } else {
            contains(value, node.nextNode);
        }
    };

    const find = (value, n = 0, node = root) => {
        if(node.value == value) {
            return n;
        } else if(node.nextNode == null) {
            return null;
        } else {
            ++n;
            find(value, n, node.nextNode);
        }
    };

    const toString = (str = "", node = root) => {
        str += "( " + node.value + " ) -> ";
        if(node.nextNode == null) {
            str += "null";
            return str;
        } else {
            toString(str, node.nextNode)
        }
    };

    let root = Node();

    return {append, prepend, size, head, tail, at, pop, contains, find, toString};
}

let myLinkedList = linkedList();

console.log(myLinkedList.toString());