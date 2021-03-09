

document.querySelector(".continue").innerHTML += BlueButtonUI('Continue', './nav.html');

function Redirect() {
    window.location.href = "./nav.html";
}

    // initialize state object 
    let completedState = {}

    // if completed levels exist use completed levels from local storgage 
    if(localStorage.completedLevels){

    completedState = JSON.parse(localStorage.getItem("lastLocation"))
    } else {

            completedState = initialState
        
    }






    console.log(completedState)

    if (completedState.lastLocation == 'cotton'){

        document.querySelector('body').style.background = '#36B9C5';
        document.querySelector(".bottle").innerHTML += Jeans();
        document.querySelector(".description").innerHTML += BlueTextUI("Cotton as a material can require up to 1kg of cotton taking 20,000L to create.");
        document.querySelector(".sorry").innerHTML += ErrorTextUI('Sorry cotton is the wrong answer!');

    
    
    } else if (completedState.lastLocation == 'plant') {


        document.querySelector('body').style.background = '#51B27E';
        document.querySelector(".bottle").innerHTML += Bamboo();
        document.querySelector(".description").innerHTML += BlueTextUI("The chemicals used in bamboo processing have the potential to harm the environment through water pollution.");
        document.querySelector(".sorry").innerHTML += ErrorTextUI('Sorry bamboo is the wrong answer!');


    } else if (completedState.lastLocation == 'animal') {

        document.querySelector('body').style.background = '#E67C20';

        document.querySelector(".bottle").innerHTML += Gas();  
        document.querySelector(".description").innerHTML += BlueTextUI("Bamboo requires no need for pesticides or fertilizers. Its growth rate requires no need for replanting as new plants grow from the previous bamboos roots.");
        document.querySelector(".sorry").innerHTML += ErrorTextUI('Sorry wool is the wrong answer!');



    } else if (completedState.lastLocation == 'synthetic') {

        document.querySelector('body').style.background = '#AF75BD';

        document.querySelector(".bottle").innerHTML += WaterResist();
        document.querySelector(".description").innerHTML += BlueTextUI("Bamboo requires no need for pesticides or fertilizers. Its growth rate requires no need for replanting as new plants grow from the previous bamboos roots.");
        document.querySelector(".sorry").innerHTML += ErrorTextUI('Sorry synthetic is the wrong answer!');


    }




