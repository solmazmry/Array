// Arrayin minimum elementini tapən
// let arr = [200, 300, 500, 567, 7000, 9, 70];
// let min = arr[ 0];
// for (let i = 0; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }
// console.log(min);

// Arrayin min və max elementlərini dəyişin
// let arr = [200, 300, 500, 567, 7000, 9, 70];
// let min = arr[0];
// let max = arr[0];
// let minQiymet = 0;
// let maxQiymet = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i]; //9
//     minQiymet = i;
//   } else if (max < arr[i]) {
//     max = arr[i]; //7000
//     maxQiymet = i;
//   }
// }
// let a = arr[minQiymet]; // a=9
// arr[minQiymet] = arr[maxQiymet]; //9=7000 minQiymetin yerinde olur 7000
// arr[maxQiymet] = a; // 7000 =9 max qiymetin yerinde 9 olur
// console.log(arr);

// Arrayin elementlərini artan sıra ilə düzün
let arr = [200, 300, 500, 567, 7000, 9, 70];
let bosh=[ ]
for(let i=0; i<arr.length; i++ ){ 
  for(let j=i+1; j<arr.length; j++ ){
    if(arr[j]<arr[i]){
    boch= arr[i]; //i=200 olur boch=200
    arr[i]=arr[j]; //i=0 j=5 index
    arr[j]=boch; //300

    }
  }
}
console.log(arr);