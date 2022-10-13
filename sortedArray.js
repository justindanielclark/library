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
SortedArray.prototype.compare = function(a, b, reversed = false){
  let index = 0;
  let result = 0;
  while(index < this.comparisonFuncArr.length && result === 0){
    result = this.comparisonFuncArr[index](a, b, reversed);
    index++;
  }
  console.log(result);
  return result;
}
SortedArray.prototype.insert = function(obj){
  // 0 1 2 3 4 5 6 _7_ 8 9 10 *11* 12 13 14
  // length = 15
  let searchIndex = Math.ceil(this.array.length/2); // searchIndex = 8
  let min = 0;
  let max = this.array.length;
  if(min === max){
    this.array.push(obj);
    return;
  }
  while(true){
    switch(this.compare(this.array[searchIndex], obj)){
      case -1:  {

      }
      case 0: {

      }
      case 1: {
        
      }
      default: {
        console.log('Error in comparison, loggeed from SortedArray.prototype.insert');
      }

    }
  }

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