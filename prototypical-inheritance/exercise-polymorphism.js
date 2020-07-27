// console.log('anomaly: something different, abnormal, peculiar, or not easily classified');

// Create a render method that can be called on instances of HTMLSelectElement

// Create HTMLImageElement that inherits from an instance of HTMLElement so it can
// be clicked and focused. It should have its own render method and an src property.


function HTMLElement() {
  this.click = function() {
    console.log('clicked');
  }
}

HTMLElement.prototype.focus = function() {
  console.log('focused');
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

  this.render = function() {
    return `
    <select>
      ${arr.map(item => `<option>${item}</option>`).join('')}
    </select>`;
  }
}

// Set the HTMLSelectElement's prototpye to an INSTANCE, NOT to the prototype, of HTMLElement
HTMLSelectElement.prototype = new HTMLElement();
// Best Practice: reset constructor after overwriting the prototype
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

function HTMLImageElement(src = '') {
  this.src = src;

  this.render = function() {
    return `<img src="${this.src}"/>`;
  };
}

// Inherit from instance of HTMLElement
HTMLImageElement.prototype = new HTMLElement();
// Reset the constructor
HTMLImageElement.prototype.constructor = HTMLImageElement;

const e = new HTMLElement();
const s = new HTMLSelectElement();
const img = new HTMLImageElement();

const elements = [
  new HTMLSelectElement([1, 4, 9]),
  new HTMLImageElement('http://'),
];

for (let element of elements) {
  console.log(element.render());
}