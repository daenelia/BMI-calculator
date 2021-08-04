//Body Mass Index (or BMI) is calculated as your weight (in kilograms) divided by the square of your height (in metres) or BMI = Kg/M2
// function triggers on button click

function bmicalc() {

    let lengte = +document.getElementById("lengte").value;
    console.log(lengte);
    let gewicht = +document.getElementById("gewicht").value;
    console.log(gewicht);
    let gewichtRond = Math.round(gewicht);
    console.log(gewichtRond);
    
    let cmToMeter = lengte/100;
    console.log(cmToMeter);
      
    let m2 = cmToMeter * cmToMeter;
        
    let bmiResultaat = gewichtRond / m2;
    let bmiFull = bmiResultaat.toFixed(1);
    console.log(bmiFull);
    
    document.getElementById("bmi-nr").innerHTML = "Gebaseerd op jouw lengte en gewicht is jouw BMI " + (bmiFull) + ".";
    console.log(bmiResultaat);
    
    let BadInput = 0;
    if ( lengte < 100 ) {
      BadInput = 1;
    }
    if ( gewicht < 10 ) {
      BadInput = 1;
    }
    if ( isNaN(parseInt(bmiFull)) ) {
      BadInput = 1 ;
    }
    console.log("BadInput is " + BadInput)
    
    
    // if-else to show correct result based on results
    if ( BadInput == 1 ) {
    text = "Check je invoer.";
        document.getElementById("bmi-nr").innerHTML = "Je BMI kan niet worden berekend op basis van je invoer.";
        document.getElementById("div1").style.display="none";
        document.getElementById("div2").style.display= "none";
        document.getElementById("div3").style.display= "none";
        document.getElementById("div4").style.display= "none";
    }
    else if(parseInt(bmiFull) > parseInt(29.9)) {
        text = "Een BMI boven de 30 wordt gezien als een indicatie dat je obees kunt zijn.";
        document.getElementById("div1").style.display="inline";
        document.getElementById("div2").style.display= "none";
        document.getElementById("div3").style.display= "none";
        document.getElementById("div4").style.display= "none";
        
      } else if (parseInt(bmiFull) > parseInt(25.9)){
        text = "Je BMI boven de 26 wordt gezien als een indicatie dat je overgewicht hebt.";
        document.getElementById("div1").style.display="none";
        document.getElementById("div2").style.display= "inline";
        document.getElementById("div3").style.display= "none";
        document.getElementById("div4").style.display= "none";
      } 
    else if (parseInt(bmiFull) < parseInt(18.5)){
        text = "Je BMI onder de 18,5 wordt gezien als een indicatie dat je wellicht ondergewicht hebt.";  
        document.getElementById("div1").style.display="none";
        document.getElementById("div2").style.display= "none";
        document.getElementById("div3").style.display= "inline";
        document.getElementById("div4").style.display= "none";
    }
    
      //else if(isNaN(bmiFull)){
       // text = "Check je invoer.";
        //document.getElementById("bmi-nr").innerHTML = "Je BMI kan niet worden berekend. ";
        //document.getElementById("div1").style.display="none";
        //document.getElementById("div2").style.display= "none";
        //document.getElementById("div3").style.display= "none";
        //document.getElementById("div4").style.display= "none";
    //}
      else  {
      text = "Je BMI wordt gezien als gezond.";
      document.getElementById("div1").style.display="none";
      document.getElementById("div2").style.display= "none";
      document.getElementById("div3").style.display= "none";
      document.getElementById("div4").style.display= "inline";
    }
    
      document.getElementById("resultaat").innerHTML = text;
      document.getElementById("resultaat2").innerHTML = "Je gezondheid wordt door meer zaken beinvloedt dan alleen je gewicht in kilo's. Voor een beter beeld van de opbouw van je lichaam in spieren en vet kun je langskomen bij DreSports. Onze ervaren trainers geven je een advies dat dieper gaat dan een enkel getal.";
      
    }
    
    // Style in focus input field
    function inputField(x) {
      x.style.background = "#f1f1f1";
      x.style.border ="1px solid #049b92";
    }
