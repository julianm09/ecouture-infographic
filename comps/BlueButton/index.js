function BlueButtonUI(text = "Continue", link = "../index.html") {
  handleClick = () => {
    window.location.href = link;
  };

  return `
    <div 
    onclick="handleClick()"
    style="
    color: white;
    background-color: #3884FF;
    height:50px;
    margin-top: 10px;
    border-radius: 12px;
    box-shadow: 4px 4px 4px rgba(128, 128, 128, 0.367) , -4px -4px 4px rgba(255, 255, 255, 0.346); 
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 18px;
    width: 80vw;
    ">
    ${text}
    </div>`;
}

//export const BlueButtonUI = MyBlueButtonUI();
