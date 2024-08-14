// . Implement a function that formats a list of items into a single readable string.

function formatList(listOfItem) {
    if (!listOfItem.length) {
      return " ";
    }
    if (listOfItem.length === 1) {
      return listOfItem[0];
    }
    const lastItem = listOfItem.pop();
    return `${listOfItem.join(",")} and ${lastItem}`;
  }
  // Example usage:
  console.log(formatList([])); // Output: ''
  console.log(formatList(["apple"])); // Output: 'apple'
  console.log(formatList(["apple", "banana"])); // Output: 'apple and banana'
  console.log(formatList(["apple", "banana", "cherry"])); // Output: 'apple, banana and cherry'
  console.log(formatList(["apple", "banana", "cherry", "date"])); // Output: 'apple, banana, cherry and date'
  