/*import { useReducer } from 'react';

type reducerState = {
  count: number;
}
//reducerState é um objeto, então abrimos {} e colocamos o nome e o tipo de dado que ele irá receber

type reducerAction = {
    type: string;
}


//const reducer = (valor atual do reducer, ação a ser executada)
//Os parâmetros do reducer precisam ser tipados
const reducer = (state: reducerState, action: reducerAction)=>{
  switch(action.type) {
    case 'ADD': 
      return {...state, count: state.count + 1}
    break;
    case 'DEL':
      if(state.count > 0) {
      return {...state, count: state.count - 1}
      }
    break;
    case 'RESET':
      return initialState
  }
  return state;
}

const initialState = {count:0}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState) //uso do hook useReducer
  //const [onde vai ter as informações, ] = useReducer(função, valor inicia)
  return(
    <>
      <div>Contagem: {state.count}</div>
      <hr />
      <button onClick={() => dispatch({type: 'ADD'})}>Adicionar</button>
      <button onClick={()=> dispatch({type: 'DEL'})}>Remover</button>
      <button onClick={()=> dispatch({type: 'RESET'})}>Resetar</button>
    </>
  )
}

export default App;*/

import { useContagem } from './reducers/contagem';

function App() {

  const [state, dispatch] = useContagem() 
  return(
    <>
      <div>Contagem: {state.count}</div>
      <hr />
      <button onClick={() => dispatch({type: 'ADD'})}>Adicionar</button>
      <button onClick={()=> dispatch({type: 'DEL'})}>Remover</button>
      <button onClick={()=> dispatch({type: 'RESET'})}>Resetar</button>
    </>
  )
}

export default App;

