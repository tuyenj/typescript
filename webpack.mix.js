const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .ts('resources/ts/product.ts', 'public/js')
    .ts('resources/ts/product-repository.ts', 'public/js')
    .ts('resources/ts/cart-item.ts', 'public/js')
    .ts('resources/ts/cart.ts', 'public/js')
    .ts('resources/ts/shopping.ts', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
