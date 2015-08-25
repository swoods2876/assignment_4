$(document).ready(function(){

$("#me").bind("click",function(){
	$("#met").html("I'm right")

	
});

});

$(document).ready(function(){
   $("#NoMe").bind("click",function(){
		$("#met").html(" No I'm right")
	});
      
 });
//.hover is not support like other events with .bind
$(document).ready(function(){
$("#hoverover").mouseover(function(){
	alert("Hey, I told you not to hover over me!.");
}); 
}); 

$(document).ready(function(){
	$("#red").click(function(){
       $("#colorbut").css("backgroundColor","red");
       });

     $("#green").click(function(){
       $("#colorbut").css("backgroundColor","green");
       });

     $("#blue").click(function(){
       $("#colorbut").css("backgroundColor","blue");
	
       
});
	});

