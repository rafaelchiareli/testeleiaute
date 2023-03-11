import './App.css'
import React, { useState } from 'react';
import AbaLateral from './Componentes/abaLateral';
import Meio from './Componentes/meio';
import Direita from './Componentes/direita';






function App() {


  return (
    <div className='divPrincipal'>
      <AbaLateral />
      <Meio />
<Direita />
    
    </div>

  );
}


export default App;
