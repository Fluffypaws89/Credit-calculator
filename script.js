// function fun1() {
//     let chbox;
//     chbox = document.getElementById(`chk1`);

//     if (chbox.checked) {
//         alert(`Выбран`)
//     } else {
//         alert(`Не выбран`);
//     }
// }

// function fun2() {
//     let radio1 = document.getElementsByName(`r1`);
//     for (let i = 0; i < radio1.length; i++) {
//         if (radio1[i].checked) {
//             alert(`Выбран` + [i] + `элемент`);
//         }
//     }
// }

//!!!!!!!!!!!!!
// let a = +prompt(`Введите число а`)
// let b = +prompt(`Введите число b`)

// function sum(a, b) {
//     return a + b;
// }
// alert (`Сумма равна ${sum(a,b)}`);
// let res1 = sum(a, b);

// function mef(a, b) {
//     return (a*b);    
// }
// let res2 = mef(a, b);
// alert (`Множество равно ${mef(a,b)}`);

// function value(res1, res2) {
//     return (res1+res2);
// }
// let res3 = value(a, b);
// alert (`Сумма двух функций = ${res3}`);
//!!!!!!!!!!!!!!!!!

// let s = [1, 2, 3, 4, 5, 6];
// let s2 = s.map(n => n * n);
// let s2 = s.map (function (square) {
//     return square+3;
// });




// function filter(arr, someFn) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (someFn(arr[i]) === true) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// let a = [1, 5, 7, 7, 4, 5, 34, 20];

// function greater(than) {
//     return function (number) {
//         return number > than;
//     }
// }

// for (let i = 1;   i<=10; i++) {
//     let result = filter (a, greater(i));
//     console.log (i, result);
// }




// function pow(a, n) {
//     if (n==1) {
//         return a;
//     }
//     else { 
//         return a*pow(a, n-1);
//     }
// }

// console.log (pow (2, 3)); 




// console.log (`результат: ${fn (1, 3)}`);

// function fn(a, b) {
//     return (a+b);
// }

//Задание 1

function returnFirstArguments(arg) {
    return arg;    
}
console.log (`Задание 1. ответ: ${returnFirstArguments(5)}`);

//Вариант 2
function returnFirstArguments1(arg) {
    var arg = 3;
    return arg;
}
console.log (`Задание 1. вариант 2 ответ: ${returnFirstArguments1()}`);

//Задание 2
// function defaultParameterValue(a, b) {
//     if (a <10) {
//         alert (`а меньше 10`);
//     } else {
//     var b = 100;
//     return (a+b);
// }
// }
// console.log (`Задание 2, ответ: ${defaultParameterValue(11)}`);

//Задание 3

// var function = returnArgumentsArray() {
//     var arr = [];
//     arr.push = returnArgumentsArray();
//     return arr();
// }
// console.log (returnArgumentsArray(2, 3, 5, 6, 7));

//Заданиче 4

// function returnFnResult(fn) {
//     fn(c, d) {
//         let c= 5;
//         let d= 3;
//         let result = (c+d);
//         return result;
//     }
//     return (fn)
// }

// console.log (returnFnResult(fn));

// var obj = {
//     name: `Сергей`,
//     lastName: `Мелюков`,
//     otherProp: `kek`,
//     age: `18`,
//     };
//     obj.prop = 123;
//     var keys = Object.keys(obj);
//     // console.log(keys);
    
//     for (var i=0; i<keys.length; i++) {
//         var key = keys[i];
//         console.log(key + `: ` + obj[key]);
//     }

// Object.defineProperty (obj, 'prop', {
//     enumerable: false,
//     value: `loftschool`,
//     writable: false,
// });

//     for (var prop in obj) {
//         console.log(prop);
//     }

//     console.log (`>>>>>`, obj.prop);
//     obj.prop = 'Привет';
//     console.log (`>>>>>`, obj.prop);
    
//     var keys = Object.keys(obj);

//     console.log (keys);



    // var a = [`Привет`, `Кек`, `Чебурек`];
    // a[0] = `Чек`;
    // a[3] = `Чекек`;
    // a[4] = `Кук`;
    // console.log (a);
    // console.log (`Показываю третий элемент:`,a[3]);
    // // console.log (`Покажи третий элемент: `a[3]);
    // a.splice (1, 0, `добавим`);
    // console.log (a);

    var obj1 = {
        name: `Валерий`,
        surName: `Сысоев`,
        age: `1`,
    }
    var obj2 = {
        name: `Валерий`,
        surName: `Сысоев`,
        male: `male`,
        age: `31`,
    }


    let a = Object.keys(obj1).length;

    if (Object.keys(obj1).length>Object.keys(obj2).length) {
        console.log (`Первый объект больше второго`)
    } else if (Object.keys(obj1).length<Object.keys(obj2).length) {
        console.log (`Второй объект больше первого`)
    } else console.log (`Объекты равны`);

    obj1.address = `г. Красноярск`;

   for (let key in obj1) {
       console.log (key,`:`, obj1[key]);
   }


   function agetostr(age) {
	var txt;
	count = age % 100;
	if (count >= 5 && count <= 20) {
		txt = 'лет';
	} else {
		count = count % 10;
		if (count == 1) {
			txt = 'год';
		} else if (count >= 2 && count <= 4) {
			txt = 'года';
		} else {
			txt = 'лет';
		}
	}
	return age+" "+txt;
}



   if (obj1.age>30) {
       console.log (`Ебать ты стар чувак, тебе же ${agetostr(obj1.age)}`);
   }
//    alert (agetostr(obj1.age))


