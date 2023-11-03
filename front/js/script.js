const protocolo = 'http://';
const baseURL = 'localhost:3000';
const filmesEndpoint = '/filmes';

async function obterFilmes () {
    //console.log ("teste 1 2 3 ");
    const URLcompleta = `${protocolo}${baseURL}${filmesEndpoint}`;
    const filmes = (await axios.get(URLcompleta)).data;
    console.log (filmes);
}