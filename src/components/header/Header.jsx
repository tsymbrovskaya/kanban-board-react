import css from './Header.module.css'
import appCss from '../../App.module.css'
import userAvatar from '../../assets/user-avatar.png'
import arrowDown from '../../assets/arrow-down.png'
import {useState} from "react";
import {Link} from "react-router-dom";

function Header() {
    const containerHeaderContent = appCss.container + " " + css.headerContent

    const [isMenuVisible, setIsMenuVisible] = useState(false)

    let menuHtml = []
    let arrowClass=""
    if (isMenuVisible === true) {
        menuHtml.push((
            <div className={css.menuContainer}>
                <div className={css.tail}></div>
                <div className={css.menu}>
                    <ul>
                        <li><Link to="#">Profile</Link></li>
                        <li><Link to="#">Log Out</Link></li>
                    </ul>
                </div>
            </div>
        ))
        arrowClass = css.arrowRotate
    }

    function toggleMenu() {
        setIsMenuVisible(!isMenuVisible)
    }


    return (
        <header className={css.header}>
            <div className={containerHeaderContent}>
                <div className={css.appLogo}>Awesome Kanban Board</div>
                <div onClick={toggleMenu} className={css.userMenu}>
                    <img src={userAvatar}/>
                    <img className={arrowClass} src={arrowDown}/>
                    {menuHtml}
                </div>
            </div>
        </header>
    )
}

export default Header