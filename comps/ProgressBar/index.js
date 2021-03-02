import progressAnimal from "../Resources/progress-animal.svg";
import earthAnimal from "../Resources/earth-animal.png";
import earthCotton from "../Resources/earth-cotton.png";
import earthPlant from "../Resources/earth-plant.png";
import earthSynthetic from "../Resources/earth-synthetic.png";
import progressCotton from "../Resources/progress-cotton.svg";

import progressPlant from "../Resources/progress-plant.svg";
import progressSynthetic from "../Resources/progress-synthetic.svg";

function Progress() {


    const cotton = {
        "complete" : true
    }

  return `
  
  
  <div
    style="
    width: 250px;
    height:250px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;    
">

        <div style="
        width: 125px;
        height:125px;
        position: relative;
        display: flex;
        left:1px;
        ">

        <img  style="
        position: absolute;
        left: 0;
        top: 0;
        
        " src="${progressCotton}">

        <img 
        onClick="${() => this.style.background = 'red'}"
        style="
        position: absolute;
        right: 0;
        bottom: 0;
        filter: ${cotton.complete ? 'none' : 'grayscale(100%)'};
        "src="${earthCotton}">

        </div>



        <div style="
        width: 125px;
        height:125px;

        position: relative;
        display: flex;
        ">

        <img  style="
        position: absolute;
        left: ;
        top: 0;
        " src="${progressPlant}">

        <img style="
        position: absolute;
        left: 0;
        bottom: 0;
        "src="${earthPlant}">

        </div>




        <div style="
        width: 125px;
        height:125px;
     
        position: relative;
        display: flex;
        ">

        <img  style="
        position: absolute;
        left: 0;
        top: 0;
        left:1px;
        " src="${progressAnimal}">

        <img style="
        position: absolute;
        right: 0;
        top: 0;
        "src="${earthAnimal}">

        </div>


    


        <div style="
            width: 125px;
            height:125px;
           
            position: relative;
            display: flex;
        ">

            <img  style="
            position: absolute;
            left: 0;
            top: 0;
            " src="${progressSynthetic}">

            <img style="
            position: absolute;
            left: 0;
            top: 0;
            "src="${earthSynthetic}">

        </div>

  
    </div>`;
}

export const ProgressBar = Progress();
