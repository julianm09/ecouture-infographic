function QuestionUI(question = 'Which material is more sustainable?', wrongAnswer = 'Cotton', rightAnswer = 'Recycled Cotton'){

    


    





    return `

    <div style="
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    height:500px;

    ">

    <div style="
    
    ">
    <p style="
    color:white;
    font-family:arial;
    font-size:x-large;
    display:flex;
    text-align:center;
    width="80vw"
    border-radius:5px;
    ">${question}
    </p>
    </div>

        <div style="
        display:flex;
        flex-direction:column;
        justify-content:space-between;

         ">

    <div id="wrong-answer" 
    style="
    color: white;
    background-color: #3884FF;
    height:50px;
    width:80vw
    margin-top: 10px;
    border-radius: 12px;
    box-shadow: 4px 4px 4px rgba(128, 128, 128, 0.367) , -4px -4px 4px rgba(255, 255, 255, 0.346);;
 
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial;
    font-size: 18px;
    ">
    ${wrongAnswer}
    </div>
      <div onclick="wrongAnswer()"
      
      id="wrong-answer"
      style="
      color: white;
     background-color: #3884FF;
      height:50px;
     width:80vw;
     margin-top: 20px;
     border-radius: 12px;
     box-shadow: 4px 4px 4px rgba(128, 128, 128, 0.367) , -4px -4px 4px rgba(255, 255, 255, 0.346);;
     display: flex;
     justify-content: center;
        align-items: center;
        font-family: Arial;
        font-size: 18px;

        ">
        ${rightAnswer}
         </div>

     </div>

    </div>
    `
}

//export const QuestionContainer = QuestionUI();