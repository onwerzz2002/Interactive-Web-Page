$(document).ready(f);
var f = defaultTableNumber();

//default maximum row and column number
function defaultTableNumber () {
    //default maximum row number
    for(var i=0;i<9;i++) {
      $("#drop_down_menu_row").append("<option value=" + (i+1) + ">" + (i+1) + "</option>");
    }
    
    //default maximum column number
    for(var i=0;i<9;i++) {
      $("#drop_down_menu_column").append("<option value=" + (i+1) + ">" + (i+1) + "</option>");
    }  
}



//to create empty table to be filled
$("#to_create_table").click(function() {
       
    var emptyForm = $("#empty_form_for_filling");
    
    // to delete the old table if necessary
    while (emptyForm.children().length > 0) {       
      emptyForm.empty();
    }
    
    var final_form = $("#final_form1");
    if(final_form !== null){
        while(final_form.children().length > 0){
        final_form.empty();
      }
    } 
    
    var rowNumber = $("#drop_down_menu_row").find(":selected").text();
    //alert("rowNumber "+ rowNumber);
    var columnNumber = $("#drop_down_menu_column").find(":selected").text();
    //alert("columnNumber "+ columnNumber);
    
    var emptyTable = $("#empty_form_for_filling"); 
    var count = 0;
    for(var row=0; row<rowNumber; row++) {       
                    
        for(var column=0; column<columnNumber; column++) {
            emptyTable.append("<input id=" + count + " type=text size=10>");              
            count++;       
        }
        emptyTable.append("</br>");
    }
    var create_table = $('<button id="create_table">Create table</button>');
    emptyTable.append(create_table);
    
    create_table.attr("onclick","filled_with_data()");
    emptyTable.append('<div id="final_form1"></div>');
});
    


        
function filled_with_data() {
   
    var rowNumber = $("#drop_down_menu_row").find(":selected").text();
    //alert("rowNumber "+ rowNumber);
    var columnNumber = $("#drop_down_menu_column").find(":selected").text();
    //alert("columnNumber "+ columnNumber);
   
   //to start over again if there are elements already existed
   var final_form = $("#final_form1");
   while(final_form.children().length > 0){
       final_form.empty();
   }

   var empty_form_for_filling = $("#empty_form_for_filling");
   
   //to track input valuese
   var count=0;
     
   var td = $("<td></td>");
   var tr = $("<tr></tr>");
   var table = $("<table></table>");
   for(var row=0;row<rowNumber;row++) {
       
       var tr = $("<tr></tr>");
       for(var column=0;column<columnNumber;column++) {
          
           var values = $("#"+count).val();         
           var td = $("<td>"+values+"</td>");
           tr.append(td);
           count++;
       }
       table.append(tr);
   } 
   final_form.append(table);   
}


