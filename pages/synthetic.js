const scrollContainer = document.querySelector(".scroll-container");
const logo = document.querySelector(".logo");
const question = document.querySelector(".question");

//array of objects we can change to get different output on the scroll-rig//
const gallery = [
  {
    img: WaterResist(),
    text: "<Strong>Polyester </Strong>is the most common fiber in our garment. The fibers are very tear and water resistant which is especially useful for sportswear.",
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

question.innerHTML += QuestionUI("Which material is more sustainable?", "Cotton", "Recycled Cotton", "../../index.html", "../pages/wrong.html","synthetic")

