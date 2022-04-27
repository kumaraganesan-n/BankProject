import { Menus } from "./Navi";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { NewAccount } from "./SignUp";
import { Login } from "./Login";
import {Home} from "./Home";
const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Menus/>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/sign" exact element={<NewAccount/>}/>
          <Route path="/home" exact element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App; 
