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
    img: SkullBones(),
    text: "The transformation of crude oil into petrochemicals <Strong>releases toxins </strong>into the atmosphere that are dangerous for human and ecosystem health.",
  },
  {
    img: FossilFuel(),
    text: "Polyester is a synthetic fiber derived from petroleum, a <strong>nonrenewable fossil fuel.</strong>",
  },
  {
    img: "animation",
    text: "Nearly <strong>70 million barrels of oil </strong>are used each year to make polyester around the world, which is now the most commonly used fiber in making clothes.",
  },
  {
    img: "animation",
    text: "<strong>70% less energy </strong>is required to produce Recycled Polyester.",
  },
  {
    img: "animation",
    text: "Producing recycled polyester requires fewer resources and far <strong>less CO2 emissions.</strong>",
  },
];

// pass all of gallery through scroll function with three params //
// ScrollContainer(index, image, text) //
for (var i = 1; i < 7; i++) {
  scrollContainer.innerHTML += ScrollContainer(i, gallery[i - 1].img, gallery[i - 1].text);
}

question.innerHTML += QuestionUI("Which material is more sustainable?", "Polyester", "Recycled Polyester", "../pages/wrong.html", "../index.html", "synthetic")

