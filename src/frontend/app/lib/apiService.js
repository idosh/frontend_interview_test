// const baseUrl = "https://api.mcmakler.de/v1/advertisements";
// tried a normal fetch bot got CORS
// tried jsonp but server doesnot support
// import fetchJsonp from 'fetch-jsonp';

// so I take the needed data and serve it my own

// OLD
// const baseUrl = "https://api.mcmakler.de/v1/advertisements";
// NEW
const baseUrl = "http://localhost:3000/data";



export const fetchListings = () => {
    return fetch(baseUrl)
        .then((res)=>res.json())
}
