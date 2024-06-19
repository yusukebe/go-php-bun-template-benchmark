<html><body><ul>
<?php
require_once('/app/vendor/smarty/smarty/libs/Smarty.class.php');
$smarty = new Smarty\Smarty();
$smarty->setCompileDir('/tmp');
$data = [];
for ($i = 0; $i < 1000; $i++) {
    $data[] = "ほげ";
}
$smarty->assign('data', $data, true);
$smarty->display("app.tpl");
?></ul></body></html>
