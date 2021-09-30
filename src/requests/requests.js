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

export const searchSingle = async (query = getRandomInt()) => {
    const {data} = await axios.get(
        `https://api.tvmaze.com/shows/${query}`
    );
    return data;
}

const exportArr = [searchShows, searchSingle];

export default exportArr;