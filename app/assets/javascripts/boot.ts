import {bootstrap}             from 'angular2/platform/browser';
import {enableProdMode}        from 'angular2/core';
import {provide}               from 'angular2/core';
import {AppCmp}                from './components/app/app';
import {ROUTER_PROVIDERS}      from 'angular2/router';
import {LocationStrategy}      from 'angular2/router';
import {HashLocationStrategy}  from 'angular2/router';
import {HTTP_PROVIDERS}        from 'angular2/http';

export function main() {
    //enableProdMode();
    return bootstrap(AppCmp, [
    // These are dependencies of our App
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    // ELEMENT_PROBE_PROVIDERS
    provide(LocationStrategy, { useClass: HashLocationStrategy })
    ]).catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
