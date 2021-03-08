

document.querySelector("#logoImg").src = "../comps/resources/greenlogo.png"
document.querySelector("#blueText").innerHTML += BlueTextUI("Choose a material to help save the world!", "0")
document.querySelector("#earth").innerHTML += Progress()
document.querySelector("#buttons").innerHTML +=  ButtonContainerUI("375", "375", "175", "../comps/resources/cotton-btn.svg", "../comps/resources/animal-btn.svg", "../comps/resources/plant-btn.svg", "../comps/resources/synthetic-btn.svg");








    // initialize state object 
    let completedState = {}

    // if completed levels exist use completed levels from local storgage 
    if(localStorage.completedLevels){

    completedState = JSON.parse(localStorage.getItem("completedLevels"))


    //check if all completed levels are true 
    const completeAllLevels = Object.values(completedState).every(x => (x === true))


    //if all completed levels are true clear storage and go to finish page 
    if(completeAllLevels){
        localStorage.clear();
        window.location.href = '../pages/finish.html'
        
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
    
    document.getElementById('completed').innerHTML += InitialState()


    //click clear button and clear state.. go back to index
    document.getElementById('clear').addEventListener('click', () => {

        localStorage.clear();

        window.location.href = '../index.html'



    });

    document.getElementById('progress').innerHTML += Progress()
