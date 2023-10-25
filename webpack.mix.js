const mix = require('laravel-mix');
const GlobstackMix = require('globistack-mix');

/**
 * Additional settings
 */
mix.options(GlobstackMix.getConfig());

/**
 * Vendor libraries
 */
mix.styles([
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
], 'public/bootstrap5.min.css');

mix.scripts([
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/@popperjs/core/dist/umd/popper.min.js',
], 'resources/assets/dist/js/bootstrap5.min.js');

/**
 * Optimize minified assets
 */
mix.then(data => GlobstackMix.optimize(data));