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
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "mo";
// const age = 28;

// //従来の方法
// const message1 = "私の名前は" + name + "です．年齢は" + age + "です．";
// console.log(message1);

// //テンプレート文字列を用いると，，
// const message2 = `私の名前は${name}です．年齢は${age}です．`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("Yhaa!"));

//アロー関数
// const func2 = (str) => {
//   return str;
// };
//処理が一行のときはreturn省略もできる
const func2 = (str) => str;
console.log(func2("Yhaaaaaaa"));

// const func3 = (num1,num2) => {
//   return num1 + num2;
// };
const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name:"mo",
//   age:28,
// };

// const message1 = `名前は${myProfile.name}です．年齢は${myProfile.age}です．`;
// console.log(message1);

// //上記だと毎回「myProfile」を書かないとなので冗長だよね．下記の分割代入を使用するとスッキリ
// const {name,age} = myProfile;
// const message2 = `名前は${name}です．年齢は${age}です．`;
// console.log(message2);

//配列の従来と分割代入
// const myProfile = ["mo", 28];
// const message3 = `名前は${myProfile[0]}です．年齢は${myProfile[1]}です．`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です．年齢は${age}です．`;
// console.log(message4);

/**
 * デフォルト値，引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは．${name}さん！．`);
// sayHello();

/**
 * スプレッド構文 どっと三つ
 */
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const[num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー，結合
const arr4 = [10, 20];
const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

//イコールにしてしまうとarr8のみに変更を加えた時arr4にも影響が．．参照
const arr8 = arr4;
arr8[0] = 100;
console.log(arr4);
