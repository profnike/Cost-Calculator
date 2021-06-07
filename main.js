


let butn = document.getElementById("butn");


butn.addEventListener("click", calculate)
function calculate(){
    let tip= document.getElementById("tipValue")
    let tipperson = document.getElementById("tipperperson")
    let totalperson = document.getElementById("totalperperson")
    let totalamt = document.getElementById("totalamt")
    let priceOrig=document.getElementById("price").value;
    let price= parseInt(document.getElementById("price").value);
    let dropdownOrig = document.getElementById("dropdown").value;
    let dropdown =parseInt(document.getElementById("dropdown").value);
    let numbOrig= document.getElementById("numb").value;
    let numb= +document.getElementById("numb").value;
    
   let tips=(price*dropdown)/100
 
    tip.innerHTML= Math.round(tips);
    
    
    totalamt.innerHTML= price +tips
    tipperson.innerHTML = Math.round(tips/numb);
    totalperson.innerHTML = Math.round( (tips+price)/numb)
    if( priceOrig===""|| numbOrig===""|| dropdownOrig==="How do you rate our service?"){
        tip.innerHTML="input the values completely"
        totalamt.innerHTML= "input the values completely"
        tipperson.innerHTML= "input the values completely"
        totalperson.innerHTML = "input the values completely"
    }
    
  
}
function func(sub){
    sub.innerHTML="Reset"
    let priceV= document.getElementById("price");
    priceV.value=""
    let numbV= document.getElementById("numb");
    numbV.value=""
    let dropD= document.getElementById("dropdown");
    dropD.value= "How do you rate our service?"
}