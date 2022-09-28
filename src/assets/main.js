//import fetch from "node-fetch";//This is already in the browser
const API = 'https://rickandmortyapi.com/api/character';
const content = null || document.getElementById('content');


async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

//function called itself after running the code above
//Important
(async () => {
  try {
    const data = await fetchData(`${API}`);
    const characters = await data.results;
    let view = ` 
    ${characters.map(character => `
    <div class="group relative">
     <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${character.image}" alt="" class="w-full">
     </div>
     <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${character.name}
      </h3>
     </div>
   </div>
    `).slice(0,10).join('')} 
    `;
    content.innerHTML = view;
  } catch (error){
    console.log(error);
  }
})();
