import css from "./Form.module.css"
import plusImg from "../../assets/plus.svg"
import {useState} from "react";
import FormCreateCard from "./FormCreateCard";
import FormMoveCard from "./FormMoveCard";

function Form({panel, createNewCard, getPanelByOrder, moveCardFromTo}) {


    const buttonClass = css.button + " " + css.buttonAdd
    const [isFormVisible, setFormVisible] = useState(false)
    let prevPanel = getPanelByOrder(panel.order-1)

    function handleAddNewClick() {
        setFormVisible(!isFormVisible)
    }

    let formHtml = []
    if (isFormVisible === false) {
        let isButtonEnabled = true

        if(prevPanel !== null && prevPanel.cards.length === 0){
            isButtonEnabled = false
        }

        formHtml.push((
            <button disabled={!isButtonEnabled} className={buttonClass} onClick={handleAddNewClick}>
                <img src={plusImg}/>Add card
            </button>
        ))
    } else {
        if (panel.order === 0) {
            formHtml.push((
                <FormCreateCard createNewCard={createNewCard} handleAddNewClick={handleAddNewClick} />
            ))
        } else {
            if(prevPanel !== null && prevPanel.cards.length > 0){
                formHtml.push((
                    <FormMoveCard panel={panel} prevPanel={prevPanel} moveCardFromTo={moveCardFromTo}/>
                ))
            }
        }
    }

    return formHtml
}

export default Form