const API = 'https://rickandmortyapi.com/api/character/'

const getData = async(id) =>{
    const apiURL = id ? `${API}${id}` : API;
    try{
        const response = await fetch(apiURL);
    }catch (error) {
        console.log('Fetch Error', error);
      };
};
export default getData;