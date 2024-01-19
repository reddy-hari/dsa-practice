var RecentCounter = function () {
  this.reqQueue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.reqQueue.push(t);
  while (this.reqQueue[0] < t - 3000) this.reqQueue.shift();
  return this.reqQueue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

var obj = new RecentCounter();
console.log(obj.ping(1)); // Output: 1
console.log(obj.ping(100)); // Output: 2
console.log(obj.ping(3001)); // Output: 3
console.log(obj.ping(3002)); // Output: 3
