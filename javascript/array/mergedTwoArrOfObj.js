

function mergedTwoArrOfObj(arr1, arr2) {
  let idMap = {};

  arr1.forEach((item) => {
    idMap[item.id] = item;
  });

  arr2.forEach((item) => {
    if (idMap[item.id]) {
      const existngItem = idMap[item.id];
      const newItem = { ...existngItem, ...item };
      idMap[item.id] = newItem;
    }
    idMap[item.id] = item;
  });

  // Convert map values to array
  return Object.values(idMap);
}

const arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];

const arr2 = [
  { id: 2, x: 10, y: 20, z: 80 },
  { id: 3, x: 0, y: 0 },
];

const mergedArray = mergedTwoArrOfObj(arr1, arr2);
console.log(mergedArray);
