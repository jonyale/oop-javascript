function Stopwatch() {
  let startTime, endTime, running, duration = 0;

  this.start = function() {
    if (running) {
      throw new Error('Stopwatch is already running');
    }
    startTime = new Date();
    running = true;    
  }

  this.stop = function() {
    if (!running) {
      throw new Error('Stopwatch is already stopped');
    }
    running = false;
    endTime = new Date();
    duration = (endTime.getTime() - startTime.getTime()) / 1000;
  }

  this.reset = function() {
    duration = 0;
    startTime = null;
    endTime = null;
    running = false;
  }

  Object.defineProperty(this, 'duration', {
    get: function() { return duration; }
  });
}



const sw = new Stopwatch();