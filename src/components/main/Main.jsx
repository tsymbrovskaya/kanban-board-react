import Board from "../board/Board";
import { Routes, Route } from 'react-router-dom';
import Task from "../task/Task";

function Main(props){

    function getCardById(id){
        id = parseInt(id)
        let resultCard

        props.panels.forEach(function (panel){
            panel.cards.forEach(function (card){
                if(card.id === id){
                    resultCard = card
                    return
                }
            })
        })

        return resultCard
    }

    function updateCardDescription(id,description){
        props.panels.forEach(function (panel){
            panel.cards.forEach(function (card){
                if(card.id===id){
                    card.description=description
                    return
                }
            })
        })
        props.setPanels(props.panels)
    }


    return(
        <main>
            <Routes>
                <Route index element={<Board {...props}/>}/>
                <Route path="/tasks/:id" element={<Task getCardById={getCardById} updateCardDescription={updateCardDescription}/>}/>
            </Routes>
        </main>
    )
}
export default Main