import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Formulary from './components/Formulary'
import Files from './components/Files'
import GetImg from './components/Save-imgs/Get-imgs'

function App (){
    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Formulary/>}/>
                    <Route path="/down-imgs" element={<Files/>}/>
                    <Route path="/prev-inventario" element={<GetImg/>}/>


            </Routes>
        </BrowserRouter>
    )
}
export default App