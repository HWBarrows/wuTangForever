import { NavLink, useLocation } from "react-router-dom"
import '../styles/Intro.scss'

export default function Intro (){
    const introLocation = useLocation().pathname
    
    return (

        <div className={introLocation === "/" ? "landing" : "wrapper"}>
        
        <h1><NavLink to="intro">Forever</NavLink></h1>
            <div className="clearBack">
                <nav className="clearBack">
                <ul className="clearBack">    
                <li className="clearBack"><NavLink to="gza">Gza</NavLink></li>
                <li className="clearBack"><NavLink to="rza">Rza</NavLink></li> 
                <li className="clearBack"><NavLink to="inspectahDeck">Inspectah Deck</NavLink></li> 
                <li className="clearBack"><NavLink to="uGod">U-God</NavLink></li> 
                <li className="clearBack"><NavLink to="ghostfaceKillah">Ghostface Killah</NavLink></li> 
                <li className="clearBack"><NavLink to="methodMan">Method Man</NavLink></li> 
                <li className="clearBack"><NavLink to="raekwon">Raekwon</NavLink></li> 
                <li className="clearBack"><NavLink to="mastaKilla">Masta Killa</NavLink></li> 
                <li className="clearBack"><NavLink to="cappadonna">Cappadonna</NavLink></li> 
                <li className="clearBack"><NavLink to="oldDirtyBastard">Old Dirty Bastard</NavLink></li>  
                </ul>
                </nav>
            </div>
            
       </div>
    )
}