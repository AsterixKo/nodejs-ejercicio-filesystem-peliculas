const processBookModule = require('./lib/filmsModule');

console.log('Arguments:', process.argv);

if (process.argv.length < 4) {
    console.log('Error en argumentos, debe indicar titulo, año y valoración de 0 a 5');
} else {
    const filmTitle = process.argv[2];
    const filmYear = process.argv[3];
    const filmStars = process.argv[4];

    processBookModule.saveInfo(filmTitle, filmYear, filmStars);
}