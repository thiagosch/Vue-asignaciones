<?php

$alsea = "http://proveedores.alsea.com.ar:48080/asignaciones-server/mobile/main/asignaciones/legajos/";

$content = file_get_contents($alsea.$_GET['legajo']);
print_r($content);
