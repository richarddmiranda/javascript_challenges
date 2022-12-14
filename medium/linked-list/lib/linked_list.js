

class SimpleLinkedList {

  constructor() {
    this.listOfElements = [];
  }

  push(datum) {
    this.listOfElements.unshift(new Element(datum));
    this.listOfElements[0].nextElement = this.listOfElements.length > 1 ? this.listOfElements[1] : null;
     
  }

  size() {
    return this.listOfElements.length;
  }

  head() {
    return this.listOfElements[0];
  }

  tail() {
    return this.listOfElements[length - 1];
  }

  pop() {
    let poppedData = this.listOfElements.shift().datum()
    let length = this.listOfElements.length
    if (this.listOfElements[length - 1]) this.listOfElements[length - 1].nextElement = null;
    return poppedData;
  }

  static fromArray(array) {
    array = array || [];
    let list = new SimpleLinkedList()

    array.forEach(datum => {
      list.listOfElements.push(new Element(datum));
    });

    list.listOfElements.forEach((element, index, array) => {
      element.nextElement = array[index + 1] ?  array[index + 1] : null;
    })

    return list;
  }

  toArray() {
    let array = [];
    this.listOfElements.forEach(element => {
      array.push(element.datum())
    })
    return array;
  }

  
  reverse() {

    let data = this.toArray().reverse()
    let reversedList = SimpleLinkedList.fromArray(data);
    
    return reversedList;
  }

  isEmpty() {
    return this.listOfElements.length === 0;
  }

  peek() {
    return this.listOfElements[0] ? this.listOfElements[0].datum() : null;
  }


}

class Element {

  constructor(content = null, nextElement) {
    this.content = content;
    if (nextElement instanceof Element) {
      this.nextElement = nextElement
    } else if (nextElement) {
      this.nextElement = new Element(nextElement);
    } else {
      this.nextElement = null;
    }
  }

  datum() {
    return this.content;
  }

  next() {
    return this.nextElement;
  }

  isTail() {

    return this.nextElement === null;
  }

}

let element1 = new Element(1);
let element2 = new Element(2, element1);
console.log(element2.next())

module.exports = {Element, SimpleLinkedList}