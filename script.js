
var pr= window.pageYOffset;
window.onscroll= function(){
    var a=window.pageYOffset;
    if (pr>a){
                    
                   document.getElementById("NavBottom").style="bottom:0px;"        
         document.getElementById("NavTop").style="top:0px;"        
   document.getElementById("profile_top_nav").style="border-bottom:0px solid black;"                          
                 
    }
    else if(pr<a && pr>7){
                      
           document.getElementById("NavBottom").style="border-top-color:red;"
             document.getElementById("NavBottom").style="box-shadow:1px 0px 1px 0px grey;"
                    document.getElementById("NavTop").style="border-bottom-color:grey;"      
                     document.getElementById("NavBottom").style="bottom:0px;"        
       document.getElementById("profile_top_nav").style="border-bottom:.2px solid black;"                  
                      
    }
    pr=a;
}
//tabs changing 
function tabs(tabc) {
    var i;
    var tabs = document.getElementsByClassName("tabsc");
    for (i = 0; i < tabs.length; i++) {    var logos = document.getElementsByClassName("logo");
       tabs[i].style.display = "none";  
    }
    document.getElementById(tabc).style.display = "block";  
}
//tab active
