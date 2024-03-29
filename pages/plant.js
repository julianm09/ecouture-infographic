const scrollContainer = document.querySelector(".scroll-container");
const logo = document.querySelector(".logo");
const question = document.querySelector(".question");

//array of objects we can change to get different output on the scroll-rig//
const gallery = [
  {
    img: Bamboo(),
    text: "<strong>Bamboo</strong> requires no need for pesticides or fertilizers. Its growth rate requires no need for replanting as <strong style=color:white> new plants grow from the previous bamboos roots.</strong>",
  },
  {
    img: BambooSkull(),
    text: "The process of manufacturing bamboo requires the use of strong chemical solvents. These have the potential to <strong style=color:white>harm anyone</strong> using the product. ",
  },
  {
    img: WaveSkulls(),
    text: "The chemicals used in bamboo processing have the potential to harm the environment through <strong style=color:white> water pollution.</strong> ",
  },
  {
    img: Recycle(),
    text: "<strong>Linen</strong> uses a much <strong style=color:white> smaller amount of energy, pesticides, insecticides, and fertilizers </strong> than other massively produced fibres such as cotton and polyester.",
  },
  {
    img: WaterCup(),
    text: "Linen requires <strong style=color:white> 60% less water </strong> for growth in comparison to cotton. Linen also has a higher carbon absorption rate than cotton.",
  },
  {
    img: Flax(),
    text: "Flax can grow in poor quality soil, and in many cases has the ability to clean polluted soil. Leading to a higher rate of soil rehabilitation for each flax farm.",
  },
];

// pass all of gallery through scroll function with three params //
// ScrollContainer(index, image, text) //
for (var i = 1; i < 7; i++) {
  scrollContainer.innerHTML += ScrollContainer(i, gallery[i - 1].img, gallery[i - 1].text);
}

question.innerHTML += QuestionUI("What harmful ingredient does bamboo not require to grow plentifully?", "Manure", "Pesticides", "../pages/wrong.html", "../pages/nav.html", 'plant')

