const scrollContainer = document.querySelector(".scroll-container");
const logo = document.querySelector(".logo");
const question = document.querySelector(".question");

//array of objects we can change to get different output on the scroll-rig//
const gallery = [
  {
    img: Bottle(),
    text: "A pair of jeans made from 1kg of cotton fiber can take up to <strong>20,000 litres</strong> of water to produce.",
  },
  {
    img: Gas(),
    text: "Sheep produce around 19,561,740 kg of methane gas annually, one of the most toxic gases for our planet. 1 kg of methane can heat up Earth nearly <strong> 80x more than CO2 </strong> in some cases.",
  },
  {
    img: Tree(),
    text: "The ground on sheep farms is prone to overgrazing. This leads to a <strong>lack of nutrients and strength in the soil </strong> over time, degrading and weakening it.",
  },
  {
    img: Drop(),
    text: "<strong>Recycled Wool</strong> uses less water compared to virgin wool by a factor of 9.",
  },
  {
    img: SheepIcon(),
    text: "Modern day sorting methods <strong>remove the need to dye</strong> recycled wools, reducing water and chemical usage drastically.",
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

question.innerHTML += QuestionUI("Which material is more sustainable?", "Cotton", "Recycled Cotton", "../../index.html", "../../index.html")

logo.innerHTML += Logo()