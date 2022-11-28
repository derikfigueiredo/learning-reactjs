import axios from "axios";

const BASE = "https://jsonplaceholder.typicode.com";

export const api = {
    addNewPost: async (title:string, body:string, userId:number) => {  
        let response = await axios.post(`${BASE}/posts`, { title, body, userId });

        return response.data;
        /*
    let response = await fetch(`${BASE}/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, body, userId: 1 }),
        headers: {'Content-Type': 'application/json'}
    })
    let json = await response.json();
    return json;*/
    },

    getAllPost: async ()=> {
        let response = await fetch(`${BASE}/posts`);
        let json = await response.json();
        return json;
    }
}