import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {entityConfig} from './data-access/entity-metadata';
import {DefaultDataServiceConfig, EntityDataModule, EntityDataService, HttpUrlGenerator} from '@ngrx/data';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {AppHttpUrlGenerator} from './data-access/app-http-url-generator';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://jsonplaceholder.typicode.com/',
  timeout: 3000, // request timeout
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
    }),
  ],
  providers: [
    { provide: HttpUrlGenerator, useClass: AppHttpUrlGenerator },
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
    // PostDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
