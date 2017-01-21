<?php

    class Eformz{

    private $host     = "localhost";
    private $username = "enoxh";
    private $password = "Aster01d";
    private $dbname     = "test";


    function __construct(){

    $this->db ='';
        if(!$this->db){
            // Connect to the database
            $mysqli = new mysqli($this->host, $this->username, $this->password, $this->dbname);
        if($mysqli->connect_error){
            die("Failed to connect with MySQL: " . $mysqli->connect_error);
        }//endif
            else
        {
            $this->mysqli = $mysqli;
        }//end else
        }//endif
    }

//returns an array of arrays
//field name,max length,length,char set, flags, type
public function getFieldNames($table,$orderby){
    
$mysql_data_type_hash = array(
    1=>'tinyint',
    2=>'smallint',
    3=>'int',
    4=>'float',
    5=>'double',
    7=>'timestamp',
    8=>'bigint',
    9=>'mediumint',
    10=>'date',
    11=>'time',
    12=>'datetime',
    13=>'year',
    16=>'bit',
    //252 is currently mapped to all text and blob types (MySQL 5.0.51a)
    253=>'varchar',
    252=>'text',
    254=>'char',
    246=>'decimal'
);
    
    
$mysqli = $this->mysqli;
foreach (array('latin1', 'utf8') as $charset) {

    // Set character set, to show its impact on some values (e.g., length in bytes)
    $mysqli->set_charset($charset);

    $query = "SELECT * from $table ORDER BY $orderby";

$arr = array();
$bigArr= array();   
    if ($result = $mysqli->query($query)) {

        /* Get field information for all columns */
       

         while ($val = $result->fetch_field()) {
        
            array_push($arr,array($val->name,$val->max_length,$val->length,$mysql_data_type_hash[$val->type]));
            array_push($bigArr,$arr);
        $arr = array();
           }

        $result->free();
           }
}
$mysqli->close();

 return json_encode($bigArr);


}















    }
    ?>