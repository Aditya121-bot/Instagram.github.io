
var pr= window.pageYOffset;
window.onscroll= function(){
    var a=window.pageYOffset;
    if (pr>a){
                    
                   document.getElementById("search_nav").style="top:0px;"        
        
document.getElementById("search_nav").style.transition = "all .5s";         document.getElementById("NavTop").style="top:0px;"        
   document.getElementById("profile_top_nav").style="border-bottom:.7px solid white;"                          
  
  document.getElementById("notification_tab").style="border-bottom:0px solid #CACCCE;"                     
    }
    else if(pr<a && pr>15){
                      
           document.getElementById("NavBottom").style="border-top-color:red;"
             document.getElementById("NavBottom").style="box-shadow:1px 0px 1px 0px #CACCCE;"
                    document.getElementById("NavTop").style="box-shadow: 0px 1.5px 1.5px -1.5px black;"              
 document.getElementById("NavTop").style="border-bottom:.7px solid #CACCCE;"          
                      
 
 document.getElementById("search_nav").style="top:-100px;"        
        
 document.getElementById("search_nav").style.transition = "all .6s";       
                    
                     document.getElementById("NavBottom").style="bottom:.7px;"        
document.getElementById("profile_top_nav").style="box-shadow: 0px 1.5px 1.5px -1.5px black;"              
                      
                      document.getElementById("profile_top_nav").style="border-bottom:.7px solid #CACCCE;"         
  
 document.getElementById("notification_tab").style="border-bottom:.7px solid #CACCCE;"                         
                      
                                    
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
//change user_name 



