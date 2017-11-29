var script = document.createElement('script');
script.src = 'js/Tape.js';
document.getElementsByTagName('head')[0].appendChild(script);

var script = document.createElement('script');
script.src = 'js/Stack.js';
document.getElementsByTagName('head')[0].appendChild(script);

class Automat {

    constructor() {
        /**
         * Состояние автомата
         * @type {Number}
         */
        this.q = 0;
        /**
         * Правила перехода
         * @type {Array}
         */
        this.rulez = [];
        /**
         * Результат работы автомата
         * @type {String}
         */
        this.rezult = "Успешно! Данная цепочка принадлежит языку";
        /**
         * Информация об ошибки
         * @type {String}
         */
        this.ps = "";
        this.table = [];
    }

    work(input) {
        this.init();
        var tape = new Tape(input);
        var stack = new Stack();
        var strEndTape = tape.getSymbol();
        var strEndStack = stack.getSymbol();
        this.createRulez(strEndStack, strEndTape);

        var str = tape.getTape();
        // определение длины цепочки
        var lenTape = str.length;

        for (var i = 0; i < lenTape; i++) {
            var magazine = stack.getStack(); // элементы магазина
            var symbol = str[i]; //  элементы входной строки
            var upStack = stack.top();

            // занесение результатов в таблицу функций перехода
            this.table.push("<tr><td>" + magazine + "</td><td>" + this.q + "</td><td>" + str.substring(i) + "</td></tr>");
            for (var j = 0; j < 5; j++) {
                if (this.q == this.rulez[j][0] && // поиск состояния автомата
                        symbol == this.rulez[j][1] && // поиск входного символа
                        upStack == this.rulez[j][2]) { // поиск состояния магазина

                    this.q = this.rulez[j][3]; // переход в следующее состояние

                    switch (this.rulez[j][4]) {
                        case "add":
                            stack.push(str[i]);
                            break;
                        case "del":
                            stack.del();
                            break;
                        case "good":
                            return;
                            break;
                    } // switch
                    break;
                } // if

                if ((j == 4) && ((symbol != strEndTape) || (upStack != strEndStack))) {
                    this.setRezult("Ошибка:  данная цепочка не принадлежит языку - печалька((( ");
                    if ((symbol == strEndTape) && (upStack == 0)) {
                        this.setPS("P.S. Нулей больше, чем единиц");
                    } else if ((symbol == "1") && (upStack == stack.END_STACK)) {
                        this.setPS("P.S. Нулей меньше, чем единиц");
                    } else {
                        this.setPS("P.S. Неизвестный символ");
                        var input = document.getElementById("tape");
                        input.focus();
                        input.setSelectionRange(i, i + 1);
                    }
                    return;
                }
            } // for {j}
        } // for {i}

    }
    init() {
        this.q = 0;
        this.rulez = [];
        this.rezult = "Успешно! Данная цепочка принадлежит языку";
        this.ps = "";
        //table = [];
    }

    /**
     * Создание правил перехода
     * @return {undefined}
     */
    createRulez(endStack, endTape) {
        this.rulez = [
            [0, "0", endStack, 1, "add"],
            [1, "0", "0", 1, "add"],
            [1, "1", "0", 2, "del"],
            [2, "1", "0", 2, "del"],
            [2, endStack, endTape, 1, "good"]
        ];
    }
    /**
     * Установка результата работы автомата
     * @param {String} rez результата работы автомата
     */
    setRezult(rez) {
        this.rezult = rez;
    }
    /**
     * Получить результат работы автомата
     * @return {String} результат работы автомата
     */
    getRezult() {
        return this.rezult + "\n" + this.ps;
    }
    /**
     * Установить информацию об ошибке в работе автомата
     * @param {String} str информация об ошибке в работе автомата
     */
    setPS(str) {
        this.ps = str;
    }
    /**
     * Получить таблицу переходов
     * @return {Array}
     */
    getTable() {
        return this.table;
    }
}


