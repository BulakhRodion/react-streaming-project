import axios from "axios";

 export const searchShows = async (searchTerm) => {
    const {data} = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );
    return data;
}

const getRandomInt = () => {
    return Math.floor(Math.random() * 2000);
}

export const searchSingle = async () => {
    const {data} = await axios.get(
        `https://api.tvmaze.com/shows/${getRandomInt()}`
    );
    return data;
}

export default [searchShows, searchSingle];