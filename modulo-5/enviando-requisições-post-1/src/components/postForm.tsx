import { useState, ChangeEvent } from 'react';

type Props = {
    onAdd: ( title: string, body:string ) => void;
}
export const PostForm = function({ onAdd }: Props) {

    const [ addTitleChange, setAddTitleChange ] = useState('');
    const [ addBodyChange, setAddBodyChange ] = useState('');

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitleChange(e.target.value);
      }
    
      const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
          setAddBodyChange(e.target.value);
      }

      const handleAddClick = () => {
        if(addTitleChange && addBodyChange) {
            onAdd(addTitleChange, addBodyChange);
        } else {
            alert('preencha os campos')
        }
      }

    return(
        <fieldset className='border-2 mb-3 p-3'>
            <legend>Adicionar um Novo Post</legend>
            <input 
            value={addTitleChange}
            className='block border' 
            type="text" 
            placeholder='Digite um título'
            onChange={handleTitleChange}
            />
            <textarea 
            value={addBodyChange}
            className='block border'
            onChange={handleBodyChange}></textarea>
            <button className='block border' onClick={handleAddClick}>Adicionar</button>
        </fieldset>
    )
 
}
