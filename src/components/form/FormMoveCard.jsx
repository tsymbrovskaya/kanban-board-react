import css from "./Form.module.css";
import listCss from "../list/List.module.css";
import {useState} from "react";

function FormMoveCard({panel, prevPanel, moveCardFromTo}) {

    const selectCardClass = listCss.panelCard + " " + css.selectCard
    const submitButtonClass = css.button + " " + css.buttonSubmit


    const [moveCardId, setMoveCardId] = useState(prevPanel.cards[0].id)

    function handleChangeSelect(event) {
        setMoveCardId(parseInt(event.target.value))
    }


    function moveCard(event) {
        event.preventDefault()

        let orderFrom = parseInt(event.target.dataset.panelFrom)
        let orderTo = parseInt(event.target.dataset.panelTo)

        moveCardFromTo(moveCardId, orderFrom, orderTo)
    }

    let prevPanelOptions = []
    prevPanel.cards.forEach(function (card) {
        prevPanelOptions.push(
            (<option value={card.id}>{card.title}</option>)
        )
    })

    return (
        <form data-panel-from={prevPanel.order} data-panel-to={panel.order} className={css.form} onSubmit={moveCard}>
            <select className={selectCardClass} onChange={handleChangeSelect} value={moveCardId}>
                {prevPanelOptions}
            </select>
            <input className={submitButtonClass} type="submit" value="Submit"/>
        </form>
    )

}

export default FormMoveCard