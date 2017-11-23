var tape = {
    /**
     * Конечный символ строки
     * @type {String}
     */
    END_STR: "e",
    /**
     * Входная последовательность
     * @type {String}
     */
    tape: "",
    /**
     * Установить цепочку
     * @param {String} str входная цепочку 
     */
    setTape: function (str) {
        this.tape = str.trim() + this.END_STR;
    },
    /**
     * Получение входной последовательности целиком
     */
    getTape: function () {
        return this.tape;
    },
    /**
     * Получение символа из входной последовательности
     * @param {number} pos позиция для считывания символа
     * @return {String} символ из входной последовательности на позици pos
     */
    getTape: function (pos) {
        return this.tape.substring(pos, 1);
    },
    getTape: function (start, end) {
        return this.tape.substring(start, end);
    }
};
