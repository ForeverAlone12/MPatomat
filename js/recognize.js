var automat = new automat();
/**
 * Непрерывный режим работы
 */
function work() {
    this.automat.work(this.read());
    var rez = [];
    rez = this.automat.getTable();
    for (var i = 0; i < rez.length; i++) {
        $("table").add(rez[i]);
    }
}

var q = 0;
var k = 0;
/**
 * Пошаговый
 */
function w() {
    if (this.q == 0)
    {
        this.automat.work(this.read());
        k = 0;
        q = 1;
    } else
    {
        if (k < JumpFunction.Count)
            $("table").add(rez[k++]);
        if (k == JumpFunction.Count)
            q = 0;

    }
}

/**
 * Считывание цепочки
 */
function read() {
    return $("tape").val();
}



