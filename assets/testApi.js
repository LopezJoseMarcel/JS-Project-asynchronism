import fetch from "node-fetch";
const API = 'https://rickandmortyapi.com/api/character';


async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anFunction = async function(urlApi){
    const data = await fetchData(`${urlApi}`);
    const characters = await data.results;
    const character = characters[0].name;
   // console.log(data);
   // console.log(characters);
    console.log(character);

}

anFunction(API);