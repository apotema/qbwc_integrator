import {bootstrap}      from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {AppComponent}   from './app.component';

export function main() {
  //enableProdMode();
  return bootstrap(AppComponent, [
    // These are dependencies of our App
    // HTTP_PROVIDERS,
    // ROUTER_PROVIDERS,
    // ELEMENT_PROBE_PROVIDERS
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
