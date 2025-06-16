/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  // Your Code Here
  let dictionary = {};
  data.forEach(element => {
    // console.log(dictionary);
    if (dictionary[element]) {
      data.splice(data.indexOf(element), 1);
    } else {
      dictionary[element] = true;
    }
  });
  return data;
}

console.log(result(data));
