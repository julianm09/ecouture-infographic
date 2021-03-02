function ButtonGreenUI(text="Get Started"){
    return `<div style='
    background-color:#51B27E;
    min-height:100px;
    min-width:300px;
    display: inline-flex;
    border-radius: 10px 10px 10px 10px;
    justify-content:center;
    align-items:center;
    color:#FFFFFF;
    font-size:18px;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 0px 2px 5px 1px grey;'>
    ${text}
    </div>`
}

export const ButtonGreen = ButtonGreenUI();