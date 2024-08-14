function task1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Task 1 completed");
        resolve("Result from Task 1");
      }, 1000);
    });
  }
  
  function task2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Task 2 completed");
        resolve("Result from Task 2");
      }, 2000);
    });
  }
  
  function task3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Task 3 completed");
        resolve("Result from Task 3");
      }, 1500);
    });
  }
  
  // Running tasks in parallel
  Promise.all([task1(), task2(), task3()])
    .then((results) => {
      console.log("All tasks completed in parallel");
      console.log(results); // [ 'Result from Task 1', 'Result from Task 2', 'Result from Task 3' ]
    })
    .catch((error) => {
      console.error("Error in one of the tasks:", error);
    });
  