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

      /*
        if (!isset($in_page)) {
        $page = "404";
        } else
        include $page . ".php";
       */
      ?>
    <br>

    <div class="content1">
      <h2>Автомат с магазинной памятью, распознающих слова языка L={0<sup>i</sup>1<sup>i</sup>,i=1..n}</h2>
    </div>

    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link" href="#input">Ввод данных</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#record">Запись в виде семёрки</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#table">Таблица переходов</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Отображение в виде таблицы</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#discrete">Дискретный режим</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#anal">Непрерывный режим</a>
      </li>
    </ul>

    <div id="input"  class="content1">
      <h4>Ввод данных</h4>
      <div class="content">
        <form class="form-inline form-control-lg" method="POST" action="index.php?page=input">
          <div class="form-group" id="input">
            <input type="text" class="form-control form-control-lg" name="string" placeholder="Введите цепочку символов">
            <button type="submit" class="btn btn-info">Проверить</button>
          </div>
        </form>
      </div>
    </div>

    <div id="record"  class="content1">
      <h4>Запись в виде семёрки</h4>
      <div class="content">
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
    </div>

    <div id="" class="content1">
      <h4>Таблица переходов</h4>
      <div class="content">      

      </div>

    </div>

    <div id="discrete" class="content1">
      <h4>Дискретный режим</h4>
      <div class="content">

      </div>
    </div>

    <div id="anal" class="content1">
      <h4>Непрерывный режим</h4>
      <div class="content">     

      </div>
    </div>


  </body>
  <script type="text/javascript" src="js/tether.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>

</html>
