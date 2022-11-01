import { useState } from 'react';
import { Movie } from './assets/types/Movies';

function App() {

    const [ movies, setMovies ] = useState<Movie[]>([]);

  const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/')
      .then((response)=>{
        return response.json();
      })
      .then((json)=>{
          setMovies(json);
      })
  }

  return(
    <div>
      <button onClick={loadMovies}>Carregar</button>
      <div>Total de Filme:{movies.length}</div>
      <div>
        {movies.map((item)=>(
          <div>
            <div>{item.titulo}</div>
            <img src={item.avatar} alt="imagem" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
