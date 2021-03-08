function ButtonContainerUI(containerHeight='450', containerWidth='450', innerBoxWidthHeight='200', cottonImage, animalImage, plantImage, syntheticImage, cottonPage, animalPage, plantPage, syntheticPage)

{
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
                justify-content: center;'
                
                id="cotton"
                onclick="window.location = '../pages/${cottonPage}.html';"
                >
                
                <img 
                style="width:5vh;"
                src='${cottonImage}' id="cottonImg">
                </div>
                <div style='
                width:${innerBoxWidthHeight}vh;
                height:${innerBoxWidthHeight}vh;
                background-color:#FFFFFF;
                border-radius: 20px;
                box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
                display: flex;
                align-items: center;
                justify-content: center;'
                
                id="animal"
                onclick="window.location = '../pages/${animalPage}.html';"
                >
                
                <img 
                style="width:5vh;"
                src='${animalImage}' id="animalImg">

                </div>

                </div>
                <div style='
                display: flex;
                flex: 1; 
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-end;
                '>

                <div style='
                width:${innerBoxWidthHeight}vh;
                height:${innerBoxWidthHeight}vh;
                background-color:#FFFFFF;
                border-radius: 20px;
                box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
                display: flex;
                align-items: center;
                justify-content: center;'
                
                id="plant"
                onclick="window.location = '../pages/${plantPage}.html';"
                >
                
                <img
                style="width:5vh;"
                src=${plantImage} id="plantImg">

                </div>

                <div style='
                width:${innerBoxWidthHeight}vh;
                height:${innerBoxWidthHeight}vh;
                background-color:#FFFFFF;
                border-radius: 20px;
                box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
                display: flex;
                align-items: center;
                justify-content: center;'

                id="synthetic"
                onclick="window.location = '../pages/${syntheticPage}.html';"
                >
                
                <img
                style="width:5vh;"
                 src=${syntheticImage} id="syntheticImg">
                
                </div>
            </div>
     </div>
    `
}

// export const ButtonContainer = ButtonContainerUI();