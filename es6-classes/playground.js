class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance method
  draw() {
    console.log('draw');
  }

  // Static method
  static parse(str) {
    JSON.parse(str);
  }
}

const c = new Circle(1);

