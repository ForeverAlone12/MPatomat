var script = document.createElement('script');
script.src = 'js/Automat.js';
document.getElementsByTagName('head')[0].appendChild(script);


/**
 * Непрерывный режим работы
 */
function work() {
    $("#tabl1").empty();
    var a = new Automat();
    a.work(read());
    var rez = [];
    rez = a.getTable();
    for (var i = 0; i < rez.length; i++) {
        $("#tabl1").append(rez[i]);
    }
    str = a.getRezult();
    alert(str);

}
var q = 0;
var k = 0;
var c = 0;
var z = [];
var str;
/**
 * Пошаговый
 */
function w() {
    console.log("Начало функции");
    console.log("k = " + k);
    console.log("q = " + q);
    console.log("l = " + c);
    if (q == 0)
    {
        $("#tabl1").empty();
        var a = new Automat();
        a.work(this.read());        
        z = a.getTable();
        c = z.length;
        str = a.getRezult();

        k = 0;
        q = 1;
        w();

    } else {
        console.log("Вывод таблицы");
        console.log("k = " + k);
        console.log("q = " + q);
        console.log("l = " + c);
        console.log(k < c);
        if (k < c) {
            $("#tabl1").append(z[k++]);
        }

        if (k == c) {
            q = 0;
            alert(str);
        }
    }
}

/**
 * Считывание цепочки
 */
function read() {
    return $("#tape").val();
}

