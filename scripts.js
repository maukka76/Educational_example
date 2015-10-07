/*Ready function is called when DOM is ready*/
$( document ).ready(function(event) {
    
    console.log("We are ready");
    //1. We need to make an ajax (http) request
    //to our mongo database with jquery
    //2. We need to generate UI dynamically from     //response data jquery
    //To use HTTP api start mongod with next
    //mongod.exe --rest --jsonp
    
    $.ajax({
        
        method:"GET",
        url:"http://localhost:28017/person/friends/",
        dataType:"jsonp",
        jsonp:"jsonp",
        success:responseReady,
        /*
        success:function(data,status){
            
            console.log(data);
            console.log(status);
        },*/
        error:function(hxr,status,errorThrown){
            
            console.log(errorThrown);
        }
    });

});

function responseReady(data,status){
    
    console.log(Object.keys(data.rows[0]));
    console.log(status);
    
    var headers = Object.keys(data.rows[0]);
    
    var headerRow = $("<tr></tr>");
    $(headerRow).appendTo("#parent_table");
    for(i=1; i < headers.length; i++){
        
        $(headerRow).append("<th>" + headers[i] + "</th>");
    }
    
    for(i=0; i < data.rows.length; i++){
        
        var my_color;
        
        if(data.rows[i].age < 25){
            my_color = "young";
        }
        else if(data.rows[i].age < 50){
            
            my_color = "middle_age";
        }
        else{
            
            my_color = "old";
        }
            
       var html = "<tr><td>" + data.rows[i].name + "</td>" +
                  "<td>" + data.rows[i].adress + "</td>" + 
                  "<td>" + data.rows[i].age + "</td></tr>";
        
        $(html).appendTo("#parent_table").addClass(my_color);
    }
}



/*

$( document ).ready(ready_yeah);

function ready_yeah(){
}
*/

/*
Browser api for DOM ready event
window.onload = function(event){
    
    console.log(event);
    my_title.innerHTML = "Jys the same";
}*/
