function ButtonGreenUI(text="Get Started"){





    return `<div onclick="handleClick()" class="button" style='
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
    box-shadow:4px 4px 10px grey;
    transition: 0.1s ease;

    &:hover{
        color:red
    }
    '>
    ${text}
    </div>`
}

/*  export const ButtonGreen = ButtonGreenUI();  */