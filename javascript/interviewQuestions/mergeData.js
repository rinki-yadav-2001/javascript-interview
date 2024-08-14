function mergeUserData(data) {
    const map = {};
    for (let user of data) {
      if (map[user.id]) {
        const existingData = map[user.id];
        const newData = { ...existingData, ...user };
        map[user.id] = newData;
      } else {
        map[user.id] = user;
      }
    }
    return Object.values(map);
  }
  const userData = [
    { id: 1, name: "John", email: "john@example.com" },
    { id: 2, name: "Jane", email: "jane@example.com" },
    { id: 1, phone: "123-456-7890" },
    { id: 2, address: "123 Main St" },
  ];
  
  const mergedData = mergeUserData(userData);
  console.log(mergedData);
  // Output: [
  //   { id: 1, name: 'John', email: 'john@example.com', phone: '123-456-7890' },
  //   { id: 2, name: 'Jane', email: 'jane@example.com', address: '123 Main St' }
  // ]