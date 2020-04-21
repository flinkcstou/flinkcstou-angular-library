import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MockupHttpModule } from '../../../mockup-http/src/lib/mockup-http.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MockupHttpModule.forRoot(environment.production),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
