class Tape {

    constructor(str) {
        /**
         * Конечный символ строки
         * @type {String}
         */
        this.END_STR = "e";
        /**
         * Входная последовательность
         * @type {String}
         */
        this.tape = str + this.END_STR;
    }

    /**
     * Получение входной последовательности целиком
     */
    getTape() {
        return this.tape;
    }
    /**
     * Получение символа из входной последовательности
     * @param {number} pos позиция для считывания символа
     * @return {String} символ из входной последовательности на позици pos
     */
//    getTape(pos) {
//        var str = .tape.substring(pos, 1);
//        return str;
//    }
//    getTape(start, end) {
//        return this.tape.substring(start, end);
//    }
    getSymbol() {
        return this.END_STR;
    }

}
