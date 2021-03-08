function Progress(completedState) {


    console.log(completedState)


    setTimeout(function()
    {
        if(completedState.cotton)
        {
            document.getElementById("topLeftProgress").style.opacity = '100%'
            document.getElementById("topLeftEarth").style.filter = 'none'
            document.getElementById("cotton").style.background = '#36B9C5'
            document.getElementById("cottonImg").src = '../comps/resources/cotton-btn-white.svg'
            
            document.getElementById("topLeftProgress").style.transition = "2s "
            document.getElementById("topLeftEarth").style.transition = "2s "
            document.getElementById("cotton").style.transition = '2s'

        }
    }, 0);

    setTimeout(function()
    {
        if(completedState.plant)
        {
            document.getElementById("topRightProgress").style.opacity = '100%'
            document.getElementById("topRightEarth").style.filter = 'none'
            document.getElementById("plant").style.background = '#51B27E'
            document.getElementById("plantImg").src = '../comps/resources/plant-btn-white.svg'

            document.getElementById("topRightProgress").style.transition = "2s "
            document.getElementById("topRightEarth").style.transition = "2s "
            document.getElementById("plant").style.transition = '2s'

        }
    }, 1000);

    setTimeout(function()
    {
        if(completedState.animal)
        {
            document.getElementById("bottomLeftProgress").style.opacity = '100%'
            document.getElementById("bottomLeftEarth").style.filter = 'none'
            document.getElementById("animal").style.background = '#E67C20'
            document.getElementById("animalImg").src = '../comps/resources/animal-btn-white.svg'

            document.getElementById("bottomLeftProgress").style.transition = "2s "
            document.getElementById("bottomLeftEarth").style.transition = "2s "
            document.getElementById("animal").style.transition = '2s'

        }
    }, 2000);

    setTimeout(function()
    {
        if(completedState.synthetic)
        {
            document.getElementById("bottomRightProgress").style.opacity = '100%'
            document.getElementById("bottomRightEarth").style.filter = 'none'
            document.getElementById("synthetic").style.background = '#AF75BD'
            document.getElementById("syntheticImg").src = '../comps/resources/synthetic-btn-white.svg'

            document.getElementById("bottomRightProgress").style.transition = "2s "
            document.getElementById("bottomRightEarth").style.transition = "2s "
            document.getElementById("synthetic").style.transition = '2s'

        }
    }, 3000);
    
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
        top: ;"
        
        id="topLeftProgress"
         src="../comps/Resources/progress-cotton.svg">

        <img 
        style="
        position: absolute;
        right: 0;
        bottom: -1px;
        
        "
        id="topLeftEarth"
        src="../comps/Resources/earth-cotton.png">

       

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
        top: ;
        "
        id="topRightProgress"

        src="../comps/Resources/progress-plant.svg">

        <img style="
        position: absolute;
        left: 0;
        bottom: -1px;
        "
        
        id="topRightEarth"

        src="../comps/Resources/earth-plant.png">
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
        " 
        
        id="bottomLeftProgress"
        
        src="../comps/Resources/progress-animal.svg">

        <img style="
        position: absolute;
        right: 0;
        top: 0;
        "
        
        id="bottomLeftEarth"
        
        src="../comps/Resources/earth-animal.png">
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
            " 
            
            id="bottomRightProgress"
            
            src="../comps/Resources/progress-synthetic.svg">

            <img style="
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
