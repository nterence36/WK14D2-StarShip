
export async function getAllStarships() {
  try {
    const response = await fetch(`https://swapi.dev/api/starships`);
    const responseData = await response.json();

    console.log(responseData.results)
    return responseData.results;
   }catch(e) {
    console.error(e)
   }
}