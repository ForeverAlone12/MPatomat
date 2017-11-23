var stack = {
    /**
     * Конечный символ цепочки
     * @type {String}
     */
    END_STACK: "e",
    /**
     * Магазин
     * @type {Array}
     */
    stack: [],
    /**
     * Вставка символа в начало магазина
     * @param {type} symbol символ для вставки
     */
    push: function (symbol) {
        this.stack.splice(0, 0, symbol);
    },
    /**
     * Удаление верхнего символа из магазина
     */
    del: function () {
        this.stack.splice(0, 1);
    },
    /**
     * Получение верхнего символа стека
     * @return {String} верхний символ стека
     */
    top: function(){
        return this.stack[0];
    },
    /**
     * Инициализация стэка
     */
    create:function(){
        this.stack.splice(0, 0, END_STACK);
    }, 
    /**
     * 
     * @return {undefined}
     */
    getStack:function(){
        return this.stack.join();
    }
};

