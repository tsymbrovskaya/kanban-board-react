import css from './Board.module.css'
import appCss from "../../App.module.css";
import Panel from "../panel/Panel";

function Board({panels, setPanels, toggleRefreshPanels}) {
    let panelsList = []

    function createNewId() {

        let maxId = 0
        panels.forEach(function (panel) {
            panel.cards.forEach(function (card) {
                if (card.id > maxId) {
                    maxId = card.id
                }
            })
        })
        return maxId + 1
    }

    function moveCardFromTo(id, orderFrom, orderTo) {
        let targetCard

        panels.forEach(function (panel) {
            if (panel.order === orderFrom) {
                panel.cards.forEach(function (card, index) {
                    if (card.id === id) {
                        targetCard = card
                        panel.cards.splice(index, 1)
                    }
                })
            }
        })

        if(targetCard){

            panels.forEach(function (panel) {
                if (panel.order === orderTo) {
                    panel.cards.push(targetCard)
                }
            })
            setPanels(panels)
            toggleRefreshPanels()
        }
    }

    function getPanelByOrder(order) {
        let result = null
        panels.forEach(function (panel) {
            if (panel.order === order) {
                result = panel
                return
            }
        })
        return result
    }

    function createNewCard(text) {
        panels.forEach(function (panel) {
            if (panel.order === 0) {
                panel.cards.push({
                    id: createNewId(),
                    title: text,
                    description: ""
                })
            }
        })
        setPanels(panels)
        toggleRefreshPanels()
    }


    panels.forEach(function (panel) {
        panelsList.push(<Panel
            panel={panel}
            createNewCard={createNewCard}
            getPanelByOrder={getPanelByOrder}
            moveCardFromTo={moveCardFromTo}
        />)
    })


    const containerMainContent = appCss.container + " " + css.mainContent

    return (
        <div className={containerMainContent}>
            {panelsList}
        </div>
    )
}

export default Board