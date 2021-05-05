import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';

import {AppComponent} from './app.component';
import {WcmpButtonComponent} from './wcmp-button/wcmp-button.component';

@NgModule({
  declarations: [
    AppComponent,
    WcmpButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {
    const wCmpButton = createCustomElement(WcmpButtonComponent, {injector});
    customElements.define('wcmp-button', wCmpButton);
  }

  // tslint:disable-next-line:typedef
  ngDoBootstrap() {
  }
}
