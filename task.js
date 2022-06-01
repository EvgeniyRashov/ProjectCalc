// // // Написать функцию, которая 
// // // принимает два числа и возращает результат их умножения
// // const getNumber = (a,b) => {
// //     return a * b;
// // }
// // console.log(getNumber(10,2));
// // //Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17 лет" 
// // //(только здесь данные, которые были переданы в функцию)

// // const getFirstLastName = (name,surname,age) => {
// //     let resault = 'Привет ' + name + ' ' + surname + ' с возрастом ' + age + ' лет';
// //     return resault;

// // }
// // console.log(getFirstLastName('Иван','Петров',17));


// // // //Написать функцию, которая принимает пол человека ('M','F') 
// // // в виде строки, результат функции возвращает строку 
// // // "Ваш пол мужской" (или женский) или же "Ваш пол не опеределен"

// // const genderPerson = (m,f) => {
    
// // }

// // // Алгорим бинарного поиска.
// // let array = [-1,0,3,5,7,9,12];

// // let search = function (nums, target)  {
// //     let left = 0; //начало массива
// //     let right = nums.length - 1; // конец массива
// //     let mid;

// //     while (left <= right) { //*будем итерироваться по левая часть будет меньше ли равно правой*//
// //         mid = Math.round((right-left)/2) + left;

// //         if ( target === nums[mid]) {
// //             return mid;
// //         }else if (target < nums[mid]) {
// //             right = mid - 1;
// //         }else {
// //             left = mid + 1;
// //         }
// //     }
// //     return -1;

// // }
// // console.log(search(array, 9));


// // Метод ForEach 
// // const items = ['item1', 'item2', 'item3'];
// // const copy = [];

// // // for (let i = 0;  i < items.length; i++) {
// // //     copy.push('New' + items[i]);

// // // }
// // items.forEach (function(elem,index,array) {
// //     copy.push(index + 'New' + elem)
// //  });// Прошлись по какием то элементам  и выполнили какие-то действия, 
// //  //если используем метод forEach  на каком то эдементе у нас нету возможности прирвать итерирование.
// // console.log(copy);


// // Метод filter, примет отфилторвать числа которые больше 15
// let array = [123,12,233,10,13];

// let newArray = array.filter(function(elem){
//     return elem > 15;
// })
// // Используем функцию callback
// console.log(newArray);

// Метод MAP Будет возращаьб нам новый массив. Каждое число из массива умножаем на 2
// let nums = [132,12,2,23,3];

// // let resault = nums.map(function(elem) {
// //     return elem * 2;
// // })
// // сакращенная версия

// let resault = nums.map((elem) => elem*2);
// // еще один вариант 

// console.log(resault);



//Метод REDUCE 
// let nums = [1,2,3,4,5]; //Собираем вместе чиловые элементы

// let resault = nums.reduce(function(acc,elem){
//     return acc + elem;
// },10 )
// console.log (resault);
// Метод Reduce для строк и доавление в обьект
//  let fruits = ['banana','apple','peach','orange'];

//  let array = fruits.reduce(function(acc,elem) {
//    /* к текущему аккумулятору добавить новый ключ*/ acc[elem] = 1; /*значение будет еденица*/
//    return acc;
//  }, {})
//  console.log(array);
 //усложняем задачу если в массиве есть повоторяющиеся фрукты 

//  let fruits = ['banana','apple','peach','orange','orange','apple'];

//  let array = fruits.reduce(function(acc,elem) {
//      if (acc[elem]){
//          acc[elem] +=1;
//      }else {
//          acc[elem] = 1;
//      }
    
//     return acc;
//   }, {})
//   console.log(array);


// Функция debounce
const debounce = (fn,ms) => {
    let timeout;
    return function () {
        const fnCall = () => { fn.apply(this, arguments)}
        clearTimeout(timeout);
        timeout = setTimeout(fnCall,ms);

    };
}
function onChange (e) {
    console.log(e.target.value)

}
onChange =debounce(onChange, 200);

document.getElementById('search').addEventListener('keyup',onChange);
