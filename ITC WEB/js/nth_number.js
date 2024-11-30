function clearvalue() {
    document.getElementById("title").innerHTML="";
    document.getElementById("numbers").innerHTML="";
    document.getElementById("limit").value="";
}
function sumresult() {
    var limit, i, stext;

    limit = document.getElementById("limit").value;
    i = 0;
    stext = 0;
    do{
        stext += i;
        i++;
    } while((i<=limit))

    console.log(limit);
    console.log(stext);
    
    document.getElementById("title").innerHTML=
    "The sum of the first "+limit+" natural numbers is:";
    document.getElementById("numbers").innerHTML=stext;
}
function fresult() {
    var limit, i, ftext;

    limit = document.getElementById("limit").value;
    i = 1;
    ftext = 1;
    while (i<=limit){
        ftext *= i;
        i++;
    }

    console.log(limit)
    console.log(ftext)

    document.getElementById("title").innerHTML=
    "The factor of the first "+limit+" natural numbers is:";
    document.getElementById("numbers").innerHTML=ftext;
}
function aresult() {
    var limit, i, atext

    limit = document.getElementById("limit").value;
    i = 0;
    atext = 0;
    for(i=0; i<=limit; i++){
        atext += i
    }

    var ave

    ave = atext / limit;

    console.log(limit)
    console.log(atext)

    document.getElementById("title").innerHTML=
    "The factor of the first "+limit+" natural numbers is:";
    document.getElementById("numbers").innerHTML=ave;
}