const ButtonWhiteUI = (img) => {
  return `<div
    style="
    background:white;
    border-radius: 10px;
    width: 130px;
    height: 130px;
    box-shadow: 4px 4px 10px grey, -4px -4px 10px white;
    display: flex;
    align-items: center;
    justify-content: center;
    ">

    <img src=${img}


    </div>`;
};

export const ButtonWhite = ButtonWhiteUI();
