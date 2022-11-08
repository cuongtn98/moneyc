function click1() {
    let chagmo2 = +document.getElementById("chagmo").value;
    let fromc = document.getElementById("wmo").value;
    let toc = document.getElementById("wmo2").value;
    let changemoney = chagmo2 * toc / fromc ;
        document.getElementById("lastan").innerHTML=changemoney;
}

