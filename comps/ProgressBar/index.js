function Progress(completedState) {
  console.log(completedState);

  setTimeout(function () {
    if (completedState.cotton) {
    
      document.getElementById("topLeftProgress").style.opacity = "100%";
      document.getElementById("topLeftEarth").style.filter = "none";
      document.getElementById("cotton").style.background = "#36B9C5";
      document.getElementById("cottonImg").src =
        "../comps/resources/cotton-btn-white.svg";

      document.getElementById("topLeftProgress").style.transition = "2s ";
      document.getElementById("topLeftEarth").style.transition = "2s ";
      document.getElementById("cotton").style.transition = "2s";
    }
  }, 1000);

  setTimeout(function () {
    if (completedState.plant) {
      document.getElementById("topRightProgress").style.opacity = "100%";
      document.getElementById("topRightEarth").style.filter = "none";
      document.getElementById("plant").style.background = "#51B27E";
      document.getElementById("plantImg").src =
        "../comps/resources/plant-btn-white.svg";

      document.getElementById("topRightProgress").style.transition = "2s ";
      document.getElementById("topRightEarth").style.transition = "2s ";
      document.getElementById("plant").style.transition = "2s";
    }
  }, 1000);

  setTimeout(function () {
    if (completedState.animal) {
      document.getElementById("bottomLeftProgress").style.opacity = "100%";
      document.getElementById("bottomLeftEarth").style.filter = "none";
      document.getElementById("animal").style.background = "#E67C20";
      document.getElementById("animalImg").src =
        "../comps/resources/animal-btn-white.svg";

      document.getElementById("bottomLeftProgress").style.transition = "2s ";
      document.getElementById("bottomLeftEarth").style.transition = "2s ";
      document.getElementById("animal").style.transition = "2s";
    }
  }, 1000);

  setTimeout(function () {
    if (completedState.synthetic) {
      document.getElementById("bottomRightProgress").style.opacity = "100%";
      document.getElementById("bottomRightEarth").style.filter = "none";
      document.getElementById("synthetic").style.background = "#AF75BD";
      document.getElementById("syntheticImg").src =
        "../comps/resources/synthetic-btn-white.svg";

      document.getElementById("bottomRightProgress").style.transition = "2s ";
      document.getElementById("bottomRightEarth").style.transition = "2s ";
      document.getElementById("synthetic").style.transition = "2s";
    }
  }, 1000);



  return `
  
  
  <div

    style="
    width: 30vh;
    height: 30vh;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;    
">

        <div style="
        display:flex;
        position:relative;


        ">

        <svg 
        
        style="

        position: absolute;
        display: flex;
        left:3px;
        bottom:-4px
        "
        width="15vh" height="15vh" viewBox="0 0 125 126" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="topLeftProgress"  d="M121 14.8383V0C54.1684 0 0 54.6161 0 122H14.7166C14.7166 62.8038 62.289 14.8383 121 14.8383Z" fill="#36B9C5"/>
        </svg>


        <img 
        style="
        width: 10vh;
        height: 10vh;
        position: absolute;
        right: -1px;
        bottom: 0px;
        
        "
        id="topLeftEarth"
        src="../comps/Resources/earth-cotton.png">

       

        </div>



        <div style="
        position: relative;
        display: flex;


        ">

        <svg 
        style="
        position: relative;
        display: flex;
        left:-3px;
        bottom:-4px;
        "
        width="15vh" height="15vh" viewBox="0 0 125 126" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="topRightProgress"  d="M106.283 122L121 122C121 54.6161 66.8316 -2.29378e-06 6.05703e-06 -5.12379e-06L5.38751e-06 14.8383C58.711 14.8383 106.283 62.8038 106.283 122Z" fill="#51B27E"/>
        </svg>




        <img style="


        width: 10vh;
        height: 10vh;
        position: absolute;
        left: 0;
        bottom: -1px;
        "
        
        id="topRightEarth"

        src="../comps/Resources/earth-plant.png">
        </div>




        <div style="

        position: relative;
        display: flex;

        ">

        <svg 
        style="
        position: relative;
        display: flex;
        left:3px;
        top:-4px
        "
        width="15vh" height="15vh" viewBox="0 0 125 119" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path  id="bottomLeftProgress"  d="M14.7166 8.10193e-06L-5.02681e-06 8.74521e-06C-2.25037e-06 63.5176 54.1684 115 121 115L121 101.013C62.289 101.013 14.7166 55.7997 14.7166 8.10193e-06Z" fill="#E67C20"/>
        </svg>


        <img style="


        width: 10vh;
        height: 10vh;
        position: absolute;
        right: 0;
        top: -1px;
        "
        
        id="bottomLeftEarth"
        
        src="../comps/Resources/earth-animal.png">
        </div>


    


        <div style="
    
            position: relative;
            display: flex;

        ">

        <svg
        
        style="
    
            position: relative;
            display: flex;

            position: relative;
            display: flex;
            left:-3px;
            top:-4px
        "
        
        width="15vh" height="15vh" viewBox="0 0 125 119" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="bottomRightProgress"  d="M4.81551e-06 101.013L6.05703e-06 115C66.8316 115 121 63.5176 121 -9.79899e-06L106.283 -8.53185e-06C106.283 55.7997 58.711 101.013 4.81551e-06 101.013Z" fill="#AF75BD"/>
        </svg>




            <img style="

        width: 10vh;
        height: 10vh;
 
            position: absolute;
            left: 0;
            top: 0;
            "
            
            id="bottomRightEarth"
            
            src="../comps/Resources/earth-synthetic.png">

        </div>

  
    </div>`;
}

// export const ProgressBar = Progress();
