function QuestionUI(
  question = "Which material is more sustainable?",
  wrongAnswer = "Cotton",
  rightAnswer = "Recycled Cotton",
  wrongPath = "../../pages/wrong.html",
  rightPath = "../../index.html",
  completed
) {


//get state from local storage 
let completedState = {}


/* localStorage.completedLevels ? completedState = JSON.parse(localStorage.getItem("completedLevels")) : completedState = completedLevels
 */

console.log(initialState)
console.log(localStorage.completedLevels)

if(localStorage.completedLevels){
    console.log(localStorage)
    completedState = JSON.parse(localStorage.getItem("completedLevels"))
} else {
    completedState = initialState
}

handleComplete = () => {

    

}

//handle click of right answer
right = (el) => {



    completedState[completed] = true 
    localStorage.setItem("completedLevels", JSON.stringify(completedState));
    window.location.href = rightPath;

}


//handle click of wrong answer



wrong = (el) => {
/*     window.location.href = wrongPath; */

completedState[completed] = true 
localStorage.setItem("completedLevels", JSON.stringify(completedState));
window.location.href = wrongPath;
}


  return `

    <div style="
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    height:500px;
    align-items:center;

    ">



    <p style="
    color:white;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 24px;
    font-weight: 600;

    display:flex;
    text-align:center;
    width="80vw"
    border-radius:5px;
    ">${question}
    </p>
  

    <div style="
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    ">

    <div 
    onclick="wrong(this)" 
    id="wrong-answer" 
    style="
    color: white;
    background-color: #3884FF;
    height:50px;
    width:80vw
    margin-top: 10px;
    border-radius: 12px;
    box-shadow: 4px 4px 4px rgba(128, 128, 128, 0.367) , -4px -4px 4px rgba(255, 255, 255, 0.346); 
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: 600;
    font-size: 18px;
    ">
    ${wrongAnswer}
    </div>


    <div 
    onclick="right(this)" 
    id="right-answer"
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
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: 600;
    font-size: 18px;
    ">
    ${rightAnswer}
    </div>

     </div>

    </div>
    `;
}

/* export const QuestionContainer = QuestionUI(); */
