const scrollContainer = document.querySelector(".scroll-container");
const logo = document.querySelector(".logo");
const question = document.querySelector(".question");

//array of objects we can change to get different output on the scroll-rig//
const gallery = [
  {
    img: Bamboo(),
    text: "<strong>Bamboo</strong> requires no need for pesticides or fertilizers. Its growth rate requires no need for replanting as new plants grow from the previous bamboos roots.",
  },
  {
    img: BambooSkull(),
    text: "The process of manufacturing bamboo requires the use of strong chemical solvents. These have the potential to <strong>harm anyone</strong> using the product. ",
  },
  {
    img: WaveSkulls(),
    text: "The chemicals used in bamboo processing have the potential to harm the environment through water pollution. ",
  },
  {
    img: Recycle(),
    text: "Linen uses a much smaller amount of energy, pesticides, insecticides, and fertilizers than other massively produced fibres such as cotton and polyester.",
  },
  {
    img: WaterCup(),
    text: "Linen requires 60% less water for growth in comparison to cotton. Linen also has a higher carbon absorption rate than cotton.",
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

question.innerHTML += QuestionUI("Which material is more sustainable?", "Cotton", "Recycled Cotton", "../pages/wrong.html", "../index.html", 'plant')

