$(document).ready(function(){
    $("#searchBtn").click(function(){
        var city = $("#city").val();
        if(city == ""){
            alert("please enter city name");
            return;
        }
        alert("enter successfully");

    })

    
    
})