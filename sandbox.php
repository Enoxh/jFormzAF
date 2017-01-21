<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css">
    <title>jFormzAF</title>
    <!--jFormz Auto MYSQL Example-->
</head>

<body>
    <div class="container">
        <?php
//include the PHP Class
include('includes/class.jformzAF.php');
//Instantiate the class
$jform = new Eformz();
//Gets table data s an array.
$table = 'test_table';
$orderby = 'test_id';    
//Takes in the name of the table, and a column to order the results by
$tableData = $jform->getFieldNames($table,$orderby);
?>
            <!--The form displays in this div-->
            <div id="showView"></div>
            <!--JS CLASS-->
            <script src='js/jFormzAF.js'></script>
            <script>
                //BUILD A FORM FROM THE TABLE DATA
                //Instantiate the prototype
                var jf = new Jformz();
                //pass the data from PHP to JS
                var data = <?php echo $tableData; ?>;
                //make the array of data types global you could also pass this as an arg.
                var types = jf.types;
                //Call the build form function    
                buildForm();

                function buildForm() {
                    //Empty string for concats
                    var view = '';
                    view += '<h2>Sample Form </h2>';
                    // Open a form and make the action test.php using POST as the method
                    view += jf.openForm("test.php", 'POST', 'form', 'form', 'form');
                    //Add a couple of hidden inputs
                    view += jf.hiddenInput('tableName','tableName','test_table');
                    view += jf.hiddenInput('userid','userId',12);
                    //Loop through the table data
                    for (var i = 0; i < data.length; i++) {
                        //Loop through the data types array
                        for (var j = 0; j < types.length; j++) {
                            //If the table field data type matches the type in the array  
                            if (data[i][0][3] == types[j]) {
                                var excluded = jf.checkExcluded(data[i][0][0]);
                            //If not excluded
                            if(!excluded){    
                                //Add a form element to the view object
                                view += jf.formLabel(jf.customLabel(data[i][0][0]), '');
                                view += jf.checkTypes(j, i, types[j], data[i][0][0], data[i][0][2]);
                                //Add a break tag
                            }
                            }
                        }
                    }
                    view += jf.submitBtn('submit', 'submit', '', 'submit');
                    view += jf.closeForm();
                    document.getElementById('showView').innerHTML = view;
                }
            </script>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script>
    </script>
</body>
</html>