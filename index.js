function milkfunction() {
    var shedF =(document.getElementById("shed1").value);
    var shedS =(document.getElementById("shed2").value);
    var shedT =(document.getElementById("shed3").value);
    var shedF =(document.getElementById("shed4").value);
  
    if(shed1.length === 0 || shed2.length === 0 || shed3.length === 0 || shed4.length === 0) {
      //ensuring that something has been typed in the input section
  
        alert("mandatory fill");
      }
    
    else {
        //converting to numbers
        shedF = parseFloat(shedF);
        shedS = parseFloat(shedS);
        shedT = parseFloat(shedT);
        shedF = parseFloat(shedF);
        var totalmilk=shed1+shed2+shed3+shed4;
        document.getElementById("hidden").style.display = 'block';
        document.getElementById("shedF").innerHTML=shed1;
        document.getElementById("shedS").innerHTML=shed2;
        document.getElementById("shedT").innerHTML=shed3;
        document.getElementById("shedF").innerHTML=shed4;
        document.getElementById("totalmilk").innerHTML = totalmilk;
    }
  }
  function reset() {
      location.reload();
    }
    function production(selling_price,time){
     var production=(document.getElementById("totalmilk").value);
     if(production.length===0){
       alert("Mandatory fill");
     }else{
       production =parseFloat(production);
      var weekly=45*production*7;
      var monthly=45*production*30;
      var yearly=45*production*365;
      document.getElementById("hidden2").style.display = 'block';
      document.getElementById("weekly").innerHTML=weekly;
      document.getElementById("monthly").innerHTML=monthly;
      document.getElementById("yearly").innerHTML=yearly;
     }
    }
   function rate(){
    var total=(document.getElementById("total").value);
    if(total.length===0){
      alert("Empty fields not allowed");
    }else{
      total =parseFloat(total);
      var incomePerDay=total*45;
    var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days= [ 31,29,31,30,31,30,31,31,30,31,30,31];
    for (i = 0; i<months.length; i++){
      output = days[i] * incomePerDay;
      document.getElementById("hidden3").style.display = 'block';
      document.getElementById("hidden3").innerHTML+=("Your income for " + months[i] +  "is  Ksh  " + output + "</p>");
    }
  }
   }