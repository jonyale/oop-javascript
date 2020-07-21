console.log('Hello World');

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 0,
//   },
//   draw() {
//     console.log('Im drawing here');
//   },
// };

// circle.draw();

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    },
  };
}

const circle = createCircle(1);