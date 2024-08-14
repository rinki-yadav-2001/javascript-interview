Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i, this);
    }
  };
  const arr = [1, 2, 4, 5, 6, 9];
  
  arr.myForEach((item) => console.log(item * 7));