function isAnagram(s, t) {
    let obj1 = {};
    let obj2 = {};
  
    // Check if lengths are different
    if (s.length !== t.length) {
      return false;
    }
  
    // Count the frequency of each character in both strings
    for (let i = 0; i < s.length; i++) {
      obj1[s[i]] = (obj1[s[i]] || 0) + 1;
      obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }
  
    // Compare the frequency of characters in both objects
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(isAnagram('tar', 'rat')); // Output: true
  