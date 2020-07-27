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

HTMLElement.prototype.focus = function() {
  console.log('focused');
}

function HTMLSelectElement(arr = [], click) {
  this.items = arr;

  this.addItem = function(item) {
    arr.push(item);
  }

  this.removeItem = function(item) {
    const index = arr.findIndex(el => el === item);
    if (index > 0) arr.splice(index, 1);
  }
}

// Set the HTMLSelectElement's prototpye to an INSTANCE, NOT to the prototype, of HTMLElement
HTMLSelectElement.prototype = new HTMLElement();
// Best Practice: reset constructor after overwriting the prototype
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

const e = new HTMLElement();
const s = new HTMLSelectElement();