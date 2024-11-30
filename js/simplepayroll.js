document.addEventListener("DOMContentLoaded", ()=>{
    initpayroll()
})
function initpayroll(){
    cart = []
    document.getElementById("tablelist").innerHTML='';

}
document.getElementById("Addpayroll").addEventListener("click", ()=>{
    var uname, dwork, drate, deduca;
    uname = document.getElementById("ename").value;     
    dwork = document.getElementById("dworked").value; 
    drate = document.getElementById("drate").value; 
    deduca = document.getElementById("deducamount").value 

    var gp, np;

    gp = dwork*drate;
    np = gp-deduca;

    var list={
        empname: uname,
        dayw: dwork,
        dayr: drate,
        grossp: gp,
        damount: deduca,
        netp: np,
    }

    cart.push(list)
    showlist()
    clearinput()
})
function showlist(){
    var i, l, ln, tbody = "";

    console.log(cart)

    document.getElementById("tablelist").innerHTML='';
    l = cart.length;

    for(i = 0; i < l; i++){
        ln= i+1;
        tbody +="<tr>"
        +'<td style="text-align:center">'+ln+' </td>'
            + '<td>' +cart[i].empname+ '</td>'
            + '<td>' +cart[i].dayw+ '</td>'
            + '<td>' +cart[i].dayr+ '</td>'
            + '<td>' +cart[i].grossp+ '</td>'
            + '<td>' +cart[i].damount+ '</td>'
            + '<td>' +cart[i].netp+ '</td>'
            + "</tr>";

    }
    document.getElementById("tablelist").innerHTML = tbody;
}
function clearinput(){
    
    document.getElementById("ename").value="";
    document.getElementById("dworked").value="";
    document.getElementById("drate").value="";
    document.getElementById("deducamount").value="";
}
document.getElementById("Clearpayroll").addEventListener("click", ()=>{
    if(confirm("Clear Payroll?")){
        initpayroll()
    }
})
document.getElementById("delp").addEventListener("click",()=>{
    let l = cart.length;
    let x = document.getElementById("payno").value;
    --x;
    if(x>=0 && x<l && confirm("Delete Payroll "+(x+1)+"?")){
        cart.splice(x,1)
        showlist()
    }
} )