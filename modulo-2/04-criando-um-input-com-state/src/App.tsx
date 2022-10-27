import React, {useState} from "react";

function App() {
  const [name, setName] = useState('Pedro');


  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  return (
    <div> 
       <input type="text" value={name} onChange={handleInput}/>
       <div>Seu nome é:{name}</div>
    </div>
  );
}

export default App;
