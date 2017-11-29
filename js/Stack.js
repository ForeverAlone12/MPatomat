class Stack {

    constructor() {
        /**
         * Конечный символ цепочки
         * @type {String}
         */
        this.END_STACK = "e";
        /**
         * Магазин
         * @type {Array}
         */
        this.stack = [];

        this.stack.splice(0, 0, this.END_STACK);
    }
    /**
     * Вставка символа в начало магазина
     * @param {type} symbol символ для вставки
     */

    push(symbol) {
        this.stack.splice(0, 0, symbol);
    }
    /**
     * Удаление верхнего символа из магазина
     */
    del() {
        this.stack.splice(0, 1);
    }
    /**
     * Получение верхнего символа стека
     * @return {String} верхний символ стека
     */
    top() {
        return this.stack[0];
    }

    /**
     * Получение символов, находящихся в стеке
     * @return {String}
     */
    getStack() {
        return this.stack.join();
    }

    getSymbol() {
        return this.END_STACK;
    }
}
;

