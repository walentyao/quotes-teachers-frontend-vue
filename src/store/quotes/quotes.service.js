import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/quotes',
    timeout: 1000,
})

export async function getAllQuotes() {
    const {data} = await instance.get('/');
    console.log(data)
    return data;
}

export async function createQuote({teacher, faculty, content}, token) {
    const {data} = await instance.post('/', {
        teacher, faculty, content
    },{
        headers:{
            Authorization:`Bearer ${token}`
        }
    });

    return data;
}

export async function getQuotes(pack, limit){
    const {data, headers} = await instance.get('/fixed',{
        params:{
            pack,
            limit
        }
    });
    return {quotes:data, headers};
}

export async function checkLike(quoteId, token){
    const {data} =  await instance.get('/likes', {
        params: {
            quoteId
        },
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    return data;
}

export async function likedQuote(quoteId, token){
    const {data} =  await instance.post('/likes', {},{
        params: {
            quoteId
        },
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    return data;
}

export async function deleteLikedQuote(quoteId, token){
    const {data} =  await instance.delete('/likes',{
        params: {
            quoteId
        },
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    return data;
}