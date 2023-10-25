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
], 'public/css/bootstrap5.min.css');

mix.scripts([
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/@popperjs/core/dist/umd/popper.min.js',
], 'public/js/bootstrap5.min.js');

/**
 * Optimize minified assets
 */
mix.then(data => GlobstackMix.optimize(data));