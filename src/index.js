
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(arguments.length === 0) return [];
  const result = [];

  matrix.forEach((element, index) => {
    if(index % 2 === 0) {
      element.forEach(el => {
        result.push(el);
      })
    }else {
      while(element.length !== 0){
        result.push(element.pop());
      }
    }
  });
  
  return result;
}
