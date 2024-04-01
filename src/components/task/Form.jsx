import {useState} from "react";

function Form({card,updateCardDescription,handleClick}){

    const [newDescription,setNewDescription]=useState(card.description)

    function handleSubmit(event){
        event.preventDefault()
        updateCardDescription(card.id,newDescription)
        handleClick()


    }

    function handleChangeTextarea(event){
        setNewDescription(event.target.value)
    }


    return(
        <form onSubmit={handleSubmit}>
            <textarea value={newDescription} onChange={handleChangeTextarea}></textarea>
            <input type="submit"/>
        </form>
    )

}
export default Form