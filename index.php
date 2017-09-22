<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="Content-Language" content="ru-ru"/>
    <title>MP-automaton</title>
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/tether.min.css"/>
    <script type="text/javascript" src="js/jquery-3.2.1.js"></script>
  </head>
  <body>
      <?php
      require_once 'config.php';
      
      if (!isset($in_page)) {
          $page = "404";
      }
      include $page . ".php";
      ?>
      ?>
  </body>
  <script type="text/javascript" src="js/tether.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
</html>
