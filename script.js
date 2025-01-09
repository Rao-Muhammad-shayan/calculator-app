var history="";
function saveData(){
    var data= event.target.innerText
    var input=document.getElementById("input")
   
   
if(data=="="){
   input.value= eval(input.value)
history=input.value;
if(input.value=="undefined"){
    input.value="";
}else if(input.value="NaN"){
    input.value="";
}
}
if (data == "+/-") {
  
    if (!isNaN(input.value)) {
      
        if (input.value.startsWith("-")) {
          
            input.value = input.value.slice(1);
        } else {
            
            input.value = "-" + input.value;
        }
    } else {
   
        input.value = "Invalid input";
    }
}

else if(data=="C"||data=="CE"){
    input.value=""
    history=input.value;
}
else if(data=="DEl"){
input.value=input.value.slice(0,-1)
history=input.value;
}
else if( (data=="+"|| data=="-" || data=="*"|| data=="/") ){

  if((data==input.value.slice(-1))||((input.value.slice(-1)=="+" ||input.value.slice(-1)=="-"||input.value.slice(-1)=="*"||input.value.slice(-1)=="/")&& ( data=="+"|| data=="-" || data=="*"|| data=="/"))){
    input.value=input.value.slice(0,-1)+data;
    history=input.value;
  }else{
    input.value+=data
    history=input.value;
  }
}
else if(data=="%"){
    input.value= (input.value/100)*1
    history=input.value;
}
else if(data=="1/x"){
    input.value=1/input.value
    history=input.value;
}else if(data == "x²"){
    input.value = Math.pow(input.value, 2);
    history=input.value;
}
else if(data == "x³"){
    input.value = Math.pow(input.value, 3);
    history=input.value;
}
else{
    input.value+=data
    history=input.value;
}


}
