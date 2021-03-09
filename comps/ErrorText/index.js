function ErrorTextUI(
  text = "Sorry, cotton is not a sustainable material!",
  size = "18",
  textColor = "#ffffff",
  width = "180",
  height = "66"
) {
  return `

        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap" rel="stylesheet">

        <div style='
        font-family: "nunito";
        font-size: ${size}px;
        font-weight: bold;
        color: ${textColor};
        text-align:center;
        width:${width}px;
        height:${height}px; 
        overflow:auto;'>
            ${text}
        </div>
    `;
}

//export const ErrorText = ErrorTextUI();
