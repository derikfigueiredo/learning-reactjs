//Quando há uma modificação, o react faz o processo de redenrização
//O que pode executar as funções tudo de novo 

//What is State? The state is an instance of React Component Class can be defined as an object of a set of observable properties that control 
//the behavior of the component. In other words, the State of a component is an object that holds some information that may change 
//over the lifetime of the component

import { useState } from 'react';

function App() {
  const [name, setName] = useState('Bonieky'); //useState('valor inicial da variável')
  //[Nome da variável que pode ser mudada, função que irá alterar essas variável]
  const handleClick = () => {
    setName('Pedro');
  }

  const handleButtonClick = () => {
        alert("O botão foi clicado!");
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Clique aqui</button>

      Meu nome é: {name}; {/*uma situação que a variável altera com o tempo */}
      <button onClick={handleClick}>Alterar nome</button>
    </div>
  );
}

export default App;
