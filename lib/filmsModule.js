const fs = require('fs');

const libreria = {
    saveInfo: function (title, year, stars) {
        // https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_stat_path_options_callback
        // https://www.w3schools.com/js/js_json_stringify.asp
        if (fs.existsSync('./myDdbb')) {
            console.log('Folder exists.');

            fs.readFile('./myDdbb/myFilms.json', (err, data) => {
                if (err) throw err;
                let obj = JSON.parse(data);
                let film = {
                    filmTitle: title,
                    filmYear: year,
                    filmStars: stars
                };
                obj.table.push(film);

                let data1 = JSON.stringify(obj, null, 2);

                fs.writeFile('./myDdbb/myFilms.json', data1, (err) => {
                    if (err) throw err;
                    console.log('Data written to file');
                });
                // console.log();
            });
        } else {
            fs.mkdir('./myDdbb', (err) => {
                if (err) throw err;
                console.log('Folder created.');

                let obj = {
                    table: []
                };

                let film = {
                    filmTitle: title,
                    filmYear: year,
                    filmStars: stars
                };
                obj.table.push(film);

                let data = JSON.stringify(obj, null, 2);

                fs.writeFile('./myDdbb/myFilms.json', data, (err) => {
                    if (err) throw err;
                    console.log('Data written to file');
                });
            });
        }
    }
};

module.exports = libreria;