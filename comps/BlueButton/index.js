function BlueButtonUI(text="Continue", link="../index.html"){


    handleClick = () => {
       window.location.href = link

    }


    return `
    <div 
    onclick="handleClick()"
    style="
    cursor:pointer;
    color: white;
    background-color: #3884FF;
    height:50px;
    border-radius: 12px;
    box-shadow: 4px 4px 10px grey;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight 700;
    width:80vw;

    ">
    ${text}
    </div>`
}

//export const BlueButtonUI = MyBlueButtonUI();
