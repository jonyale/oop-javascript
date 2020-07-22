console.log('requisiteplay: needed for a particular purpose : essential, necessary');

// Move instance members start, stop, reset to the prototype

// You should put methods on the prototypes as an optimization technique

// If you have a large number of objects of the same type, you don't want
// multiple copies of these methods in memory.

// If you only have one instance of the object (like here) you don't need to do
// this. Putting members on the prototype won't allow you to access them easily.

// Premature optimization is the root of all evils.

function Stopwatch() { 
  let startTime, endTime, running, duration = 0;

  // Object.defineProperty()

  Object.defineProperty(this, 'duration', {
    get: function() { return duration; }
  });
}

Stopwatch.prototype = {
  start() {
    if (running) 
      throw new Error('Stopwatch has already started.');

    running = true; 

    startTime = new Date();
  },
  stop() {
    if (!running) 
      throw new Error('Stopwatch is not started.');

    running = false; 
      
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds; 
  },
  reset() { 
    startTime = null;
    endTime = null;
    running = false; 
    duration = 0; 
  },
}

const sw = new Stopwatch();