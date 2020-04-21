

function fnSum() {
    var value1 = +document.querySelector(`#val_1`).value;
    var value2 = +document.querySelector(`#val_2`).value;
    let sum = (value1 + value2);
    document.querySelector(`#calc__result`).innerHTML = (`${value1} + ${value2} = ${sum}`);
}
function fnSubtr() {
    var value1 = +document.querySelector(`#val_1`).value;
    var value2 = +document.querySelector(`#val_2`).value;
    let subtr = (value1 - value2);
    document.querySelector(`#calc__result`).innerHTML = (`${value1} - ${value2} = ${subtr}`);
}
function fnMulti() {
    var value1 = +document.querySelector(`#val_1`).value;
    var value2 = +document.querySelector(`#val_2`).value;
    let multi = (value1 * value2);
    document.querySelector(`#calc__result`).innerHTML = (`${value1} x ${value2} = ${multi}`);
}

function fnDiv() {
    var value1 = +document.querySelector(`#val_1`).value;
    var value2 = +document.querySelector(`#val_2`).value;
    let div = (value1 / value2);
    document.querySelector(`#calc__result`).innerHTML = (div);
}

function fnValPlusN() {
    
    document.querySelector(`calc__result`).innerHTML += document.querySelector(`.calc__val`).value;

}

function fnForm() {
    
    var value1 = +document.querySelector(`#calc__result`);
    console.log(value1);
    var fName = document.querySelector(`#formName`).value;
    // let fMail = document.getElementById(`eMail`).value;
    // let fNumber = document.getElementById(`numValue`).value;
    // let fPhone = document.getElementById(`tel`).value;
  
    document.querySelector(`#otp_name`).innerHTML = (fName);
    // document.getElementById(`otp_mail`).innerHTML = (fMail);
    // document.getElementById(`otp_number`).innerHTML = (fNumber);
    // document.getElementById(`otp_phone`).innerHTML = (fPhone);
}
// const wrap = document.querySelector(`#short__list`);
// console.log (wrap);

let liSt = document.querySelectorAll(`#short__list li .name`);

Array.from(liSt).forEach(function(liSt1){
    liSt1.textContent += ` (Бук тайтл)`;
})

let aa = document.querySelector(`#calc__result`);
// var aaa = +document.getElementById(`calc__result`);
console.log(aa.textContent);

function insert(num) {
    document.querySelector(`.calc__result-new`).innerHTML = 
    document.querySelector(`.calc__result-new`).innerHTML + num ;
}

function equal () {
    let exp = document.querySelector(`.calc__result-new`).innerHTML;
    if (exp) {
        document.querySelector(`.calc__result-new`).innerHTML = eval(exp);
    }
}

function clean () {
    document.querySelector(`.calc__result-new`).innerHTML = ``;
}

function insertName() {
    var val = document.querySelector(`.name_kekios`).value;
    if (val==`Привет, мир!`) {
        alert (`Все правильно, привет и тебе`);
    } 
     else { alert (val + document.querySelector(`.calc__result-new`).innerHTML);}
}

var event = document.querySelector(`.hello__btn`) ;
event.addEventListener(`click`, () => {
    console.log (`Первое приветствие`);
});

const testDiv = document.querySelector(`.test__div`);
const testButton = document.querySelector(`.test__button`);
const infoField = document.querySelector(`.info__field`);

const listStyle = document.querySelector (`.list__style`);
const btnAddLi = document.querySelector(`.btn__add-item`);
const resetBtn = document.querySelector(`#reset__btn`);
const cleanBtn = document.querySelector(`#clean__btn`);
const popUp = document.querySelector(`.popup__div`);
const popUpWrap = document.querySelector(`.popup__wrap`);
const closePopup = document.querySelector (`.popup__close`);

closePopup.onclick = () => {
    popUp.style.display ="none";
}

    btnAddLi.addEventListener(`click`, () => {
    const li = document.createElement(`li`);
    li.setAttribute ("class", "li__item");
    var itemLength = 1 + document.getElementsByClassName(`li__item`).length;
    li.textContent = `Пункт ` + itemLength++;
    li.addEventListener (`click`, () => {
        popUp.style.display ="initial";
        popUpWrap.innerHTML = (`Вы кликнули на ${li.textContent}`);
    })
    listStyle.appendChild(li);
});

    resetBtn.addEventListener(`click`, () => {
        var clean = document.querySelector(`.li__item:last-child`);
        listStyle.removeChild(clean);
    });

    cleanBtn.addEventListener(`click`, () => {
        // var clean = document.querySelectorAll(`.li__item`);
        listStyle.innerHTML="";
        //  listStyle.removeChild(clean);
            
    });




