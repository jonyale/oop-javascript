console.log('requisite: needed for a particular purpose : essential, necessary');

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
    get: function() { return duration; },
    // setter allow prototype method to update its value but has the significant
    // downside of making the duration value unreliable
    set: function(value) { duration = value; }
  });

  // expose these private variables so the prototype methods can access them
  // this has the downside of polluting our object's interface
  // this is an example of premature or unnecessary optimization
  Object.defineProperty(this, 'startTime', {
    get: function() { return startTime; }
  });
  Object.defineProperty(this, 'endTime', {
    get: function() { return endTime; }
  });
  Object.defineProperty(this, 'running', {
    get: function() { return running; }
  });
}

// Stopwatch.prototype.start = function() {
//   if (this.running) 
//     throw new Error('Stopwatch has already started.');
  
//   this.running = true; 

//   this.startTime = new Date();
// };

// Stopwatch.prototype.stop = function() {
//   if (!this.running) 
//     throw new Error('Stopwatch is not started.');

//   this.running = false; 
    
//   this.endTime = new Date();

//   const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
//   this.duration += seconds; 
// };

// Stopwatch.prototype.reset = function() { 
//   this.startTime = null;
//   this.endTime = null;
//   this.running = false; 
//   this.duration = 0; 
// };

Stopwatch.prototype = {
  start() {
    if (this.running) 
      throw new Error('Stopwatch has already started.');

    this.running = true; 

    this.startTime = new Date();
  },
  stop() {
    if (!this.running) 
      throw new Error('Stopwatch is not started.');

    this.running = false; 
      
    this.endTime = new Date();

    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds; 
  },
  reset() { 
    this.startTime = null;
    this.endTime = null;
    this.running = false; 
    this.duration = 0; 
  },
}

const sw = new Stopwatch();