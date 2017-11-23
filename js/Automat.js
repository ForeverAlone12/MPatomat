var automat = {
    /**
     * Состояние автомата
     * @type {Number}
     */
    q: 0,
    /**
     * Правила перехода
     * @type {Array}
     */
    rulez: [],
    /**
     * Результат работы автомата
     * @type {String}
     */
    rezult: "",
    /**
     * Информация об ошибки
     * @type {String}
     */
    ps: "",
    table: [],
    
    work: function (str) {
        var tape = new tape();
        tape.setTape(str);
        var stack = new stack();
        stack.create();
        this.createRulez();
        // определение длины цепочки
        lenTape = tape.getTape().length;
        str = tape.getTape();
        for (var i = 0; i < lenTape; i++) {
            var magazine = stack.getStack(); // элементы магазина
            var tape = str.slice(i); //  элементы входной строки
            var symbol = tape.getTape(i);
            var upStack = stack.top();
            // занесение результатов в таблицу функций перехода
            table.push("<tr><td>" + magazine + "</td><td>" + q + "</td><td>" + tape + "</td></tr>");
            for (var j = 0; j < 5; j++) {
                if (q == rulez[j][0] && // поиск состояния автомата
                        symbol == rulez[j][1] && // поиск входного символа
                        upStack == rulez[j][2]) { // поиск состояния магазина

                    q = rulez[j][3]; // переход в следующее состояние

                    switch (rulez[j][4]) {
                        case "add":
                            stack.push(str[i]);
                            break;
                        case "del":
                            stack.del();
                            break;
                        case "good":
                            this.getRezult();
                            break;
                    } // switch
                    break;
                } // if

                if ((j == 4) && ((symbol != tape.END_STR) || (upStack != stack.END_STACK))) {
                    this.setRezult("Ошибка:  данная цепочка не принадлежит языку - печалька((( ");
                    if ((symbol == tape.END_STR) && (upStack == 0)) {
                        this.setPS("P.S. Нулей больше, чем единиц");
                    } else if ((symbol == "1") && (upStack == stack.END_STACK)) {
                        setPS("P.S. Нулей меньше, чем единиц");
                    } else {
                        setPS("P.S. Неизвестный символ");
                        var input = document.getElementById("tape");
                        input.focus();
                        input.setSelectionRange(i, i + 1);
                    }

                    return;
                }


            } // for {j}
        } // for {i}


    },
    /**
     * Создание правил перехода
     * @return {undefined}
     */
    createRulez: function () {
        rulez = [
            [0, "0", stack.END_STACK, 1, "add"],
            [1, "0", "0", 1, "add"],
            [1, "1", "0", 2, "del"],
            [2, "1", "0", 2, "del"],
            [2, stack.END_STACK, tape.END_STR, 1, "good"]
        ];
    },
    /**
     * Установка результата работы автомата
     * @param {String} rez результата работы автомата
     */
    setReazult: function (rez) {
        rezult = rez;
    },
    /**
     * Получить результат работы автомата
     * @return {String} результат работы автомата
     */
    getRezult: function () {
        alert(rezult + "\n" + ps);

    },
    /**
     * Установить информацию об ошибке в работе автомата
     * @param {String} str информация об ошибке в работе автомата
     */
    setPS: function (str) {
        ps = str;
    }, 
    /**
     * Получить таблицу переходов
     * @return {Array}
     */
    getTable:function(){
        return this.table;
    }
};


