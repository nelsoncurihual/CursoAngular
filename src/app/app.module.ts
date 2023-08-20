import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

//configuracion del locale de la app
import localeEsCL from '@angular/common/locales/es-CL';
import localeEsHN from '@angular/common/locales/es-HN';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsCL);
registerLocaleData(localeEsHN);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-CL',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
