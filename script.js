var s=11 ;     
var a = Math.floor(Math.random()*10) + 1 ;
console.log(a) ;                          
function check()
{  
    var a1 = document.getElementById("input") ;
    var b = Number(a1.value) ;
    var x = document.getElementById("result") ;
    var sc = document.getElementById("msg") ;
    if(s==0)
    { 
        alert("The game has ended.please restart ")  ;
        s=11 ;
    }
    if(b==a) 
    {
        x.textContent="YOU'RE CORRECT" ;
        alert("YOU WON...") ;
    }
    else 
    { 
        if(b<a)  x.textContent="N.O IS TOO SMALL";
        else     x.textContent="N.O IS TOO LARGE";
        s--;
        sc.textContent = s;
    }
}
