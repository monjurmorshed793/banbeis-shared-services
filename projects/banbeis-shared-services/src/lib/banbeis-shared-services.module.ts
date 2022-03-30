import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import { BanbeisSharedServicesComponent } from './banbeis-shared-services.component';
import {HttpClientModule} from "@angular/common/http";
import { BanglaNumberTranslatePipe } from './pipes/bangla-number-translate.pipe';
import {APOLLO_OPTIONS, ApolloModule} from "apollo-angular";
import {InMemoryCache} from "@apollo/client/core";
import {HttpLink} from 'apollo-angular/http';

export const APP_URL = new InjectionToken<string>('APP_URL')
export let HOST: string = '';

@NgModule({
  declarations: [
    BanbeisSharedServicesComponent,
    BanglaNumberTranslatePipe
  ],
  imports: [
    HttpClientModule,
    ApolloModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink)=>{
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: localStorage.getItem('host')+ '/graphql'
          })
        }
      },
      deps: [HttpLink],
      useExisting: APP_URL.toString()
    },
  ],
    exports: [
        BanbeisSharedServicesComponent,
        BanglaNumberTranslatePipe
    ]
})
export class BanbeisSharedServicesModule {
  static forRoot(host: string): ModuleWithProviders<BanbeisSharedServicesModule>{
    console.log('passed host value', host);
    localStorage.setItem('host', host);
    HOST = host;
    return {
      ngModule: BanbeisSharedServicesModule,
      providers: [{
        provide: APP_URL,
        useValue: host,
        multi: true
      }]
    }
  }
}
