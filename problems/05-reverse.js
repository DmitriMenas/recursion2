/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


// function reverse(str) {
//   let arr = str.split("");
//   if(arr.length !== arr.length*2){
//     let last = arr[arr.length - 1];
//     arr.unshift(last);
//     str = arr.join("");
//     reverse(str);
//   }
//   return str.slice(str.length / 2);
// }

function reverse(str){
  let arr = str.split("");
  if(!arr.length){
    return "";
  }
  let last = arr.pop();
  return last += reverse(arr.join(""))
}
console.log(reverse("house"))
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;

}
