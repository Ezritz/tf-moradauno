import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import Formulary from './components/Formulary'
import Files from './components/Files'
import GetImg from './components/Save-imgs/Get-imgs'
import LogIn from './components/LogIn'

function App (){

     const { user } = useAuth();
  

    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Formulary user={user}/>}/>
                    <Route path="/logIn" element={<LogIn />}/>
                    <Route path="/down-imgs" element={<Files/>}/>
                    {/* <Route path="/prev-inventario" element={<GetImg/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}
export default App