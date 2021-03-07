function ButtonContainerUI(containerHeight='450', containerWidth='450', innerBoxWidthHeight='200', image='../Resources/cotton-btn.svg')

{
    return `
            <div style='
            display: flex;
            height: ${containerHeight}px;
            width: ${containerWidth}px;
            '>

            <div style='
            display: flex;
            flex: 1; 
            flex-direction: column;
            justify-content: space-between;'>

                <div style='
                width:${innerBoxWidthHeight}px;
                height:${innerBoxWidthHeight}px;
                background-color:#FFFFFF;
                border-radius: 20px;
                box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
                display: flex;
                align-items: center;
                justify-content: center;'>
                
                <img src='${image}'>
                </div>
                <div style='
                width:${innerBoxWidthHeight}px;
                height:${innerBoxWidthHeight}px;
                background-color:#FFFFFF;
                border-radius: 20px;
                box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
                display: flex;
                align-items: center;
                justify-content: center;'>
                
                <img src='${image}'>

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
                width:${innerBoxWidthHeight}px;
                height:${innerBoxWidthHeight}px;
                background-color:#FFFFFF;
                border-radius: 20px;
                box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
                display: flex;
                align-items: center;
                justify-content: center;'>
                
                <img src=${image}>

                </div>

                <div style='
                width:${innerBoxWidthHeight}px;
                height:${innerBoxWidthHeight}px;
                background-color:#FFFFFF;
                border-radius: 20px;
                box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
                display: flex;
                align-items: center;
                justify-content: center;'>
                
                <img src=${image}>
                
                </div>
            </div>
     </div>
    `
}

export const ButtonContainer = ButtonContainerUI();