/**
 * Магазин
 * @type {Array}
 */
var stack = [];

/**
 * Правила прехода
 * @type Array
 */
var rulez = [,];

/**
 * Данные для внесения в таблицу, состоящие из столбцов:
 * @type Array
 */
var table = [];




/**
 * Вывод результата работы автомата
 * @return {undefined}
 */
function good() {
    alert(rezult+"\n"+ps);
}

/** 
 * Считывание исходных данных
 * @returns {undefined|Boolean|rezult}
 */
function readInfo(){
    $("#tabl1").empty(); // очистка таблицы
    str = $("#tape").val(); // считывание данных входной строки
    stack = []; // очистка магазина
        table = [];
        createRulez();
        push(END_STACK);
        q = 0;
        str += END_STR;
        count = 0;
}

/**
 * Запуск непрерывного режима разбора цепочки
 * @return {rezult|Boolean|undefined}
 */
function work() {
    readInfo();
    

    if (str.trim() == "")
        alert("Введите цепочку символов");
    else {       

        run(); // разбор цепочки 

        for (var i = 0; i < count; i++) {
            rez(i);
        }
        good();
    }

}

/**
 * Разбор цепочки
 * @returns {undefined}
 * 
 */
function run() {
    count = 0;
    for (var i = 0; i < str.length; i++) {

        var magazine = stack.join(); // элементы магазина
        var tape = str.slice(i); //  элементы входной строки

        // занесение результатов в таблицу функций перехода
        //$("#tabl1").append("<tr><td>" + magazine + "</td><td>" + q + "</td><td>" + tape + "</td></tr>");
        table.push("<tr><td>" + magazine + "</td><td>" + q + "</td><td>" + tape + "</td></tr>");
        count++;
        for (var j = 0; j < 5; j++) {
            if (q == rulez[j][0] && // поиск состояния автомата
                    str[i] == rulez[j][1] && // поиск входного символа
                    stack[0] == rulez[j][2]) {    // поиск состояния магазина
                //  console.log("Выполняется действие: " + rulez[j][4]);

                q = rulez[j][3]; // переход в следующее состояние

                switch (rulez[j][4]) {
                    case "add":
                        stack.push()
                        break;
                    case "del":
                        del();
                        break;
                    case "good":
                        good();
                        break;
                } // switch
                break;
            }  // if

            if ((j == 4) && ((str[i] != END_STR) || (stack[0] != END_STACK))) {
                rezult = "Ошибка:  данная цепочка не принадлежит языку - печалька((( ";
                if ((str[i] == END_STR) && (stack[0] == 0)) {
                    ps = "P.S. Нулей больше, чем единиц";
                } else if ((str[i] == "1") && (stack[0] == END_STACK)) {
                    ps = "P.S. Нулей меньше, чем единиц";
                } else {
                    ps = "P.S. Неизвестный символ";
                    var input = document.getElementById("tape");
                    input.focus();
                    input.setSelectionRange(i, i + 1);
                }

                return;
            }
        } // for {j}
    } // for {i}
    rezult = "Уряяя!!!! Данная цепочка принадлежит";
}

/**
 * Вывод таблицы функций перехода
 * @return {undefined}
 */
function rez(i) {
    $("#tabl1").append(table[i]);
}

/**
 * Пошаговый режим разбора цепочки
 * @return {undefined}
 */
function w() {

    if (step == 0) {  
        readInfo();
        run();
        wer = 0;
        step = 1;
    } 
    if (wer < count) {
        rez(wer);
        wer++;        
    }
    if (wer == count) {
        step = 0;
    }
    good();
}





