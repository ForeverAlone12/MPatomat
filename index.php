<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="Content-Language" content="ru-ru"/>
    <title>MP-automaton</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/tether.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <script type="text/javascript" src="js/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="js/scroll.js"></script>
  </head>
  <body>
      <?php
      require_once 'config.php';
      ?>
    <br>

    <div class="content1">
      <h2>Автомат с магазинной памятью, распознающих слова языка L={0<sup>i</sup>1<sup>i</sup>,i=1..n} <label id="settings" onclick=""><sup>&#9881;</sup></label></h2>
      
    </div>

    <div id="input"  class="container">
      <h4>Ввод данных</h4>
      <div class="container">
        <form class="form-inline form-control-lg" method="POST" action="index.php?page=input">
          <div class="form-group container" id="input">
            <input type="text" class="form-control " name="string" placeholder="Введите цепочку символов">
            <button type="submit" class="btn btn-info">Проверить</button>
          </div>
        </form>
      </div>
      <button type="button" class="btn btn-link" data-toggle="modal" data-target="#record">
         Запись в виде семёрки
      </button>
    </div>

    <div id="record" class="modal fade bd-example-modal-lg">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Запись в виде семёрки</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Автомат с магазинной памятью M=({q<sub>0</sub>, q<sub>1</sub>, q<sub>2</sub>}, {0, 1}, {&xi;, 0}, q<sub>0</sub>, &xi;, {q<sub>0</sub>}, P), где<br>
              q<sub>0</sub>, q<sub>1</sub>, q<sub>2</sub> – множество терминальных символов,<br>
              0, 1 – множество нетерминальных символов,<br>
              &xi;, 0 – множество символов магазина,<br>
              q<sub>0</sub> – начальное состояние,<br>
              &xi; – начальный символ магазина,<br>
              q<sub>0</sub>  –  допускающиеся (заключительное) состояние,<br>
              P – функция переходов:<br>
              P(q<sub>0</sub>, 0, &xi;) = {(q<sub>1</sub>, 0&xi;)}<br>
              P(q<sub>1</sub>, 0, 0&xi;) = {(q<sub>1</sub>, 00&xi;)}<br>
              P(q<sub>1</sub>, 1, 0&xi;) = {(q<sub>2</sub>, &xi;)}<br>
              P(q<sub>2</sub>, 1, 0&xi;) = {(q<sub>1</sub>, &xi;)}<br>
              P(q<sub>2</sub>, &xi;, &xi;) = {(q<sub>0</sub>, &xi;)}<br>
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>



    <div class="container">
      <h4>Режим работы</h4>
      
        <div class="container">
          <button class="btn-info" id="" >Пошаговый</button>
          <button class="btn-info" id="" >Непрерывный</button>
      </div>

    </div>


    <div class="container">
      <h4>Таблица переходов</h4>  
      <table class="table">
        <thead>
          <tr>
            <td rowspan="2">Магазин</td>
            <td colspan="3">Входные символы</td>
          </tr>
          <tr>
            <td>0</td>
            <td>1</td>
            <td>&xi;</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>
              Стостояние(q<sub>1</sub>)<br>
              Втолкнуть (0)<br>
              Сдвиг
            </td>
            <td>
              Стостояние(q<sub>2</sub>)<br>
              Вытолкнуть (0)<br>
              Сдвиг
            </td>
            <td>Отвергнуть цепочку</td>
          </tr>
          <tr>
            <td>&xi;</td>
            <td>
              Стостояние(q<sub>1</sub>)<br>
              Втолкнуть (0)<br>
              Сдвиг
            </td>
            <td>Отвергнуть цепочку</td>
            <td>Отвергнуть цепочку</td>
          </tr>
        </tbody>
      </table>
    </div>


    <div class="container ">
      <h4>Таблица функций переходов</h4>    
      <table class="table">
        <thead>
          <tr>
            <td>Магазин</td>
            <td>Состояние</td>
            <td>Исходная строка</td>
          </tr>
        </thead>
        <tbody id="tbody">
        </tbody>
      </table>
    </div>






  </body>
  <script type="text/javascript" src="js/recognize.js"
  <script type="text/javascript" src="js/tether.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>

</html>
