let mix = require('laravel-mix');

mix.setPublicPath('./dist');

// mix.webpackConfig({
//     externals: {
//         jquery: 'jQuery'
//     }
// });

mix.js('src/script.js', '');

mix.sass('src/style.scss', '');
