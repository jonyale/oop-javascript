console.log('bowdlerize: to modify by abridging, simplifying, or distorting in style or content');

// HTMLElement: parent of below, HTMLSelectElement

// HTMLSelectElement: represents a dropdown list
// constructor optionally takes an array of arguments
// if no array passed, it will be initialized to an empty array
// 3 memberse: 2 methods, addItem and removeItem. And 1 property items array
// manually set the prototype of HTMLSelectElement to an instance of the 
// HTMLElement object


function HTMLElement() {
  this.click = function() {
    console.log('clicked');
  }
}

function HTMLSelectElement(arr = []) {
  this.items = arr;
  this.addItem = function(item) {
    arr.push(item);
  }
  this.removeItem = function(item) {
    const index = arr.findIndex(el => el === item);
    if (index > 0) arr.splice(index, 1);
  }
}

HTMLElement.prototype.focus = function() {
  console.log('focused');
}

const e = new HTMLElement();
const s = new HTMLSelectElement();