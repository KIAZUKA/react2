// function func1(str) {
//   return str;
// }
// const func1 = function(str) { 
//   return str;
// }
// console.log(func1("hell"));

// //アロー関数
// const func2 = (str) =>  str;
// console.log(func2("hell2"))

//2つの引数をタスやつ
// const func = (num1, num2) => {
//   return num1 / num2
// };
// console.log(func(22, 7));

// // 分割代入
// ↓オブジェクト
// const pro = {
//   name:"fan",
//   age: 24,
// };

// const {name, age } = pro;
// const mess = `name is ${name}, age is ${age}`;
// console.log(mess);

// cosnt 
//↓配列
// const pro = ['pop',29];
// const mess = `name is ${pro[0]}, age is${pro[1]}`;
// console.log(mess);

// const [name, age] = pro;
// const mess2 =`name is ${name},age is ${age}`;
// console.log(mess2);

// //デフォルト値

// const sayhi = (name = "ゲスト") => console.log(`${name}さん!`);
// sayhi();

// スプレッド構文

//配列の展開
// const arr1 =[1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sum = (num1,num2) => console.log(num1 + num2);
// sum(arr1[0], arr1[1]);
// sum(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列コピー結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr4);
// console.log(arr6);
// const arr7 =[...arr4, ...arr5]; 
// console.log(arr7);
// const arr8 =arr4;
// arr8[0] = 100;
// console.log(arr8);

//mapやfilterを使った処理
// const namearr = ["ja","je","ojo"];
//  for (let index = 0 + 1; index < namearr.lenght; index++){
//    console.log(`${index}is${namearr[index]}`);
//  }


// const namearr2 = namearr.map((name) =>{
//   return name;
// })
// console.log(namearr2)
//namearr.map((name, index) => console.log(`${index + 1} is ${name} death`));

// const numarr = [1, 2, 3, 4, 5];
// const newnumarr = numarr.filter((num) => {
//   return num % 2 === 1; 
// });
// console.log(newnumarr);

// const newnamearr = namearr.map((name) => {
//   if (name === "jojo"){
//    return name
//   } else {
//     return `${name}`
//   }
// })
// console.log(newnamearr);

//mapの基本的な構文↓リターンされた結果に基づいて処理をする
// const namearr2 = namearr.map(()=>{
//   return name;
// })
// console.log(namearr2);
// 
//↓配列をループして処理をする
// namearr.map((name) => console.log(name));

// const numarr= [1, 2, 3, 4, 5];
// const newnumarr = numarr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newnumarr);

// const newnamearr = namearr.map((name) => {
//   if (name === "ja"){
//     return name
//   }else{
//     return `${name}San`
//   }
// })
// console.log(newnamearr);

//三項演算子

//ある条件？　条件がtrueの時　条件がfalseの時
// const val1 = 1 > 0 ? 'true' : 'false'
// console.log(val1);

// const num = 1300000000;
// //console.log(num.toLocaleString());

// const formattednum = typeof num === `number` ? num.toLocaleString():'Number only'
// console.log(formattednum);

// const checksum = (num1, num2) => {
//   return num1 +  num2 > 100 ? 'over 100':'lower 100';
// }
// console.log(checksum(50,60));

//論理演算子とは

// const flag = true;
// const flag2 = false;

// if (flag || flag2){
//   console.log("1 or 2 are true");
// // }
// // if (flag && flag2) {
// //   console.log("1 and 2 are true");
// // }

// // ||とは左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "Plese set your blance"
// console.log(fee);

// &&左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "something happen";
console.log(fee2);
