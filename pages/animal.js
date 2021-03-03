const scrollContainer = document.querySelector(".scroll-container");

//array of objects we can change to get different output on the scroll-rig//
const gallery = [
  {
    img: "jeans",
    text: "jkghasghjkdasjkdasjkdk",
  },
  {
    img: "jeans",
    text: "text 2",
  },
  {
    img: "jeans",
    text: "text 3",
  },
  {
    img: "jeans",
    text: "text 4",
  },
  {
    img: "jeans",
    text: "text 5",
  },
  {
    img: "jeans",
    text: "text 6",
  },
];

// pass all of gallery through scroll function with three params //
// ScrollContainer(index, image, text) //
for (var i = 1; i < 7; i++) {
  scrollContainer.innerHTML += ScrollContainer(i, gallery[i - 1].img, gallery[i - 1].text);
}
