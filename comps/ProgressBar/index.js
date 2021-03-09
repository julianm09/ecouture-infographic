function Progress(completedState) {
  console.log(completedState);

  setTimeout(function () {
    if (completedState.cotton) {
      document.getElementById("topLeftProgress").style.opacity = "100%";

      document.getElementById("cotton").style.background = "#36B9C5";
      document.getElementById("cotton-para").style.color = "#ffffff";
      document.getElementById("cottonImg").src =
        "../comps/Resources/cotton-btn-white.svg";

      document.getElementById("topLeftProgress").style.transition = "2s ";
      document.getElementById("topLeftEarth").style.transition = "2s ";
      document.getElementById("cotton").style.transition = "2s";
    }
  }, 1000);

  setTimeout(function () {
    if (completedState.plant) {
      document.getElementById("topRightProgress").style.opacity = "100%";

      document.getElementById("plant").style.background = "#51B27E";
      document.getElementById("plant-para").style.color = "#ffffff";
      document.getElementById("plantImg").src =
        "../comps/Resources/plant-btn-white.svg";

      document.getElementById("topRightProgress").style.transition = "2s ";
      document.getElementById("topRightEarth").style.transition = "2s ";
      document.getElementById("plant").style.transition = "2s";
    }
  }, 1000);

  setTimeout(function () {
    if (completedState.animal) {
      document.getElementById("bottomLeftProgress").style.opacity = "100%";

      document.getElementById("animal").style.background = "#E67C20";
      document.getElementById("animal-para").style.color = "#ffffff";
      document.getElementById("animalImg").src =
        "../comps/Resources/animal-btn-white.svg";

      document.getElementById("bottomLeftProgress").style.transition = "2s ";
      document.getElementById("bottomLeftEarth").style.transition = "2s ";
      document.getElementById("animal").style.transition = "2s";
    }
  }, 1000);

  setTimeout(function () {
    if (completedState.synthetic) {
      document.getElementById("bottomRightProgress").style.opacity = "100%";

      document.getElementById("synthetic").style.background = "#AF75BD";
      document.getElementById("synthetic-para").style.color = "#ffffff";
      document.getElementById("syntheticImg").src =
        "../comps/Resources/synthetic-btn-white.svg";

      document.getElementById("bottomRightProgress").style.transition = "2s ";
      document.getElementById("bottomRightEarth").style.transition = "2s ";
      document.getElementById("synthetic").style.transition = "2s";
    }
  }, 1000);

  return `
  


  <div style=" display: flex; align-items: center; justify-content: center; width:0px; width:0px;">
  <img
  
  id="earth-img"
  style="


  position: absolute;
  width: 20vh;
  filter: grayscale(100);
"src='../Comps/Resources/earth.png'>


  <div

    style="

    position: relative;
    display: grid;

    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;    
">




        <svg 
        
 
        width="15vh" height="15vh" viewBox="0 0 125 126" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
        
        
        id="topLeftProgress"  d="M121 14.8383V0C54.1684 0 0 54.6161 0 122H14.7166C14.7166 62.8038 62.289 14.8383 121 14.8383Z" stroke="#36B9C5" fill="#36B9C5"/>
        </svg>




      

        <svg 
        style="

        display: flex;
        position: absoulte;
        left: -2px;
        bottom: -2px;
        "
        width="15vh" height="15vh" viewBox="0 0 125 126" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="topRightProgress"  d="M106.283 122L121 122C121 54.6161 66.8316 -2.29378e-06 6.05703e-06 -5.12379e-06L5.38751e-06 14.8383C58.711 14.8383 106.283 62.8038 106.283 122Z" fill="#51B27E"/>
        </svg>






        <svg 
        style="

        display: flex;
        position: absoulte;
        right: 0;
        top: 0;
        "
        width="15vh" height="15vh" viewBox="0 0 125 119" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path  id="bottomLeftProgress"  d="M14.7166 8.10193e-06L-5.02681e-06 8.74521e-06C-2.25037e-06 63.5176 54.1684 115 121 115L121 101.013C62.289 101.013 14.7166 55.7997 14.7166 8.10193e-06Z" fill="#E67C20"/>
        </svg>





        <svg
        
        style="
    
 
            display: flex;


            display: flex;
            position: absoulte;
            left: 0;
            top: 0;
        "
        
        width="15vh" height="15vh" viewBox="0 0 125 119" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="bottomRightProgress"  d="M4.81551e-06 101.013L6.05703e-06 115C66.8316 115 121 63.5176 121 -9.79899e-06L106.283 -8.53185e-06C106.283 55.7997 58.711 101.013 4.81551e-06 101.013Z" fill="#AF75BD"/>
        </svg>


  
        </div>


  
    </div>


    
    `;
}

// export const ProgressBar = Progress();
