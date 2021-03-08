function Progress(completedState) {



    console.log(completedState)


    setTimeout(function()
    {
        if(completedState.cotton)
        {
            document.getElementById("topLeftProgress").style.opacity = '100%'
            document.getElementById("topLeftEarth").style.filter = 'none'
            document.getElementById("cotton").style.background = 'green'
        }
    }, 1000);



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

        <img  
     
        style="
        position: absolute;
        left: 0;

        
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
