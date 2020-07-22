function Stopwatch() {
  let running, intervalID, duration = 0;

  let incrementTime = function() {
    duration += 1;
  }

  this.start = function() {
    if (running) {
      throw new Error('Stopwatch is already running.');
    }
    intervalID = setInterval(incrementTime, 1000);
    running = true;
  }

  this.stop = function() {
    if (!running) {
      throw new Error('Stopwatch is already stopped.');
    }
    clearInterval(intervalID);
    running = false;
  }
  
  this.reset = function() {
    duration = 0;
    clearInterval(intervalID);
    running = false;
  }

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    }
  });
}

const sw = new Stopwatch();