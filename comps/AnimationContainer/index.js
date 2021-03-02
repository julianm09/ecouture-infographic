import placeholder from '../Resources/cotton-btn.svg'
const Animation = () => {

    return `
    <div style="
        width: 250px;
        height: 300px;
        display: flex;
        flex-direction: column;
	    flex-wrap: nowrap
        align-items: center;
        justify-content: center;
    ">

        <div style="
            width: 250px;
            height: 120px;
            display: flex;
            justify-content: center;
            margin-bottom: 5%;
        ">
        <img  src="${placeholder}">
        </div>

        <div style="
            width: 250px;
            height: 120px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        ">
            <p style="
            //color: white;
            font-family: Arial, Helvetica, sans-serif;
            
            ">
            Recycled Cotton makes use of textile waste which reduces the negative impacts of cotton farming.
            </p>
        </div>

    

    

    </div>`
}

export const AnimationContainer = Animation();