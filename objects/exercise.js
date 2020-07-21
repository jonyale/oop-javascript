console.log('inculcate: to teach and impress by frequent repetitions or admonitions');

// property: duration. starts at zero. start increases it. stop stops it

// methods: start, stop reset

// Try using new Date() and getTime()

function Stopwatch() {
  let startTime, endTime, running, duration = 0;

  // let incrementTime = function() {
  //   duration += 1;
  // }

  this.start = function() {
    setInterval(incrementTime, 1000);
    const intervalID = setInterval(incrementTime, 1000);
  }

  this.stop = function() {
    clearInterval(intervalID);
  }

  this.reset = function() {
    duration = 0;
  }

  Object.defineProperty(this, 'duration', {
    get: function() { return duration; }
  });
}



const sw = new Stopwatch();