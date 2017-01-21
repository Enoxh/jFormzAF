<?php
if( $_POST ){
echo 'User ID:(hidden) '.$_POST['userId'];
echo '<br/>';
echo 'Number: '.$_POST['test_number'];
echo '<br/>';
echo 'Text: '.$_POST['test_string'];
echo '<br/>';
echo 'Table Name:(hidden)  '.$_POST['tableName'];
}
?>