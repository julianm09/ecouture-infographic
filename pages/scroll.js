const ScrollContainer = (i, img, para) => {

//img param is just image name before .svg 
console.log(img);

//return animation-container animation and text
  return `
        <div id="trigger-${i}" class="animation-container">
        <div>

        <img class="animation" id="anim-${i}" src="../comps/Resources/${img}.svg">

        <p id="anim-${i}"style="color:white; margin-top:100px; text-align:center;" >${para}</p>

        </div>
        </div>
        `;

        
};


//on load activate animation 1 
window.onload = () => {

    document.getElementById(`anim-1`).style.animationName = `animate1`;

}


//on scroll activate animations 
window.addEventListener("scroll", () => {
    
  for (var i = 1; i < 7; i++) {
    var top = document.getElementById(`trigger-${i}`).getBoundingClientRect()
      .top;

    if (top < 300 && top > -50) {
      console.log(top);

      document.getElementById(`anim-${i}`).style.animationName = `animate${i}`;
    }
  }
});
