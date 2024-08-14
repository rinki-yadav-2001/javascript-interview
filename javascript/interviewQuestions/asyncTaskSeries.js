// 27. Implement a function to execute N async tasks in series.

async function asyncTaskInSeries(tasks) {
    const result = [];
    for (let task of tasks) {
      let res = await task;
      result.push(res);
    }
    return result;
  }
  
  const task1 = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve("task1 completed");
      }, 100)
    );
  
  const task2 = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve("task2 completed");
      }, 800)
    );
  
  const task3 = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve("task3 completed");
      }, 400)
    );
  
  const asynctask = asyncTaskInSeries([task1(), task2(), task3()]);
  
  asynctask.then((res) => console.log(res)).catch((err) => console.log(err));


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
  
  // Running tasks in sequence
  task1()
    .then((result1) => {
      console.log(result1); // Result from Task 1
      return task2();
    })
    .then((result2) => {
      console.log(result2); // Result from Task 2
      return task3();
    })
    .then((result3) => {
      console.log(result3); // Result from Task 3
      console.log("All tasks completed in sequence");
    })
    .catch((error) => {
      console.error("Error in one of the tasks:", error);
    });
  
  