function BlueTextUI(text="placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder "){
    return `<div style='
    font-size:18px;
    font-family: Arial, Helvetica, sans-serif;
    color:#3884FF;
    display: inline-flex;
    min-height:150px;
    min-width:100px;
    max-width:375px;
    overflow:auto;
    text-align:center;'>
    ${text}
    </div>`
}

export const BlueText = BlueTextUI();