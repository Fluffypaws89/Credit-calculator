const creditSum = document.querySelector(`#credit__sum`);
var creditSumRange = document.querySelector(`#credit__sum-range`);
var creditTime = document.querySelector(`#credit__time`);
var creditTimeRange = document.querySelector(`#credit__time-range`);
var creditPecent = document.querySelector(`#credit__percent`);
var btnCalculate = document.querySelector(`#credit__send`);
var showForm = document.querySelector(`.credit__form-wrap`);

creditSum.innerHTML = creditSumRange.value;
creditSumRange.oninput = function() {
    creditSum.innerHTML = this.value + " руб.";
};

creditTime.innerHTML = creditTimeRange.value;
creditTimeRange.oninput = function() {
    creditTime.innerHTML = this.value + " мес.";
};

var crSum = document.querySelector(`#form__credit-sum`);
var crPerc = document.querySelector(`#form__credit-sum`);
var crTime = document.querySelector(`#form__percent-value`);
var crPayment = document.querySelector(`#form__credit-payment`);
var overPerc = document.querySelector(`#form__over-percent`);

// Переменные для рассчета кредита по платежам
creditMonth = document.querySelector(`#credit__form-month`);
creditCost = document.querySelector(`#credit__form-month-cost`);
creditMonthPercent = document.querySelector(`#credit__form-month-percent`);
creditPrincipalDebt = document.querySelector(`#credit__form-principal-debt`);
creditRemainingDebt = document.querySelector(`#form-remaining-debt`);

// Переменная таблицы
creditTable = document.querySelector(`#form__table`);



// Действие по кнопке РАССЧИТАТЬ
btnCalculate.addEventListener (`click`, ()=> {
    showForm.style.display ="block";

    // Сумма с процентами
    let sum = +creditSumRange.value+(creditSumRange.value*0.1);
    crSum.innerHTML = (sum.toLocaleString('ru-RU') +` р.`).toLocaleString('ru-RU');

    // Месяцев
    let time = creditTimeRange.value;
    crTime.innerHTML = (time);

    // Платеж в месяц
    let payment = sum/time;
    crPayment.innerHTML = Math.floor(payment).toLocaleString('ru-RU') + ` р/мес.`;

    // Проценты
    let over = creditSumRange.value*0.1;
    overPerc.innerHTML = over.toLocaleString('ru-RU') + ` р.`;

    // Задаем переменную как число (основной долг)
    var bb=0; 
    // Задаем переменную как число (оcтаток долга)
    var aa=0; 

    // Заполнение таблицы формы
    for (let i=1; i<=creditTimeRange.value; i++ ) {
        var row = creditTable.insertRow();

        var creditMonth = row.insertCell(0);
        var creditCost = row.insertCell(1);
        var creditMonthPercent = row.insertCell(2);
        var creditPrincipalDebt = row.insertCell(3);
        var creditRemainingDebt = row.insertCell(4);
        
        // bb;// Расчет Основного долга, вводим переменную bb
        bb += payment;
        aa = sum-bb;

        
        creditMonth.innerHTML = i;
        creditCost.innerHTML = Math.floor(payment).toLocaleString('ru-RU');
        creditMonthPercent.innerHTML = Math.floor(payment-(creditSumRange.value/creditTimeRange.value)).toLocaleString('ru-RU');
        creditPrincipalDebt.innerHTML = Math.floor(bb).toLocaleString('ru-RU');
        creditRemainingDebt.innerHTML = Math.floor(aa).toLocaleString('ru-RU');
    }

});


