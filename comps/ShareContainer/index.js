/* import facebook from '../Resources/facebook.svg'
import instagram from '../Resources/instagram.svg' */

const Share = () => {
  return `
    <div>
        <div style="
            width: 250px;
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
        ">
            <p style="
                color: #51B27E;
                font-family: Arial, Helvetica, sans-serif;
            ">
                Challenge your friends !
            </p>
        </div>

        <div style="
            width: 250px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
        ">
            <p style="
                color: #3884ff;
                font-family: Arial, Helvetica, sans-serif;
            ">
                Share to your story
            </p>
        </div>

        <div style="
            width: 250px;
            height: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        ">
            <img  src="${facebook}"
            style="
                margin-right: 10px;
            ">

            <img  src="${instagram}"
            style="
                margin-left: 10px;
            ">
         </div>


    </div>
    `;
};

//export const ShareContainer = Share();
