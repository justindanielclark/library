//Takes in an array of comparison functions on creation in order of preferenence. 
//IE: index 0 will execute first. In the event of a tie, index 1 will go and so on
function SortedArray(comparisonFuncArr){
  this.comparisonFuncArr = comparisonFuncArr;
  this.array = new Array();
}
//Comparison Functions are Expected to return -1, 0, or 1
// -1 a < b
//  0 a === b
//  1 a > b
SortedArray.prototype.compare = function(a, b){
  let index = 0;
  let result = 0;
  while(index < this.comparisonFuncArr.length && result === 0){
    result = this.comparisonFuncArr[index];
    index++;
  }
  return result;
}
SortedArray.prototype.insert = function(element){
  let higher = false;
  let lower = false;
  console.log(`hit`);
}
SortedArray.prototype.delete = function(index){
  this.array.splice(index, 1);
}
SortedArray.prototype.get = function(index){
  if (index >= this.array.length){
    return undefined;
  }
  return this.array[index];
}