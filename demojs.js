function click1() {
    let chagmo2 = +document.getElementById("chagmo").value;
    let fromc = document.getElementById("wmo").value;
    let toc = document.getElementById("wmo2").value;

    let result = chagmo2 * 250;
    let result2 = chagmo2 / 250 ;


       if ( fromc == "VND" && toc == "USD") {
            document.getElementById("lastan").innerHTML=result +"VND";

       }else if (fromc == "USD" && toc =="VND") {
           document.getElementById("lastan").innerHTML= result2 + "USD"
       }
}git