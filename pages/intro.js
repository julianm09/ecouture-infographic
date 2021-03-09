document.querySelector("#blueText").innerHTML += BlueTextUI(
  "The recent increase in fast fashion has had a negative impact on our planet. Learn how your choice in clothing can impact the world.",
  "0"
);
document.querySelector("#greenButton").innerHTML += ButtonGreenUI(
  "Get Started",
  "../pages/nav.html"
);
document.querySelector("#logo").innerHTML += Logo(
  "../comps/Resources/earth-small.png"
);

document.querySelector("#greenButton").addEventListener("click", () => {
  document.querySelector("#greenButton").style.opacity = "0%";
  document.querySelector("#greenButton").style.transition = "1s ease";

  document.querySelector("#earth").style.filter = "grayscale(100%)";
  document.querySelector("#earth").style.transform = "scale(0.8)";

  document.querySelector("#blueText").style.opacity = "0%";
  document.querySelector("#blueText").style.transition = "1s ease";

  document.querySelector("#earth").style.transition = "1s ease";

  setTimeout(function () {
    window.location.href = "./nav.html";
  }, 500);
});
