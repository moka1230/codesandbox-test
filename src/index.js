/**
 * const,let等の変数宣言
 */
// var vall = "var変数";
// console.log(vall);

// //var変数は上書き可能
// vall = "上書き";
// console.log(vall);

// //var変数を再宣言
// var vall = "再宣言";
// console.log(vall);

// let val2 = "let変数";
// console.log(val2);

// // //let変数は上書き可能
// val2 = "上書き";
// console.log(val2);

// //let変数を再宣言不可
// let val2 = "再宣言";

// const val3 = "const変数";
// console.log(val3);

// // //let変数は上書き不可
// //val3 = "上書き";

// //let変数を再宣言不可
// const val3 = "再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "mo",
//   age: 28
// };
// val4.name = "mooo";
// val4.address = "aa";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);
