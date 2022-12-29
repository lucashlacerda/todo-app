import { useContext } from "react";
import { AppContext } from "../AppContext";
import './header.css'
import nightDesktopBackground from '../assets/bg-desktop-dark.jpg'
import lightDesktopBackground from '../assets/bg-desktop-light.jpg'

import sunIcon from '../assets/icon-sun.svg'
import moonIcon from '../assets/icon-moon.svg'

function Header (props){
    const context = useContext(AppContext);

    return(
        
        <header style={{backgroundImage: `url(${context ? nightDesktopBackground : lightDesktopBackground})`}}>
            <h1>TODO</h1>
            <img src={context ? sunIcon : moonIcon} onClick={props.handleLightMode} alt="Icon to change the light mode."/>
        </header>

    )

}
export default Header

