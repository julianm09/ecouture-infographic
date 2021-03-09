function ButtonContainerUI(
  containerHeight = "450",
  containerWidth = "450",
  innerBoxWidthHeight = "200",
  cottonImage,
  animalImage,
  plantImage,
  syntheticImage,
  cottonPage,
  animalPage,
  plantPage,
  syntheticPage
) {
  return `
            <div 
            id="button-container"
            style='
            display: flex;
            height: ${containerHeight}vh;
            width: ${containerWidth}vh;
            '>

            <div style='
            display: flex;
            flex: 1; 
            
            flex-direction: column;
            justify-content: space-between;'>

                <div style='
                width:${innerBoxWidthHeight}vh;
                height:${innerBoxWidthHeight}vh;
                background-color:#FFFFFF;
                border-radius: 20px;
                box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
                display: flex;
                align-items: center;
                justify-content: flex-end;
                flex-direction: column;
                transition: 1s ease;
                
                
                '
                
                id="cotton"
                onclick="window.location = '../pages/${cottonPage}.html';"
                >
                
                <img 
                style="width:5vh;"
                src='${cottonImage}' id="cottonImg">

                <p id="cotton-para"  style="color: #36B9C5; font-family: Montserrat Alternates, sans-serif; ">Cotton</p>
                </div>




                <div style='
                width:${innerBoxWidthHeight}vh;
                height:${innerBoxWidthHeight}vh;
                background-color:#FFFFFF;
                border-radius: 20px;
                box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
                display: flex;
                align-items: center;
                justify-content: flex-end;
                flex-direction: column;
                transition: 1s ease;
                '
                
                id="animal"
                onclick="window.location = '../pages/${animalPage}.html';"
                >
                
                <img 
                style="width:5vh;"
                src='${animalImage}' id="animalImg">

                <p id="animal-para" style="color:#E67C20; font-family: Montserrat Alternates, sans-serif; ">Animal</p>

                </div>

                </div>
                <div style='
                display: flex;
                flex: 1; 
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-end;
                flex-direction: column;
                
                '>

                <div style='
                width:${innerBoxWidthHeight}vh;
                height:${innerBoxWidthHeight}vh;
                background-color:#FFFFFF;
                border-radius: 20px;
                box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
                display: flex;
                align-items: center;
                justify-content: flex-end;
                flex-direction: column;
                transition: 1s ease;
                '
                
                id="plant"
                onclick="window.location = '../pages/${plantPage}.html';"
                >
                
                <img
                style="width:5vh;"
                src=${plantImage} id="plantImg">

                <p id="plant-para" id="plant-para" style="color:  #51B27E; font-family: Montserrat Alternates, sans-serif; ">Plant</p>

                </div>

                <div style='
                width:${innerBoxWidthHeight}vh;
                height:${innerBoxWidthHeight}vh;
                background-color:#FFFFFF;
                border-radius: 20px;
                box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
                display: flex;
                align-items: center;
                justify-content: flex-end;
                flex-direction: column;
                transition: 1s ease;
                '
                id="synthetic"
                onclick="window.location = '../pages/${syntheticPage}.html';"
                >
                <img
                style="width:5vh;
                "
                 src=${syntheticImage} id="syntheticImg">
                 <p  id="synthetic-para" style="color: #AF75BD; font-family: Montserrat Alternates, sans-serif; ">Synthetic</p>
                
                </div>
            </div>
     </div>
    `;
}

// export const ButtonContainer = ButtonContainerUI();
