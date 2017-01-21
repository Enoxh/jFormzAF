# jFormzAF
Auto generate HTML forms from MYSQL tables using PHP and JS.

jFormzAF AutoForm
jFormzAF makes it easier for developers to automatically generate HTML forms from MYSQL Tables.

jFormzAF is just an extended version of the jFormz Prototype Class.

jFormzAF allows for auto form generation, custom input labels and excluded fields like id's and timestamps.

install
Download/clone jFormzAF from Github.

Setup
JformzAF consists of a PHP class and a Javascript Prototype Class

The PHP class gets data from the MYSQl database using OOP MYSQLI and the JS class builds the form using jFormz.

The download includes an example of how to extend jFormz to generate a form from a table (sandbox.php) and post the data to a php page (test.php). The example uses the same test_table database table that the jFormz Examples use. Just edit the table $table and $orderby variables in sandbox.php to generate a form from a different table.