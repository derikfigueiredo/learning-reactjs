import { useState } from 'react';
import { Movie } from './assets/types/Movies';

function App() {

    const [ movies, setMovies ] = useState<Movie[]>([]);
    const [ loading, setLoading ] = useState(false);

  const loadMovies = () => {
    try {
      setLoading(true)
      fetch('https://api.b7web.com.br/cinema/')
        .then((response)=>{
          return response.json();
        })
        .then((json)=>{
            setMovies(json);
            setLoading(false)
        })
     } catch(e) {
          setLoading(false)
          setMovies([])
          console.log(e);
      }
  }

  return(

    <div>  
    {loading &&   
      <div>carregando...</div> 
    }

    {!loading &&
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
    }

    {!loading && movies.length === 0 && 
    <div>Tente mais tarde!</div>
    }
     
      </div>
  );
}

export default App
