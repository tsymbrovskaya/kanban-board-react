import css from "./Form.module.css";
import listCss from "../list/List.module.css";
import {useState} from "react";

function FormCreateCard({createNewCard,handleAddNewClick}){
    const inputCardClass = listCss.panelCard + " " + css.inputCard
    const submitButtonClass = css.button + " " + css.buttonSubmit
    const [newCardText, setNewCardText]= useState("")


    function addNewCard(event){
        event.preventDefault()
        if(newCardText.length >0){
            createNewCard(newCardText)
        }
    }


    function handleSubmit(event){
        addNewCard(event)
        setNewCardText("")
        handleAddNewClick()
    }

    function handleChangeInput(event){
        setNewCardText(event.target.value)
    }

    return(
        <form className={css.form} onSubmit={handleSubmit}>
            <input className={inputCardClass} value={newCardText} onChange={handleChangeInput}/>
            <input className={submitButtonClass} type="submit" value="Submit"/>
        </form>
    )
}

export default FormCreateCard