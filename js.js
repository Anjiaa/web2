window.onload=function() {
	function $(id){
	   return document.getElementById(id);
    }
    $("a2").style.marginLeft="-800px";    
    $("a3").style.marginTop="-29px";    
    function adc(){
    	
    	var box=$("a2").style.marginLeft;
        var d=parseInt(box.slice(0,box.length-2));
        var c=d-800;
        if(d%800==0){
        var time=setInterval(function(){
        	
        	if(d>c)
        	{
        		d=d-80;
        		$("a2").style.marginLeft=d+"px";
        		
        	}
        	else
        	{

        		if(d<=(-5600))
   	            {
   		           $("a2").style.marginLeft="-800px";
   	            }
        		clearInterval(time);
        		
        	}
        },10)}

    }
    
    var df1=setInterval("adc1()",1500);
   	$("a3").onmouseover=function(){
    	clearInterval(df1);
    }
     $("a3").onmouseout=function(){
    	df1=setInterval("adc1()",1500);
    }
   var df=setInterval("adc()",2000);
   	$("a2").onmouseover=function(){
    	clearInterval(df);
    }
     $("a2").onmouseout=function(){
    	df=setInterval("adc()",2000);
    }
}