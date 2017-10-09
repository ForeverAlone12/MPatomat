<?php

// отключение вывода предупреждений
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING));

// импорт переменных в глобальную область видимости
if (!function_exists('import_request_variables')) {
    extract($_REQUEST, EXTR_PREFIX_ALL | EXTR_REFS, 'in');
} else {
    import_request_variables("gP", "in_");
}

