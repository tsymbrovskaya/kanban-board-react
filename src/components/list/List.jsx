import css from './List.module.css'
import {Link} from "react-router-dom";

function List({cards}){

    let cardsList=[]

    cards.forEach(function (card){
        const link = "tasks/"+card.id
        cardsList.push(
            (
                <Link className={css.cardLink} to={link}><div className={css.panelCard}>{card.title}</div></Link>
            )
        )
    })

    return (
        <>
        {cardsList}
        </>
    )
}

export default List