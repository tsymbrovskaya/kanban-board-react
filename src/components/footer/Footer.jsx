import css from './Footer.module.css'
import appCss from "../../App.module.css";

function Footer({panels,config}) {
    let activeTasks = 0
    let finishedTasks=0

    let now=new Date()

    panels.forEach(function (panel) {
        if (panel.title === "In Progress") {
            activeTasks = panel.cards.length
        }

        if(panel.title==="Finished"){
            finishedTasks=panel.cards.length
        }

    })


    const containerFooterContent = appCss.container + " " + css.footerContent

    return (
        <footer className={css.footer}>
            <div className={containerFooterContent}>
                <div className={css.footerInfo}>
                    <p>Active tasks:{activeTasks}</p>
                    <p>Finished tasks:{finishedTasks}</p>
                </div>
                <div className={css.footerInfo}>
                    <p>Kanban board by <a href={config.author.url}>{config.author.name}</a>,{now.getFullYear()}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
