import { useLocation } from 'react-router-dom'
import MyRoutes from './MyRoutes.jsx'
import Intro from './Intro.jsx'
import '../styles/App.scss'

export default function App (){
    return (
        <div className={location === "/" ? "landing" : "wrapper"}>
           <Intro/>
           <MyRoutes/>
        </div>
    )
}