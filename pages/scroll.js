const ScrollContainer = (i, img, para) => {

//img param is just image name before .svg 
console.log(img);

//return animation-container animation and text
  return `
        <div id="trigger-${i}" class="animation-container">
        <div class="content-container">

        <div width="300px" height="300px" class="animation" id="anim-${i}"> 
        ${img}
        
        <p class="anim-para" id="anim-para-${i}"style="color:white; font-size:18px; font-family: 'Open Sans', sans-serif; margin-top:100px; text-align:left;" >${para}</p>


        </div>




        </div>
        </div>
        `;

        
};


//on load activate animation 1 
window.onload = () => {

    document.getElementById(`anim-1`).style.animationName = `animate1`;

    
/*     document.getElementById(`anim-1-2`).style.animationName = `animate1-2`;
    document.getElementById(`anim-para-1`).style.animationName = `animate1-3`; */

}


//on scroll activate animations 
window.addEventListener("scroll", () => {
    
  for (var i = 1; i < 7; i++) {
    var top = document.getElementById(`trigger-${i}`).getBoundingClientRect().top;

    if (top < 300 && top > -5) {
      console.log(top);

      document.getElementById(`anim-${i}`).style.animationName = `animate${i}`
/*       document.getElementById(`anim-${i}-2`).style.animationName = `animate${i}-2`;
      document.getElementById(`anim-para-${i}`).style.animationName = `animate${i}-3`; */
    }
  }
});









{/* <svg width="300px" height="300px" class="animation" id="anim-${i}"> 
<path class="jean"></path>      
    <image xlink:href="../comps/Animations/${img}.svg" src="yourfallback.png" width="300px" height="300px"/>    
</svg>

<svg width="300px" height="300px" class="animation" id="anim-${i}-2">       
<image xlink:href="../comps/Animations/${img}.svg" src="yourfallback.png" width="300px" height="300px"/>    
</svg> */}