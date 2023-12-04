import Header from "./Component/Header";
import Addfinance from "./Component/Addfinance"
import Allfinance from "./Component/Allfinance";
import {BrowserRouter as Router, Route , Routes} from "react-router-dom"

//import Editcustomerinfo from "./Component/Edit";

function App() {
  return (
<Router>
    
    <nav>
     <Header/> 
     </nav>
     <Routes>
       <Route path = "/add" element ={<Addfinance/>} />
       
       <Route path = "/" element = {<Allfinance/>} />
       </Routes> 
       
</Router>

  );
  
}

export default App;