import { ChangeEvent, useState } from 'react';
import { Post } from "./assets/types/posts";
import { PostForm } from "./components/postForm";
import { PostItem } from "./components/PostItem";
import { api } from "./assets/types/api";

function App() {

    const [ loading, setLoading ] = useState(false);
    const [ post, setPost] = useState<Post[]>([]);
 

  const loadPost = async () => {
    setLoading(true);
    let json = await api.getAllPost()
    console.log(json);
    setPost(json);
    setLoading(false);

  } /***/

  const handleAddPost = async (title:string, body: string) => {
    let json = await api.addNewPost(title, body, 1);
     if(json.userId) {
      alert('Post adicionado com sucesso');
     } else {
      alert('ocorreu um erro');
     }

 }


  return(

    <div className="p-5">

    <PostForm onAdd={handleAddPost}/>


    
    {loading &&   
      <div>carregando...</div> 
    }

    {!loading &&
    <div>
     <button onClick={loadPost}>Carregar</button>
     <div>Total de Posts:{post.length}</div>
     <div>
       {post.map((item)=>(
          <PostItem data={item}></PostItem>
       ))}
        </div>
        </div>
    }

    {!loading && post.length === 0 && 
    <div>Tente mais tarde!</div>
    }
     
      </div>
  );
}

export default App
