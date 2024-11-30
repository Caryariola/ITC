function clearval() {
    const ids = ["Met", "Ft", "cel", "Fah"];

    ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.value = "";
        }
    });
    
    
}
function Fah() {

    let cel = document.getElementById("cel").value;
    let Fah = (cel*9/5)+32
    let F = Fah.toPrecision(4);

    console.log(F)

    document.getElementById("Fah").value=F;


}
function cel() {
    var Fah, Cel;

    Fah = document.getElementById("Fah").value;
    Cel = (Fah-32)*5/9

    let C = Cel.toPrecision(4);

    console.log(C)

    document.getElementById("cel").value=C;


}
function meter(){
    var M, Ft;

    M = document.getElementById("Met").value;
    Ft = M * 3.28084

    let F = Ft.toPrecision(4);

    console.log(F)

    document.getElementById("Ft").value=F;
}
function feet(){
    var F, Met;

    F = document.getElementById("Ft").value;
    Met = F / 3.281

    let M = Met.toPrecision(4);

    console.log(M)

    document.getElementById("Met").value=M;
}