

document.querySelector("#blueText").innerHTML += BlueTextUI("Choose a material to help save the world!", "0")

document.querySelector("#buttons").innerHTML +=  ButtonContainerUI("25", "25", "10", "../comps/Resources/cotton-btn.svg", "../comps/Resources/animal-btn.svg", "../comps/Resources/plant-btn.svg", "../comps/Resources/synthetic-btn.svg", 'cotton', 'animal', 'plant', 'synthetic');







    // initialize state object 
    let completedState = {}

    // if completed levels exist use completed levels from local storgage 
    if(localStorage.completedLevels){

    completedState = JSON.parse(localStorage.getItem("completedLevels"))


    //check if all completed levels are true 
    const completeAllLevels = Object.values(completedState).every(x => (x === true))


    //if all completed levels are true clear storage and go to finish page 
    if(completeAllLevels){



      
        setTimeout(function () {
            
              document.getElementById("topRightProgress").style.fill = "#3884FF";
        

              document.getElementById("topLeftProgress").style.fill = "#3884FF";
         

              document.getElementById("bottomRightProgress").style.fill = "#3884FF";

              document.getElementById("bottomLeftProgress").style.fill = "#3884FF";
        
            
          }, 2000);

          setTimeout(function () {
            
            document.getElementById("topRightProgress").style.opacity = "0";
      

            document.getElementById("topLeftProgress").style.opacity = "0";
       

            document.getElementById("bottomRightProgress").style.opacity = "0";

            document.getElementById("bottomLeftProgress").style.opacity = "0";

            document.getElementById("button-container").style.transition = "1s ease";

            document.getElementById("button-container").style.opacity = "0";

            document.getElementById("blueText").style.transition = "1s ease";

            document.getElementById("blueText").style.opacity = "0";
      
          
        }, 2500);


        setTimeout(function()
        {
            localStorage.clear();
            window.location.href = '../pages/finish.html'
        }, 3500);
    }

    
    // if completed levels dont exist use initial stae of all false 
    } else {


    completedState = initialState
}



    // display state on nav page 
    const InitialState = () => {
        return`
        <div>animal=${completedState.animal}</div>
        <div>cotton=${completedState.cotton}</div>
        <div>plant=${completedState.plant}</div>
        <div>synthetic=${completedState.synthetic}</div>
        `

    }
    
    // document.getElementById('completed').innerHTML += InitialState()


    // //click clear button and clear state.. go back to index
    // document.getElementById('clear').addEventListener('click', () => {

    //     localStorage.clear();

    //     window.location.href = '../index.html'



    // });

    
    document.querySelector("#earth").innerHTML += Progress(completedState)

    console.log(completedState)


    document.getElementById("logo").innerHTML += Logo()