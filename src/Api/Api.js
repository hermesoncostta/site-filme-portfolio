const chaveApi = "b78efd176603c3a37f5658c9bee05854";
const urlBase = "https://api.themoviedb.org/3";



const basicFetch = async(endpoint) => {
    const req = await fetch(`${urlBase}${endpoint}`);
    const json = await req.json();
    return json;
}


export default {
    getHomeList: async () => {
        return [
            {
                slug: "toprated",
                title: "Em Alta",
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${chaveApi}`)
            },

            {
                slug: "trending",
                title: "Recomendados para você",
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${chaveApi}`)
            },

            {
                slug: "populares",
                title: "Populares",
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${chaveApi}`)
            },
            {
                slug: "action",
                title: "Ação",
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${chaveApi}`)
            },

            {
                slug: "comedy",
                title: "Comedia",
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${chaveApi}`)
            },

            {
                slug: "horror",
                title: "Terror",
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${chaveApi}`)
            },

            {
                slug: "romance",
                title: "Romance",
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${chaveApi}`)
            },

            {
                slug: "documentary",
                title: "Documentários",
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${chaveApi}`)
            },


            
        ]
    },

    getMovieInfo: async (movieId, type) =>{
        let info = {};

        if(movieId) {
            switch(type){
                case "movie":
                info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${chaveApi}`)
                break;

                case "tv":
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${chaveApi}`)

                break;
                default:
                    info = null;
                    break;
            }
        }

        return info;

    }
    
}






    







