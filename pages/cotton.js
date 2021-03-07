const scrollContainer = document.querySelector(".scroll-container");
const logo = document.querySelector(".logo");
const question = document.querySelector(".question");

const wrong = document.getElementById("wrong-answer");
const right = document.getElementById("right-answer");

//array of objects we can change to get different output on the scroll-rig//
const gallery = [
  {
    img: Jeans(),
    text: "A pair of jeans made from 1kg of cotton fiber can take up to <strong>20,000 litres</strong> of water to produce.",
  },
  {
    img: 'animation',
    text: "text",
  },
  {
    img: "animation",
    text: "text",
  },
  {
    img: "animation",
    text: "text",
  },
  {
    img: "animation",
    text: "text",
  },
  {
    img: "animation",
    text: "text",
  },
];

// pass all of gallery through scroll function with three params //
// ScrollContainer(index, image, text) //
for (var i = 1; i < 7; i++) {
  scrollContainer.innerHTML += ScrollContainer(i, gallery[i - 1].img, gallery[i - 1].text);
}

question.innerHTML += QuestionUI("Which material is more sustainable?", "Cotton", "Recycled Cotton", "../pages/wrong.html", "../../index.html", 'cotton')





wrong.addEventListener('click', () => {


console.log('click')


})