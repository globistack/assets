const mix = require('laravel-mix');
const GlobstackMix = require('globistack-mix');

/**
 * Additional settings
 */
mix.options(GlobstackMix.getConfig());

/**
 * Bootstrap libraries
 */
mix.styles([
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
], 'public/css/bootstrap5.min.css');

mix.scripts([
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/@popperjs/core/dist/umd/popper.min.js',
], 'public/js/bootstrap5.min.js');

/**
 * Select2 libraries
 */
mix.styles([
    'node_modules/select2/dist/css/select2.min.css',
    'node_modules/select2-bootstrap-5-theme/dist/select2-bootstrap-5-theme.min.css'
], 'public/css/select2.min.css');

mix.scripts([
    'node_modules/select2/dist/js/select2.min.js',
], 'public/js/select2.min.js');

/**
 * List.js libraries
 */

mix.scripts([
    'node_modules/list.js/dist/list.min.js',
], 'public/js/list.min.js');

/**
 * Optimize minified assets
 */
mix.then(data => GlobstackMix.optimize(data));