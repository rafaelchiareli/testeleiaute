import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../Pages/Inicio";
import Sobre from "../Pages/sobre";


const Routes = () => {
   return(
       <BrowserRouter>
       <Routes>
           <Route component = { Home }  path="/" exact />
           <Route component = { Sobre }  path="../Pages/sobre.js" />
           </Routes>
       </BrowserRouter>
   )
}

export default Routes;