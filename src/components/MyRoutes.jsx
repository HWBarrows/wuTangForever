import { Route, Routes } from 'react-router-dom'
import Intro from './Intro.jsx'
import { Rza, Gza,InspectahDeck, UGod, GhostfaceKillah, MethodMan, Raekwon, MastaKilla, Cappadonna, OldDirtyBastard } from '../wu.jsx'

export default function MyRoutes() {

    return (
            <Routes>
                    
                    <Route index element={<div />}/>
                    <Route path="intro" element={<div />}/>
                    <Route path="rza" element={<Rza/>}/>
                    <Route path="gza" element={<Gza/>}/>
                    <Route path="inspectahDeck" element={<InspectahDeck/>}/>
                    <Route path="uGod" element={<UGod/>}/>
                    <Route path="ghostfaceKillah" element={<GhostfaceKillah/>}/>
                    <Route path="methodMan" element={<MethodMan/>}/>
                    <Route path="raekwon" element={<Raekwon/>}/>
                    <Route path="mastaKilla" element={<MastaKilla/>}/>
                    <Route path="cappadonna" element={<Cappadonna/>}/>
                    <Route path="oldDirtyBastard" element={<OldDirtyBastard/>}/>
            </Routes>
    )
}