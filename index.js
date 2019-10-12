let collection = {
    rnadnm: { name: 'Alexandra', next: 'masjdrandm' },
    masjdrandm: { name: 'Kirstin', next: 'ntrandm' },
    ntrandm: { name: 'Juliet', next: null }
}

function getName(node) {
    return node.name
}


function headNode(head, link) {
    return link[head]
}

function next(node, collection) {
    let nextAddress = node.next
    return collection[nextAddress]
}

function indexAt(node, collection, linkedList){
    let currentNode = headNode(linkedList, collection)
    let i
    for (i = 0; currentNode != node; i++) {
        currentNode = next(currentNode, collection)
    }
    return i
}

function nodeAt(index, linkedList, collection) {
    let currentNode = headNode(linkedList, collection)
    let i
    for(i = 0; i < index; i++) {
        currentNode = next(currentNode, collection)
    }
    return currentNode
}




// function indexAt(head, index) {
//     let node = head;
//     for (i = 0; i < index; i++) {
//         node = next(node);
//     }

//     return node;
// }
