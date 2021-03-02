function Container(){
    return `

    <div style="
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    height:500px;
    width:55vw;
    ">

    <div style="
    
    ">
    <p style="
    color:white;
    background-color: #A4A4A4;
    font-family:arial;
    font-size:x-large;
    display:flex;
    text-align:center;
    max-width:300px;
    border-radius:5px;
    ">
    Which material is more sustainable?</p>
    </div>

        <div style="
        display:flex;
        flex-direction:column;
        justify-content:space-between;

         ">

    <div style="
    color: white;
    background-color: #3884FF;
    height:50px;
    max-width:300px;
    margin-top: 10px;
    border-radius: 12px;
    box-shadow: 0px 4px 10px grey;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial;
    font-size: x-large;
    ">
    Cotton
    </div>

      <div style="
      color: white;
     background-color: #3884FF;
      height:50px;
     max-width:300px;
     margin-top: 20px;
     border-radius: 12px;
        box-shadow: 0px 4px 10px grey;
     display: flex;
     justify-content: center;
        align-items: center;
        font-family: Arial;
        font-size: x-large;
        ">
        Recycled Cotton
         </div>

     </div>

    </div>
    `
}

export const QuestionContainerUI = Container();