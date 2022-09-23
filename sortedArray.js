//Takes in an array of comparison functions on creation in order of preferenence. 
//IE: index 0 will execute first. In the event of a tie, index 1 will go and so on
function SortedArray(comparisonFuncArr){
  this.comparisonFuncArr = comparisonFuncArr;
  this.array = new Array();
}
SortedArray.prototype.compare = function(a, b){
  for(let i = 0; i < this.comparisonFuncArr.length; i++){
        
  }
}
SortedArray.prototype.insert = function(element){

}
SortedArray.prototype.delete = function(index){
  this.array.splice(index, 1);
}
SortedArray.prototype.get = function(index){
  return this.array[index];
}