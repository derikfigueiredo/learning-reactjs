//08-RENDERIZANDO CONTEÚDO CONDICIONAL

import { useState } from 'react';


function App() {

 const [show, setShow] = useState(true);
 
 const handleClick = () => {
    setShow(!show); //! evita usar o if e Else como toggle
 }
  return (
    <div>
        <button onClick={handleClick}>{show? 'Ocultar':'Mostrar'}</button>
    {/*RENDERIZANDO CONTEÚDO CONDICIONAL
        show === true -pode ser simplificado para -> show */}
    {show === true && 
      <div>
      bla bla bla...
    </div> 
    }
        
    </div>
  );
}

export default App;
