var path = require('path');

module.exports = {
    context: path.join(__dirname, 'public'), // исходная директория
    entry: './js/app/app', // файл для сборки, если несколько - указываем hash (entry name => filename)
    output: {
        path: path.join(__dirname, 'public/js'), // выходная директория,
        filename: 'bundle.js'
    }
};