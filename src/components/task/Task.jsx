import {Link, useParams} from "react-router-dom";
import appCss from "../../App.module.css";
import css from "./Task.module.css"
import {useState} from "react";
import Form from "./Form";

function Task({getCardById, updateCardDescription}) {
    const {id} = useParams()

    let card = getCardById(id)
    console.log(card)

    let description = "This task has no description"

    if(card.description.length >0){
        description = card.description
    }

    const [isFormVisible, setFormVisible] = useState(false)

    function handleClick(){
        setFormVisible(!isFormVisible)
    }

    let formHtml = []
    if(isFormVisible===false){
        formHtml.push((<p onClick={handleClick}>{description}</p>))
    }else{
        formHtml.push((<Form card={card} updateCardDescription={updateCardDescription} handleClick={handleClick} />))
    }


    return (

        <div className={appCss.container}>

            <div className={css.mainTask}>
                <div className={css.titleTask}>
                    <h2>{card.title}</h2>
                    <Link to="/">×</Link>
                </div>
                {formHtml}
            </div>


        </div>
    )
}

export default Task