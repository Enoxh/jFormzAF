function Jformz(){
        this.dClass ='form-control';      
        this.priBtn ='btn btn-primary';  
        this.fClass = 'form';    
        this.empty =''

        this.types=[
            'tinyint',
            'smallint',
            'int',
            'float',
            'double',
            'timestamp',
            'bigint',
            'mediumint',
            'date',
            'time',
            'datetime',
            'year',
            'bit',
            //252 is currently mapped to all text and blob types (MySQL 5.0.51a)
            'varchar',
            'text',
            'char',
            'decimal'
        ];


        /*Custom Labels Array defines custom labels
        first value is the table field, second is how you want the filed label to display in the form*/
        this.customLabels = [
            ['test_id','ID'],
            ['test_timestamp','Timestamp'],
            ['test_number','Number'],
            ['test_string','Text']            
            
        ];

        /*Exclude these fields from displaying*/
        this.excludes =[
            'test_id',
            'test_timestamp'
        ];


        }
        
        //OPEN A FORM   
        Jformz.prototype.openForm = function(jAction,jMethod,jId,jClass,jName){
            var j = '<form action="'+jAction+'" method="'+jMethod+'" id="'+jId+'" class="'+jClass+'"  name="'+jName+'"  />';
            return j;     
        }  
        
        
        //MAKE A LABEL
        Jformz.prototype.formLabel = function(jText,jClass){
            var j = '<label class="'+jClass+'">'+jText+'</label>';
            return j;     
        }   
        
  
        //TEXT INPUT
        Jformz.prototype.inputText = function(jId,jClass,jName,jPh,jVal,jRequire){
            var j = '<input type="text" id="'+jId+'" class="'+jClass+'" name="'+jName+'" placeholder="'+jPh+'" value="'+jVal+'" '+jRequire+' />';
            return j;     
        }
  
       //GENERIC INPUT (email, search, tel, url, etc)
        Jformz.prototype.genInput = function(jType,jId,jClass,jName,jPh,jVal,jRequire){
            var j = '<input type="'+jType+'" id="'+jId+'" class="'+jClass+'" name="'+jName+'" placeholder="'+jPh+'" value="'+jVal+'" '+jRequire+' />';
            return j;     
        } 


       //HIDDEN INPUT 
        Jformz.prototype.hiddenInput = function(jId,jName,jVal){
            var j = '<input type="hidden" id="'+jId+'" name="'+jName+'" value="'+jVal+'" />';
            return j;     
        }       

        //NUMBER INPUT
        Jformz.prototype.numInput = function(jId,jClass,jName,jMin,jMax,jStep,jRequire){
            var j = '<input type="number" id="'+jId+'" class="'+jClass+'" name="'+jName+'" min="'+jMin+'" max="'+jMax+'"  step="'+jStep+'"'+jRequire+'>';
            return j;     
        }          
        
        
         //DATETIME INPUT
        Jformz.prototype.dateTimeInput = function(jId,jClass,jName){
            var j = '<input type="datetime-local" class="'+jClass+'" name="'+jName+'" id="'+jId+'"  />';
            return j;     
        }          
        
         //TIME INPUT
        Jformz.prototype.timeInput = function(jId,jClass,jName){
            var j = '<input type="time" class="'+jClass+'" name="'+jName+'" id="'+jId+'"  />';
            return j;     
        }        
        
        //DATE INPUT
        Jformz.prototype.dateInput = function(jId,jClass,jName,jMin,jMax,jRequire){
            var j = '<input type="date" class="'+jClass+'" name="'+jName+'" min="'+jMin+'" max="'+jMax+'" id="'+jId+'" '+jRequire+' />';
            return j;     
        }        
        
        //COLOR INPUT
        Jformz.prototype.colorInput = function(jId,jClass,jName,jRequire){
            var j = '<input type="color" class="'+jClass+'" name="'+jName+'"  id="'+jId+'" '+jRequire+' />';
            return j;     
        }    

        //MONTH INPUT
        Jformz.prototype.monthInput = function(jId,jClass,jName,jRequire){
            var j = '<input type="month" class="'+jClass+'" name="'+jName+'"  id="'+jId+'" '+jRequire+' />';
            return j;     
        }         

        //WEEK INPUT
        Jformz.prototype.weekInput = function(jId,jClass,jName,jRequire){
            var j = '<input type="week" class="'+jClass+'" name="'+jName+'"  id="'+jId+'" '+jRequire+' />';
            return j;     
        }         

        //RANGE INPUT
        Jformz.prototype.rangeInput = function(jId,jClass,jName,jMin,jMax,jStep,jRequire){
            var j = '<input type="range" id="'+jId+'" class="'+jClass+'" name="'+jName+'" min="'+jMin+'" max="'+jMax+'"  step="'+jStep+'"'+jRequire+'>';
            return j;     
        }
        
        //RADIO BUTTON
        Jformz.prototype.radioInput = function(jId,jClass,jName,jVal,jChkd,jRequire){
            var j = '<input id="'+jId+'" class="'+jClass+'" type="radio" name="'+jName+'" value="'+jVal+'" '+jChkd+' '+jRequire+'> ';
            return j;     
        }       
        
        //CHECKBOX
        Jformz.prototype.checkBoxInput = function(jId,jClass,jName,jVal,jChkd,jRequire){
            var j = '<input id="'+jId+'" class="'+jClass+'" type="checkbox" name="'+jName+'" value="'+jVal+'" '+jChkd+' '+jRequire+'> ';
            return j;     
        }        
        
        //TEXTAREA
        Jformz.prototype.textArea = function(jId,jClass,jName,jHtchml){
            var j = '<textarea id="'+jId+'" class="'+jClass+'" name="'+jName+'">'+jHtchml+'</textarea>';
            return j;     
        }  

        //SELECT LIST
        Jformz.prototype.selectList= function(jId,jClass,jName,jVals= [['','']]){        
            var j = '<select id="'+jId+'" class="'+jClass+'" name="'+jName+'">';
                for(var i=0;i<jVals.length;i++){
                j +='<option ="'+jVals[i][0]+'">'+jVals[i][1]+'</option>';    
                }
            j +='</select>';
            return j;     
        }        
        
        //LINE BREAK
        Jformz.prototype.br = function(){
            var j = '</br>';
            return j;     
        }        
        
        //SUBMIT BUTTON
        Jformz.prototype.submitBtn = function(jName,jId,jClass,jVal){
            var j = '<input type="submit" name="'+jName+'" value="'+jVal+'" class="'+jClass+'" id="'+jId+'">';
            return j;     
        }   
        
        //CLOSE FORM
        Jformz.prototype.closeForm = function(){
            var j = '</form>';
            return j;     
        }         
        
        //HTML ELEMENTS
        //GET HTML Element by ID
        Jformz.prototype.getElem = function(jId){
            var j = document.getElementById(jId);
            return j;     
        }   
               
        //GET HTML Elements by class name returns array
        Jformz.prototype.getByClass = function(jClass){
            var j = document.getElementsByClassName(jClass);
            return j;     
        }        
        
        //GET HTML Elements by tag name returns array
        Jformz.prototype.getByTag= function(jTag){
            var j = document.getElementsByTagName(jTag);
            return j;     
        }        
        
        //SHOW VIEW
        Jformz.prototype.showView = function(jId,jView){
            document.getElementById(jId).innerHTML = jView;
        }
        
        
        /*CUSTOM FORM LABELS*/
        Jformz.prototype.customLabel = function(tableField){
            var t='';
            var cl = this.customLabels;
            for(var i=0;i<cl.length;i++){
                if(cl[i][0] == tableField){
                t = cl[i][1];
                }
            }
             if(t != ''){return t;}else{return tableField;}
        
        }
        
        
        
        /*FORM FIELD Excludes*/
        Jformz.prototype.checkExcluded = function(name){
            var ex = this.excludes;

        for(var i=0;i<ex.length;i++){
            var x = false;
           if(ex[i] == name){
           x = true;
               return x;
           }else{
           x =  false;

           } 
        }
            return x;
        }     
        
        
        
        //Customize these to change the way your form elements display.       
        Jformz.prototype.checkTypes = function(j,i,typ,lname,dataTwo){
        var view ='';
        //INT TINYINT SMALLINT BIGINT MEDIUMINT
        if(typ == 'int' || typ == 'tinyint' || typ == 'smallint' || typ == 'bigint' || typ ==  'mediumint'){
        view += '<div class="form-group">';
        view += jf.numInput(lname,'form-control',lname,0,dataTwo,'','');
        view += '</div>'; 
        }

        //FLOAT
        if(typ == 'float'){
        view += '<div class="form-group">';
        view += jf.numInput((lname,lname,lname,'','','0.01',''));
        view += '</div>'; 
        }

        //DOUBLE
        if(typ == 'double'){
        }

        //TIMESTAMP   
        if(typ == 'timestamp'){
        view += '<div class="form-group">';
        view += jf.dateTimeInput(lname,'form-control',lname);
        view += '</div>'; 
        }

        //DATE
        if(typ == 'date'){
        view += '<div class="form-group">';
        view += jf.dateInput(lname,'form-control',lname);
        view += '</div>'; 
        }

        //TIME
        if(typ == 'time'){
        view += '<div class="form-group">';
        view += jf.timeInput(lname,'form-control',lname);
        view += '</div>'; 
        }

        //DATETIME
        if(typ == 'datetime'){
        view += '<div class="form-group">';
        view += jf.dateTimeInput(lname,'form-control',lname);
        view += '</div>'; 
        }

        //YEAR
        if(typ == 'year'){}
        //BIT   
        if(typ == 'bit'){}
        //VARCHAR   
        if(typ == 'varchar'){
        view += '<div class="form-group">';
        view += jf.inputText(lname,jClass,lname,'form-control','','');
        view += '</div>'; 
        }

        //TEXT
        if(typ == 'text'){
        view += '<div class="form-group">';
        view += jf.textArea(lname,'form-control',lname,'');
        view += '</div>'; 
        }

        //CHAR    
        if(typ == 'char'){
        view += '<div class="form-group">';
        view += jf.inputText(lname,jClass,lname,'form-control','','');
        view += '</div>'; 
        }

        //DECIMAL   
        if(typ == 'decimal'){
        view += '<div class="form-group">';
        view += jf.numInput((lname,lname,lname,'','','0.01',''));
        view += '</div>'; 

        }
                    return view;
        }
        
        
        
        
        
        
        
        
        
        