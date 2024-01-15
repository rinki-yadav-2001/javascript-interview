const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

// Using filter() and includes():
function interSection(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

const intersect = interSection(array1, array2);
console.log("Intersection:", intersect);

// using set method
function interSectionWithSet(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return [...set1].filter((item) => set2.has(item));
}

const intersectwithset = interSectionWithSet(array1, array2);
console.log("Intersection:", intersectwithset);

// using set method Array.from()
function interSectionWithSetAndArrayFrom(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return Array.from([...set1].filter((item) => set2.has(item)));
}
const intersectwithsetArr = interSectionWithSetAndArrayFrom(array1, array2);
console.log("Intersection:", intersectwithsetArr);
