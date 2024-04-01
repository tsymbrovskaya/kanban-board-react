import css from './Panel.module.css'
import List from "../list/List";
import Form from "../form/Form";

function Panel({panel, createNewCard,getPanelByOrder,moveCardFromTo}){

    return(
        <div className={css.panel}>
            <div className={css.panelHeader}>{panel.title}</div>
            <div className={css.panelContent}>
                <List cards={panel.cards}/>
            </div>
            <div className={css.panelFooter}>
                <Form
                    panel={panel}
                    createNewCard={createNewCard}
                    getPanelByOrder={getPanelByOrder}
                    moveCardFromTo={moveCardFromTo}
                />
            </div>
        </div>
 )
}

export default Panel