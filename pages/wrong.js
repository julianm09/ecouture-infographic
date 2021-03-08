document.querySelector(".sorry").innerHTML += ErrorTextUI();
document.querySelector(".bottle").innerHTML += ErrorBottle();
document.querySelector(".description").innerHTML += BlueTextUI("Cotton as a material requires a lot of water in combination with a dry climate to produce. This means that for some countries mismanagement of water can result in 1kg of cotton taking 20,000L to create.");
document.querySelector(".continue").innerHTML += MyBlueButtonUI();

function Redirect() {
    window.location.href = "./nav.html";
}

