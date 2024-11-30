function Clearval(){
    document.getElementById("Inc").value="";
    document.getElementById("Inct").value="";
}

document.addEventListener("DOMContentLoaded", ()=>{
    initcart()
})

function initcart(){
    cart = []
    document.getElementById("Inc").value="";
    document.getElementById("tablelist").innerHTML='';
}

document.getElementById("Calculate").addEventListener("click", ()=> {
    var taxa, taxi;
    
    taxa = parseFloat(document.getElementById("Inc").value);

    console.log(taxa)
    if(isNaN(taxa) || taxa<=0){
        alert("Please enter valid numbers!");
        return;
    }

    if(taxa>0 && taxa<=250000){
        taxi=0;
    } else if (taxa>=250001 && taxa<=400000){
        taxi = (taxa - 250000)*0.20;
    } else if (taxa>=400001 && taxa<=800000){
        taxi = ((taxa - 400000)*0.25)+30000;
    } else if (taxa>=800001 && taxa<=2000000){
        taxi = ((taxa - 800000)*0.30)+130000;
    } else if (taxa>=2000001 && taxa<=8000000){
        taxi = ((taxa - 2000000)*0.32)+490000;
    } else if (taxa>8000000){
        taxi = ((taxa - 8000000)*0.35)+2410000;
    } 

    console.log(taxi)
    

    document.getElementById("Inct").value=taxi.toLocaleString('en-US');

     var totalincome = {
        amount: taxa,
        tax: taxi

     };

    cart.push(totalincome)
    showval()
})
function showval(){
    var i, l, ln, tbody = "";

    console.log(cart)

    document.getElementById("tablelist").innerHTML='';
    l = cart.length;

    for(i = 0; i < l; i++){
        ln= i+1;
        tbody +="<tr>"
        +'<td style="text-align:center">'+ln+' </td>'
            + '<td>' + parseFloat(cart[i].amount).toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 })+ '</td>'
            + '<td>' + parseFloat(cart[i].tax).toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }) + '</td>'
            + "</tr>";

    }
    document.getElementById("tablelist").innerHTML = tbody;
}
document.getElementById("delh").addEventListener("click", ()=>{
    if (confirm("Clear History?")){
        initcart();
    }
        
})