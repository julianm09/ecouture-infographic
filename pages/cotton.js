const scrollContainer = document.querySelector(".scroll-container");
const logo = document.querySelector(".logo");
const question = document.querySelector(".question");

const wrong = document.getElementById("wrong-answer");
const right = document.getElementById("right-answer");

//array of objects we can change to get different output on the scroll-rig//
const gallery = [
  {
    img: Jeans(),
    text:
      "A pair of jeans made from 1kg of cotton fiber can take up to <strong>20,000 litres</strong> <strong class='white'>of water to produce</strong>.",
  },
  {
    img: Pesticide(),
    text:
      "<strong>Cotton</strong> production makes up for <strong class='white'>7% of all pesticides and 16% of all insecticides used on Earth</strong>.",
  },
  {
    img: Waves(),
    text:
      "Overuse of irrigation water resulted in the Aral Sea's surface area <strong>declining by 85%.</strong> ",
  },
  {
    img: Cotton(),
    text:
      "<strong>Recyled Cotton</strong> makes use of textile waste which <strong class='white'>reduces the negative impacts of cotton farming</strong>.",
  },
  {
    img: Truck(),
    text:
      "<strong>Recyling</strong> 1 ton of cotton can <strong class='white'> result in the conservation of 765,000 litres of water</strong>.",
  },
  {
    img: Factory(),
    text:
      "Using recycled cotton <strong class='white'>reduces CO2 emissions by</strong> <strong>70%</strong> compared to regular cotton.",
  },
];

// pass all of gallery through scroll function with three params //
// ScrollContainer(index, image, text) //
for (var i = 1; i < 7; i++) {
  scrollContainer.innerHTML += ScrollContainer(
    i,
    gallery[i - 1].img,
    gallery[i - 1].text
  );
}

question.innerHTML += QuestionUI(
  "What resource can be conserved the most with a decrease in cotton production?",
  "Oxygen",
  "Water",
  "../pages/wrong.html",
  "../pages/nav.html",
  "cotton"
);

wrong.addEventListener("click", () => {
  console.log("click");
});
