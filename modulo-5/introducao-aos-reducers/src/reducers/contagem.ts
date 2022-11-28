//AQUI CRIAMOS UM HOOK 

import { useReducer } from 'react';

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
        return {...state, count: state.count + 1};
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

export const useContagem = () => {
    return useReducer(reducer, initialState)
}

